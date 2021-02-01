import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	testrec = 'Testing';

	recipes: Recipe[] = [
		new Recipe('A Test Recipe','This is simply a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
		new Recipe('Test Recipe','This is simply a test recipe','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg')
	];	

	constructor() { }

	ngOnInit(): void {
	}

}
