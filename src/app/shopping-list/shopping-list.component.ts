import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingList} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private subscription:Subscription;
  constructor(private slservice:ShoppingList) { }

  ngOnInit() {
    this.ingredients=this.slservice.getIngredients();
     this.slservice.ingredientsChanged.subscribe((ingredients: Ingredient[])=>this.ingredients=ingredients);
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);

  }
  ngOnDestroy(){
  //  this.subscription.unsubscribe();
  }
  onEditItem(index:number){
      this.slservice.startedEditing.next(index);
  }
}
