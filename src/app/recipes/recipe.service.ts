import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {ShoppingList} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
	recipesChanged=new Subject<Recipe[]>();

	private recipes :Recipe[]= [
    new Recipe('a test recipe',
    	'test','http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10175206_1494287020786579_1560419083_n.jpg?ig_cache_key=NzA5NDYyNzQ3MjgxMzkwMTYx.2',
    	[new Ingredient('Meat',1),
    	new Ingredient('French Fries',2)
    	]
    	),
    	new Recipe('a testpk recipe','test2','http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10175206_1494287020786579_1560419083_n.jpg?ig_cache_key=NzA5NDYyNzQ3MjgxMzkwMTYx.2',[
    	new Ingredient('Buns',23),
    	new Ingredient('French Fries',2)
    	])
  ];

	constructor(private slService:ShoppingList) {

	}
	getRecipe(index:number){
		return this.recipes[index];
	}
	getRecipes(){
		return this.recipes.slice();
	}
	addIngredientsToShoppingList(ingredients:Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
	addRecipe(recipe:Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	updateRecipe(index:number,newRecipe:Recipe){
		this.recipes[index]=newRecipe;
		this.recipesChanged.next(this.recipes.slice());

	}
	deleteRecipe(index:number){
		this.recipes.splice(index,1);
		this.recipesChanged.next(this.recipes.slice())
	}
	setRecipes(recipes:Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());	
	}
}
