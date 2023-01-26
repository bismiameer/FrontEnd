import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit{
  imageSrc = 'assets/images/icon.PNG';
    descid:any;
    public Dataarray:any;
    EditDescForm:FormGroup;
    a:any;
    registrationid:any[]=[];
    constructor(private route:ActivatedRoute,private fb:FormBuilder,private BackEndService:BackEndServiceService,private router:Router)
    {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        this.descid=params.get('id')
      })
      this.EditDescForm=this.fb.group({
      descid:[''],
      CategoryName:[''],
      description:[''],
      Registrationid:['']
      
    })
  }
    ngOnInit(): void {
      this.BackEndService.getdescbyid(this.descid).subscribe((data: any) => {
      this.Dataarray = data;
      this.EditDescForm.setValue({
      descid: data.descid,
      CategoryName: data.categoryName,
      description:data.description,
      Registrationid:data.registrationid
      });
      });
         
  }
  OnSubmit()
  {
    this.BackEndService.updatedescdata(this.EditDescForm.value)
    console.log(parseInt(localStorage.getItem("id")!))
      this.a=parseInt(localStorage.getItem("id")!)
  }
  Onsubmitdelete(){
    this.BackEndService.deletedescdata(this.EditDescForm.value)
    console.log(parseInt(localStorage.getItem("id")!))
      this.a=parseInt(localStorage.getItem("id")!)
   
   }

}
