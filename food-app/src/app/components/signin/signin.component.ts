import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm = FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder) { }



  ngOnInit(): void {
  //   this.loginForm=this.formBuilder.group({
  //     email:['',[Validators.required, Validators.email]],
  //     password:['', Validators.required]
  //   })
  // }
  // get formcontrols(){
  //   return this.loginForm.controls;
  // }
  // // submitForm(formModel:any){
  // //   console.log(formModel)
  // // }

  // submit(){
  //   this.isSubmitted=true;
  //   if(this.loginForm.invalid) return;
  //   alert(
  //     `Email: ${this.formcontrols.email.value}
  //     Password: ${this.formcontrols.password.value}`
  //   )
  }
}
