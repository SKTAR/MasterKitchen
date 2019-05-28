import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  selected = {};

  constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
          this.selected = JSON.parse(params["selected"]);
      });
  }
 ngOnInit() {
 }
 
}
