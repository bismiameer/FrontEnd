import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrls: ['./viewcomplaints.component.scss']
})
export class ViewcomplaintsComponent implements OnInit{
  constructor(private Backendservice:BackEndServiceService,private route:ActivatedRoute,private http:HttpClient){}
  
    Dataarray:any[]=[];
  
    ngOnInit():void{
      this.Backendservice.allcomplaints().subscribe((res)=>{this.Dataarray=res;})
    }

}
