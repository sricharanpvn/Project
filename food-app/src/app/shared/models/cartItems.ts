import { Food } from "./Food";

export class CartItem{
  food!:Food;
  constructor(_food:Food){
    this.food=_food;
  }
  quantity:number=1;
  // price = this.food.price
}
