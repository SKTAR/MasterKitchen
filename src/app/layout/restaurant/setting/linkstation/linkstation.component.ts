import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocalDataService } from '../../../../shared/services/localdata.service';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';

@Component({
  selector: 'app-linkstation',
  templateUrl: './linkstation.component.html',
  styleUrls: ['./linkstation.component.scss']
})
export class LinkstationComponent implements OnInit {

  images=[];
  menuCategoryList: string[] = [];
  constructor(private localService:LocalDataService,    
              private menuService: MenuService,) { 
    this.images = this.localService.getImageStringArray();
  }

  ngOnInit() {
  }
  onLoaded(args) {
  }

  public listAllCategory() {
    this.menuService.listCategories().pipe(map((response: string[]) => {
      return this.menuCategoryList = response;
    }))
      .subscribe((response) => {
        console.log(response);
      },
        error => {
          alert('Cannot get Menu Category' + error);
          console.log(error);
        });
  }
 

}
