import { Component, OnInit, Input } from '@angular/core';
import { IngredientModel } from '../../shared/models/menu.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
@Input() ingredient: Array<IngredientModel>;
  constructor() { }

  ngOnInit() {
  }

}
