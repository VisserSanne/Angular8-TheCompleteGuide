import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredients = "ingredient";

  constructor() {}

  ngOnInit() {
    console.log("Hello");
    console.log(this.recipe.name);
  }
}
