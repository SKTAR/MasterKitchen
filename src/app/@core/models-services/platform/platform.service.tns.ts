import { Injectable, Optional } from '@angular/core';
import { DeviceType } from 'tns-core-modules/ui/enums/enums';
import { isAndroid, isIOS, device, screen } from 'tns-core-modules/platform';
class DeviceInfo {
    constructor(
        public model: string,
        public deviceType: string,
        public os: string,
        public osVersion: string,
        public sdkVersion: string,
        public language: string,
        public manufacturer: string,
        public uuid: string
    ) { }
}

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService  {
  
   isTablet: boolean = device.deviceType === DeviceType.Tablet;
   public isItemVisible: boolean = false;
   public deviceInformation: DeviceInfo;
   public isItemVisibleScreenInfo: boolean = false;
   public screenInformation: ScreenInfo;
   public deviceInfoButton: string = "Show device info";
   public screenInfoButton: string = "Show/Hide screen info";

   constructor() {
       this.deviceInformation = new DeviceInfo(
           device.model,
           device.model,
           device.os,
           device.osVersion,
           device.sdkVersion,
           device.language,
           device.manufacturer,
           device.uuid);
       this.screenInformation = new ScreenInfo(
           screen.mainScreen.heightDIPs,
           screen.mainScreen.heightPixels,
           screen.mainScreen.scale,
           screen.mainScreen.widthDIPs,
           screen.mainScreen.widthPixels);
   }
 

   public checkPlatformType(args) {
       let message = "";
       if (isAndroid) {
         //  message = "You are using Android device";
       } else if (isIOS) {
           message = "You are using IOS device";
       }
      // alert(message);
   }

   public heightPixels(): number {
       return   this.screenInformation.heightPixels;
   }
   public heightDIPs(): number {
    return   this.screenInformation.heightDIPs;
}
   
   public deviceInfo(args) {
       if (this.isItemVisible) {
           this.isItemVisible = false;
           this.deviceInfoButton = "Show device info";
       } else {
           this.isItemVisible = true;
           this.deviceInfoButton = "Hide device info";
       }
   }

   public screenInfo(args) {
       if (this.isItemVisibleScreenInfo) {
           this.isItemVisibleScreenInfo = false;
           this.screenInfoButton = "Show screen info";
       } else {
           this.isItemVisibleScreenInfo = true;
           this.screenInfoButton = "Hide screen info";
       }
   }
public checkIsTablet() {
   return  this.isTablet;
}



}