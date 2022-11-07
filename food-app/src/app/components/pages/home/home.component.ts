import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    _activatedroute.params.subscribe((parms)=>{
      if(parms.searchTerm)
      this.foods = this._foodservice.getAllFoodsBySearchTerm(parms.searchTerm);
      else
      this.foods = _foodservice.getAll();
    })
  }

  ngOnInit(): void {
  }

}
