import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl='';

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,
    private _userService: UserService ,private formBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    })
    this.returnUrl=this._activatedRoute.snapshot.queryParams.returnUrl;
  }
  get formcontrols(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;

    this._userService.login({
      email: this.formcontrols.email.value,
      password: this.formcontrols.password.value
    }).subscribe(()=>{
      this._router.navigateByUrl(this.returnUrl);
    })

    // alert(
    //   `Email: ${this.formcontrols.email.value}
    //   Password: ${this.formcontrols.password.value}`
    // );
  }
}
