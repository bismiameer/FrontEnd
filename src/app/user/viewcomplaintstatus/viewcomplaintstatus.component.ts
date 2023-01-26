import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewcomplaintstatus',
  templateUrl: './viewcomplaintstatus.component.html',
  styleUrls: ['./viewcomplaintstatus.component.scss']
})
export class ViewcomplaintstatusComponent implements OnInit{
  a:any;
    Dataarray:any[]=[];
  
    constructor(private backendservice:BackEndServiceService){}
  
    ngOnInit(): void {
      console.log(parseInt(localStorage.getItem("id")!))
      this.a=parseInt(localStorage.getItem("id")!)
      
      this.backendservice.getcomplaintstatus(this.a).subscribe((data:any)=>{
        this.Dataarray=data;
      })
      
    }

}
