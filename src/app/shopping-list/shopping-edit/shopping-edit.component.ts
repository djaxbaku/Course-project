import { Component, OnInit, OnDestroy,ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingList} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private slService: ShoppingList) { }
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode =false;
  editedItemIndex:number;
  editedItem:Ingredient;
  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex= index;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }
  onAddItem(form:NgForm){
    const value= form.value;
    const newIngredient = new Ingredient(value.name,value.amount);

    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);
  }
}
