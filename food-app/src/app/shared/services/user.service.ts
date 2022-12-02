import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../constants/urls';
import { IUserLogin } from '../models/IUserLogin';
import { User } from '../models/User';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserToLocalStorage());
  public userObservable:Observable<User>;

  constructor(private _http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }
  login(userLogin:IUserLogin):Observable<User>{
    return this._http.post<User>(USER_LOGIN_URL, userLogin).pipe
    (tap({
      next:(user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        // this._toastrService.success(
        //   `Welcome ${user.name}`,
        //   'Logged in Successfully'
        // )
      },
      error: (errorResponse)=>{
        // this._toastrService.error(errorResponse.error, 'Login Failed');
      }
    }))
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserToLocalStorage():User{
    const userJson  = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
