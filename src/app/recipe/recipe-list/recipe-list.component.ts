import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://img0.baidu.com/it/u=2500107091,3723826537&fm=253&fmt=auto&app=138&f=PNG?w=586&h=500'),
    new Recipe('A Test Recipe', 'This is also a test recipe', 'https://img2.baidu.com/it/u=900444370,3315059522&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800')

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
