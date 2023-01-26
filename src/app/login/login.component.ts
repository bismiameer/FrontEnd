import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  
  submitted=false;
  sess:any;
  public Loginstatus = false;
  isUserValid: boolean = false;
  LoginForm: FormGroup;
  imageSrc = 'assets/images/icon.PNG'   

  constructor(private formBuilder: FormBuilder, private BackEndService: BackEndServiceService, private router: Router) {
    this.LoginForm = this.formBuilder.group({
      UserName: ['',Validators.required],
      Password: ['',Validators.required]
    })
  }
  get f() {
    return this.LoginForm.controls;
  }
  OnSubmit() {
    this.submitted=true
    if(this.LoginForm.invalid){
      return
    }
    if (this.LoginForm.value.UserName == 'Admin' && this.LoginForm.value.Password == 'Admin') {
      this.router.navigate(['/adminhome'])
    }
    else {
      this.BackEndService.login([this.LoginForm.value.UserName,
      this.LoginForm.value.Password]).subscribe(res => {
        console.log(this.LoginForm.value.UserName)
        if (res == 'Failed') {
          this.isUserValid = false;
          alert('Login Unsuccessful');
        } else {
          this.isUserValid = true;          
          let obj=JSON.parse(res);
          this.sess=obj.registrationid;
          localStorage.setItem("id",this.sess);
          //console.log(localStorage.getItem('id'))
          alert("Login Success");
          this.router.navigate(['/userhome'])
        }
      });
    }
  }
}