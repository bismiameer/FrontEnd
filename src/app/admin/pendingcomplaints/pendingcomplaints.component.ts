import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-pendingcomplaints',
  templateUrl: './pendingcomplaints.component.html',
  styleUrls: ['./pendingcomplaints.component.scss']
})
export class PendingcomplaintsComponent implements OnInit{
  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private http:HttpClient,private fb:FormBuilder) {}
  
    Dataarray:any[]=[];
  
    ngOnInit():void{
      this.backendservice.getpendingcomplaints().subscribe((res)=>{this.Dataarray=res;})
    }
  
    
    completed(id:any,name:any,email:any,subject:any,message:any,registrationid:any){
      this.backendservice.statuscompleted({complaintid:id,name:name,email:email,subject:subject,message:message,registrationid:registrationid,status:'Completed'})
    }

}
