import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent implements OnInit{
    Dataarray:any[]=[];
    a:any;
      constructor(private Backendservice:BackEndServiceService){}
     
      ngOnInit(): void {
        console.log(parseInt(localStorage.getItem("id")!))
        this.a=parseInt(localStorage.getItem("id")!)
        
        this.Backendservice.getdescdata(this.a).subscribe((data:any)=>{
          this.Dataarray=data;
        })
        
      }

}
