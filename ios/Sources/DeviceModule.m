//
//  DeviceModule.m
//  WeexPluginTemp
//
//  Created by  on 17/3/14.
//  Copyright © 2017年 . All rights reserved.
//

#import "DeviceModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

@implementation DeviceModule

WX_PlUGIN_EXPORT_MODULE(device, DeviceModule)
WX_EXPORT_METHOD(@selector(postNotification:params:))
@synthesize weexInstance;

/**
 create actionsheet
 
 @param options items
 @param callback
 */
-(void)postNotification:(NSString *)eventName params:(NSDictionary *)params
{
    NSLog(@"fireGlobalEvent%@",eventName);
    if (!params){
        params = [NSDictionary dictionary];
    }
    NSDictionary * userInfo = @{
                                @"param":params
                                };
    [[NSNotificationCenter defaultCenter] postNotificationName:eventName object:self userInfo:userInfo];
}

@end
