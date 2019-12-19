import { Component, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient-model";
import { ShoppinglistService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: true }) nameInputRef;
  @ViewChild("amountInput", { static: true }) amountInputRef;

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppinglistService.onIngredientAdded(newIngredient);
  }

  constructor(private shoppinglistService: ShoppinglistService) {}

  ngOnInit() {}
}
