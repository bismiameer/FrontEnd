import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { BackEndServiceService } from '../back-end-service.service';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  submitted: boolean = false;

  isUserValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private BackEndService: BackEndServiceService, private router: Router) {

    this.LoginForm = this.formBuilder.group({

      UserName: new FormControl(null, [Validators.required]),

      Password: new FormControl(null, [Validators.required])

    })

  }

  get f() { return this.LoginForm.controls }



  // onSubmit() {

  //   this.submitted = true;

  //   if (this.LoginForm.invalid) {

  //     return;

  //   }

  // }

  ngOnInit(): void {



  }

  loginSubmitted() {

    if (this.LoginForm.value.UserName == 'Admin' && this.LoginForm.value.Password == 'Admin') {

      this.router.navigate(['adminhome'])

    }

    else {

      this.BackEndService.login([this.LoginForm.value.UserName, this.LoginForm.value.Password]).subscribe(res =>{console.log(res);console.log(this.LoginForm.value.UserName)
        if (res == 'Failure') {
            this.isUserValid = false;
            alert('Login Unsuccessful');
          } else {
            this.isUserValid = true;
            this.router.navigate(['userhome'])
          }

        });

    }

  }

}