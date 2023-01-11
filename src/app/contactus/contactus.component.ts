import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit{
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}
  ContactUsFormGroup=this.fb.group(
    {
      
      name:[''],
      email:[''],
      subject:[''],
      message:['']
      
    }
 )
  onsubmit()
  {
   console.log(this.ContactUsFormGroup.value);
     this.BackEndService.fileupload(this.ContactUsFormGroup.value)
  }
  
  ngOnInit():void{
  }

}