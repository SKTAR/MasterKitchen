import { Component, OnInit } from '@angular/core';
import { RadlistviewItemService } from './radlistview-item.service';

@Component({
  selector: 'app-radlistview',
  templateUrl: './radlistview.component.html',
  styleUrls: ['./radlistview.component.scss']
})
export class RadlistviewComponent implements OnInit {
  dataItems;
  constructor(private itemService: RadlistviewItemService) {
    this.dataItems = itemService.getMenuItems();
  }

  ngOnInit() {
  }
  onItemSelected(arg) {
       this.itemService.onItemSelected(arg);
  }
  onItemDeselected(arg) {
       this.itemService.onItemDeselected(arg);
  }
}
