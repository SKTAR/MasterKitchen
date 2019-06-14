import { Component, OnInit, Input } from '@angular/core';
import { IngredientModel } from '../../../shared/models/menu.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() ingredientList: Array<IngredientModel>;
  constructor() { }

  ngOnInit() {
  }

  
   
  removeIngredient(args) {
      const ingredient = args.target.value;
      const removeIndex = this.ingredientList.findIndex(item => item === ingredient);
      // alert('index to be removed' + removeIndex);
      this.ingredientList.splice(removeIndex, 1);
      console.log(this.ingredientList);

      
    }
    
}
