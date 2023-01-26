import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {
  sess:any;
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}

  MyForm=this.fb.group({
  CategoryName:['']
})
OnSubmit()
{
 //console.log(this.MyForm.value)
 this.BackEndService.addcategory(this.MyForm.value)
}

}
