import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-registercomplaint',
  templateUrl: './registercomplaint.component.html',
  styleUrls: ['./registercomplaint.component.scss']
})
export class RegistercomplaintComponent implements OnInit{
    Dataarray: any[] = [];
    a: any;
    constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService,private route: ActivatedRoute,private http:HttpClient){}
    ContactUsFormGroup=this.fb.group(
      {
        
        name:[''],
        email:[''],
        subject:[''],
        message:[''],
        Registrationid:[''],
        status:['NotChecked']
        
      }
   )
    onsubmit()
    {
     console.log(this.ContactUsFormGroup.value);
     this.ContactUsFormGroup.value.Registrationid=this.a;
       this.BackEndService.contact(this.ContactUsFormGroup.value)
       
    }
    
    ngOnInit():void{
      this.a=parseInt(localStorage.getItem('id')!)
    }

}
