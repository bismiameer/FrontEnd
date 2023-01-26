import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit{
  categoryid:any;
  public Dataarray:any;
  EditCategoryForm:FormGroup;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private BackEndService:BackEndServiceService,private router:Router)
  {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.categoryid=params.get('id')
    })
    this.EditCategoryForm=this.fb.group({
    categoryid:[''],
    CategoryName:['']
  })
}
  ngOnInit(): void {
    this.BackEndService.getcategorybyid(this.categoryid).subscribe((data: any) => {
    this.Dataarray = data;
    this.EditCategoryForm.setValue({
    categoryid: data.categoryid,
    CategoryName: data.categoryName
    });
    });
       
}
OnSubmit()
{
  this.BackEndService.updatecategorydata(this.EditCategoryForm.value)
}
Onsubmitdelete(){
  this.BackEndService.deletecategorydata(this.EditCategoryForm.value)
 
 }

}
