import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';
import { AddIngredientPageComponent } from './components/add-ingredient-page/add-ingredient-page.component';
import { ShoppingListPageComponent } from './components/shopping-list-page/shopping-list-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
},{
  path: 'recipes',
  component: RecipeSearchPageComponent
},{
  path: 'add-ingredient',
  component: AddIngredientPageComponent
},{
  path: 'shopping-list',
  component: ShoppingListPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
