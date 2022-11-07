import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { food_items_list } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return food_items_list;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll()
    .filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }
}
