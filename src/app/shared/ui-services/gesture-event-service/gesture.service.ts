import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GestureService {
  constructor() {
  }
  public show() {
    // do nothing or add web implementation here
  }

  public hide() {
    // do nothing or add web implementation here
  }

  public load() {
}


    public isComponentSelected(url: string): boolean {
        return false;
    }

    public onNavItemTap(navItemRoute: string): void {
    }
    onPan(args, dragImageItem) {
     }
}
