import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-approvecomplaints',
  templateUrl: './approvecomplaints.component.html',
  styleUrls: ['./approvecomplaints.component.scss']
})
export class ApprovecomplaintsComponent implements OnInit{
  constructor(private backendservice:BackEndServiceService, private route:ActivatedRoute,private http:HttpClient,private fb:FormBuilder){}
  
      StatusForm=this.fb.group({
      DropDownStatus:['']      
    })
  
    Dataarray:any[]=[];
    a:any;
  
    ngOnInit():void{
      this.backendservice.getcomplaintsdata().subscribe((res)=>{this.Dataarray=res;})
    }
    pending(id:any,name:any,email:any,subject:any,message:any,registrationid:any){
          console.log(id,name,email,subject,message,registrationid);
      this.backendservice.statuspending({complaintid:id,name:name,email:email,subject:subject,message:message,registrationid:registrationid,status:'Pending'})
    }

}
