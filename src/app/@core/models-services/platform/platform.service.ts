import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlatformService  {
  


   constructor() {
       
   }
   public heightPixels(): number {
      return 0;
   }
   public heightDIPs(){
      return 0;
   }
   public checkPlatformType(args) {
      
   }

   public deviceInfo(args) {
       
   }

   public screenInfo(args) {
      
   }
public checkIsTablet() {
   return  false;
}


}
