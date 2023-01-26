import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.scss']
})
export class ViewcategoryComponent implements OnInit{
  constructor(private Backendservice:BackEndServiceService){}
  
    Dataarray: any[] = [];
  
    ngOnInit():void{
      this.Backendservice.getcategorydata().subscribe((res)=>{
        this.Dataarray=res;
      })
    }

}
