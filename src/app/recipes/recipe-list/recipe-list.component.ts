import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes :Recipe[]= [
    new Recipe('a test recipe','test','http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10175206_1494287020786579_1560419083_n.jpg?ig_cache_key=NzA5NDYyNzQ3MjgxMzkwMTYx.2')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
