import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  ingredientsUpdated = new EventEmitter<Array<Ingredient>>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }
}