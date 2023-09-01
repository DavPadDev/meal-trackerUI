import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/types';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {
	@Input() isLoading: boolean = true;
	@Input() ingredients: Ingredient[] = [];

	@Output() deleteIngredient = new EventEmitter<string>();

  
	onDelete(ingredientName: string): void {
		this.deleteIngredient.emit(ingredientName);
	}

}
