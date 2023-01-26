import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private backendservice:BackEndServiceService){}  
    Dataarray: any[] = [];  
    ngOnInit():void{
      this.backendservice.getconfirmeduserdata().subscribe((res)=>{
        this.Dataarray=res;
      })     
    }  
    remove(id:any,FirstName:any,LastName:any,Dob:any,Gender:any,Email:any,Phone:any,Country:any,UserName:any,Password:any){console.log(id);
      this.backendservice.removeuser({Registrationid:id,FirstName:FirstName,LastName:LastName,Dob:Dob,Gender:Gender,Email:Email,Phone:Phone,Country:Country,UserName:UserName,Password:Password,Status:'NotConfirmed'})
    }

}
