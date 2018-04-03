package org.weex.plugin.device;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.Toast;

import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.uuzuche.lib_zxing.activity.CaptureActivity;
import com.uuzuche.lib_zxing.activity.CodeUtils;
import com.uuzuche.lib_zxing.activity.ZXingLibrary;

import org.json.JSONArray;
import org.weex.plugin.device.scanner.ScannerButton;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@WeexModule(name = "device")
public class DeviceModule extends WXModule {

    public static final int REQUEST_CODE = 111;
    private int frameWidth = 220;//扫描框的宽度，单位dp
    private int frameHeight = 220;//扫描框的高度，单位dp
    private int frameCornerColor;//扫描框4角颜色rgb值
    private boolean frameHide = false;//是否隐藏扫描框，默认显示
    private String tipText = "将二维码/条形码放入框内，即可自动扫描";//提示文字
    private int tipTextColor;//提示文字颜色rgb值，默认白色
    private boolean laserMoveFullScreen = false;//扫描线全屏移动，默认在扫描框内移动
    private JSCallback onShowCallBack;
    private ArrayList<ScannerButton> buttons = new ArrayList<>();
    //sync ret example
    //TODO: Auto-generated method example
    @JSMethod
    public String syncRet(String param) {
        Log.e("syncRet: ",param);
//        show();
        return param;
    }

    //async ret example
    //TODO: Auto-generated method example
    @JSMethod
    public void asyncRet(String param, JSCallback callback) {
        callback.invoke(param);
    }

    @JSMethod
    public void createButton(HashMap<String,Object> options,String callback){

        ScannerButton button = new ScannerButton((String) options.get("text"), (String) options.get("icon"));

        Map<String,Object> map =  new HashMap<String,Object>();

        addEventListener("button", callback , map);

        this.buttons.add(button);
    }

    @JSMethod
    public void show(HashMap<String,Object> options, JSCallback callback){
        onShowCallBack=callback;
        frameWidth = (int) options.get("frameWidth");
        frameWidth = (int) options.get("frameHeight");
        frameHide = (boolean) options.get("frameHide");
        tipText = (String) options.get("tipText");
        laserMoveFullScreen = (boolean) options.get("laserMoveFullScreen");

        ZXingLibrary.initDisplayOpinion(mWXSDKInstance.getContext());
        Intent intent = new Intent(mWXSDKInstance.getContext(), CaptureMyActivity.class);
        intent.putExtra("frameWidth", this.frameWidth);
        intent.putExtra("frameHeight",frameHeight);
        intent.putExtra("frameCornerColor",frameCornerColor);
        intent.putExtra("frameHide", this.frameHide);
        intent.putExtra("tipText", this.tipText);
        intent.putExtra("laserMoveFullScreen",laserMoveFullScreen);
        intent.putExtra("buttons", (Serializable)this.buttons);
        Activity activity=(Activity)mWXSDKInstance.getUIContext();

        activity.startActivityForResult(intent,REQUEST_CODE);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_CODE) {
            //处理扫描结果（在界面上显示）
            if (null != data) {
                Bundle bundle = data.getExtras();
                if (bundle == null) {
                    return;
                }
                if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_SUCCESS) {
                    String result = bundle.getString(CodeUtils.RESULT_STRING);
                    onShowCallBack.invoke(result);
                    Toast.makeText(mWXSDKInstance.getContext(), "解析结果:" + result, Toast.LENGTH_LONG).show();
                } else if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_FAILED) {
                    Toast.makeText(mWXSDKInstance.getContext(), "解析二维码失败", Toast.LENGTH_LONG).show();
                }
            }
        }
    }
}