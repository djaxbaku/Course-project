import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingList} from './shopping-list.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  constructor(private slservice:ShoppingList) { }

  ngOnInit() {
    this.ingredients=this.slservice.getIngredients();
     this.slservice.ingredientsChanged.subscribe((ingredients: Ingredient[])=>this.ingredients=ingredients);
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);

  }
}
