import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { food_items_list } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{              // Geting all the foods
    return food_items_list;
  }

  getAllFoodsBySearchTerm(searchTerm:string){      // Geting all the foods by search term
    return this.getAll()
    .filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:number):Food{
    return this.getAll().find(food=>food.id==foodId) ?? new Food();
  }
}
