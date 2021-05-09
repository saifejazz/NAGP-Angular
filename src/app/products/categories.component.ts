import { Component, OnInit } from '@angular/core';
import { ICategories } from "src/app/products/categories";

@Component({
  selector: 'pm-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  public categories : ICategories[] = [
    {
      "categoryId": 1,
      "categoryTitle": "a",
    },
    {
      "categoryId": 2,
      "categoryTitle": "b"
    }
  ];

  

}
