import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Spaghetti", "Pasta with a lovely tomato sauce!", "https://cdn.pixabay.com/photo/2016/06/17/19/10/pasta-1463929_960_720.jpg"),
    new Recipe("Spaghetti", "Pasta with a lovely tomato sauce!", "https://cdn.pixabay.com/photo/2016/06/17/19/10/pasta-1463929_960_720.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
