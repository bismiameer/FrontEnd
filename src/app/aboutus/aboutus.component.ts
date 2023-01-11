import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit{
  Dataarray:any[]=[];
  constructor(private backendservice:BackEndServiceService){}

  ngOnInit(): void {
    this.backendservice.getCourseData().subscribe((res)=>
    {this.Dataarray=res;})
  }

}