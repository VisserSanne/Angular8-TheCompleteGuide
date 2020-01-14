import { Ingredient } from "../shared/ingredient-model";
import { Subject } from "rxjs";

export class ShoppinglistService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 5)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onIngredientsAdded(ingredients: Ingredient[]) {
    // ingredients.forEach(ingredient => {
    //   this.onIngredientAdded(ingredient);
    // });
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
