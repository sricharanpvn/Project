import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];

  constructor(private _foodservice:FoodService, _activatedroute:ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    _activatedroute.params.subscribe((parms)=>{
      if(parms.searchTerm)
      foodsObservable = this._foodservice.getAllFoodsBySearchTerm(parms.searchTerm);
      else
      foodsObservable = _foodservice.getAll();

      foodsObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
    })
  }

  ngOnInit(): void {
  }

}
