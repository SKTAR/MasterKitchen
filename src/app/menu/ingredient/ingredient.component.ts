import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/kitchen-models/menu.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: Ingredients[];
  constructor() { }

  ngOnInit() {
  }

}
