import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient, Recipe } from 'src/app/types';

@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.css']
})
export class RecipeSearchPageComponent implements OnInit {
	searchInputValue: string = '';
	ingredients: Ingredient[] = [];
	searchResults: Recipe[] = [];

	constructor(
		private ingredientsService: IngredientsService,
		private recipesService: RecipesService,
	) { }

	ngOnInit(): void {
		this.ingredientsService.getIngredients()
			.subscribe(ingredients => this.ingredients = ingredients);
	}

	onSearchClicked() {
		this.recipesService.getSearchResults(this.searchInputValue)
			.subscribe(searchResults => this.searchResults = searchResults);
	}

}
