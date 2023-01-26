import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.scss']
})
export class AdddataComponent implements OnInit{
  imageSrc = 'assets/images/icon.PNG'
    Dataarray: any[]=[];
    Category:any[]=[];
    registrationid:any[]=[];
    categoryid:any[]=[];
    a: any;
    constructor(private BackEndService: BackEndServiceService, private route: ActivatedRoute,private http:HttpClient,private fb:FormBuilder) { }  
      DescForm=this.fb.group({
      categoryid:[''],
      CategoryName:[''],
      description:[''],
      registrationid:['']
    })
    onsubmit(){
    
      this.DescForm.value.registrationid=this.a;
      this.DescForm.value.categoryid=this.a;
      this.BackEndService.insertdescdata(this.DescForm.value)    
    }
    ngOnInit(): void {
      console.log(parseInt(localStorage.getItem("id")!))
      this.a=parseInt(localStorage.getItem("id")!)
      console.log(localStorage.getItem('id'))
      this.BackEndService.getcategorydata().subscribe((res) => {
        this.Dataarray=res;});   
    }  

}
