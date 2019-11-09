import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RadSideDrawerService {

  public show() {
    // do nothing or add web implementation here
  }

  public hide() {
    // do nothing or add web implementation here
  }

  public load(args) {

}

    public isComponentSelected(url: string): boolean {
        return false;
    }

    public onNavItemTap(navItemRoute: string): void {
    }


    public onItemTap(event:any){

    }

    

}
