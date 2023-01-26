import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  submitted=false;
  Dataarray: any[]=[];
  Country:any[]=[];
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService,private router:Router){}
  
   RegistrationFormGroup=this.fb.group(
     {
       FirstName:[''],
       LastName:[''],
       Dob:[''],
       Gender:[''],
       Email:[''],
       Phone:[''],
       Country:[''],
       Username:[''],
       Password:[''],
       ConfirmPassword:[''],
       Status:['NotConfirmed']
     }
  )
   onsubmit()
   {
    this.submitted=true
    if(this.RegistrationFormGroup.invalid){
      return
    }
    console.log(this.RegistrationFormGroup.value)
      this.BackEndService.insertregistrationdata(this.RegistrationFormGroup.value)
   }
   ngOnInit(): void {
    this.BackEndService.getcountrydata().subscribe((res) => {
      this.Dataarray=res;});
  }
}
