import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit{

  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}
  FileUploadFormGroup=this.fb.group(
    {
      
      category:[''],
      videofile:['']
      
    }
 )
  onsubmit()
  {
   console.log(this.FileUploadFormGroup.value);
     this.BackEndService.fileupload(this.FileUploadFormGroup.value)
  }
  
  ngOnInit():void{
  }
}