import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;
  user! : User;

  constructor(_cartService:CartService, private _userService:UserService) {
    _cartService.getCartObservable().subscribe((newCart)=>{
    this.cartQuantity = newCart.totalCount;
    })

    _userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })

   }

  ngOnInit(): void {
  }

  logout(){
    this._userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }

}
