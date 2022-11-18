import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { food_items_list } from 'src/app/data';
import { Observable } from 'rxjs';
import { FOODS_URL, FOOD_BY_URL, SEARCH_URL } from '../constants/urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  // getAll():Food[]{              // Geting all the foods
  //   return food_items_list;
  // } WITH OUT SERVER CODE
  getAll():Observable<Food[]>{              // Geting all the foods
    return this.http.get<Food[]>(FOODS_URL);
  }

  // getAllFoodsBySearchTerm(searchTerm:string){      // Geting all the foods by search term
  //   return this.getAll()
  //   .filter(food=> food.name.toLowerCase()
  //   .includes(searchTerm.toLowerCase()))
  // } WITH OUT SERVER CODE
  getAllFoodsBySearchTerm(searchTerm:string):Observable<Food[]>{      // Geting all the foods by search term
    return this.http.get<Food[]>(SEARCH_URL + searchTerm);
  }

  // getFoodById(foodId:number):Food{
  //   return this.getAll().find(food=>food.id==foodId) ?? new Food();
  // } WITH OUT SERVER CODE
  getFoodById(foodId:number):Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_BY_URL + foodId);
  }
}
