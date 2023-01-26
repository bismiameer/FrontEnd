import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit{
  constructor(private Backendservice: BackEndServiceService) {  
  }

  Dataarray: any[] = [];  
  ngOnInit(): void {
    this.Backendservice.getUserData().subscribe((res) => {this.Dataarray = res;})
  }  
  confirm(id:any,FirstName:any,LastName:any,Dob:any,Gender:any,Email:any,Phone:any,Country:any,UserName:any,Password:any){console.log(id);
    this.Backendservice.confirmuser({Registrationid:id,FirstName:FirstName,LastName:LastName,Dob:Dob,Gender:Gender,Email:Email,Phone:Phone,Country:Country,UserName:UserName,Password:Password,Status:'confirmed'})
  }  

}
