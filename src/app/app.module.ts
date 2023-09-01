import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddIngredientPageComponent } from './components/add-ingredient-page/add-ingredient-page.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './components/shopping-list-page/shopping-list-page.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { MealsListComponent } from './components/meals-list/meals-list.component';
import { RecipeSearchResultsListComponent } from './components/recipe-search-results-list/recipe-search-results-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    HomePageComponent,
    AddIngredientPageComponent,
    RecipeSearchPageComponent,
    ShoppingListPageComponent,
    IngredientsListComponent,
    MealsListComponent,
    RecipeSearchResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
