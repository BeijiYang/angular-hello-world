import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model"

export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://img2.baidu.com/it/u=900444370,3315059522&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800'),
    new Recipe('Another Test Recipe', 'This is also a test recipe', 'https://img2.baidu.com/it/u=900444370,3315059522&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800')
  ]

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

}