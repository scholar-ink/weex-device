package org.weex.plugin.device.scanner;

import android.os.Parcel;
import android.os.Parcelable;

import com.taobao.weex.bridge.JSCallback;

/**
 * Created by zhouchao on 2018/3/24.
 */

public class ScannerButton  implements Parcelable {

    public String getIcon() {
        return icon;
    }

    private String icon;

    public String getText() {
        return text;
    }

    private String text;

    public static final Creator<ScannerButton> CREATOR = new Creator<ScannerButton>() {
        public ScannerButton createFromParcel(Parcel source) {
            return new ScannerButton(source);
        }

        public ScannerButton[] newArray(int size) {
            return new ScannerButton[size];
        }
    };

    public ScannerButton(String text, String icon) {
        this.text = text;
        this.icon = icon;
    }

    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(this.text);
        dest.writeString(this.icon);
    }
//
    protected ScannerButton(Parcel in) {
        this.text = in.readString();
        this.icon = in.readString();
    }

}
