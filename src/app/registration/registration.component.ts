import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}
   RegistrationFormGroup=this.fb.group(
     {
       UserName:[''],
       Dob:[''],
       Gender:[''],
       Email:[''],
       Phone:[''],
       Country:[''],
       Password:['']
     }
  )
   onsubmit()
   {
    console.log(this.RegistrationFormGroup.value);
      this.BackEndService.insertregistrationdata(this.RegistrationFormGroup.value)
   }
   
   ngOnInit():void{
   }

}