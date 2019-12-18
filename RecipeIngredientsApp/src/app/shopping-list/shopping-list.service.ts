import { Ingredient } from "../shared/ingredient-model";
import { EventEmitter } from "@angular/core";

export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 5)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onIngredientsAdded(ingredients: Ingredient[]) {
    // ingredients.forEach(ingredient => {
    //   this.onIngredientAdded(ingredient);
    // });
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
