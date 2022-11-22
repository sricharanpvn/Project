import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id', component:FoodDetailComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'signin', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
