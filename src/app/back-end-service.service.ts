
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService{
 

  constructor(private http:HttpClient) { }
  login(loginInfo:Array<string>){

    return this.http.post("https://localhost:44336/api/Registration/LoginUser",{
    UserName:loginInfo[0],
    Password:loginInfo[1],
  },

  {
    responseType:'text',
  });

}
  insertregistrationdata(data:any) {
     this.http.post('https://localhost:44336/api/Registration/insertregistrationdata',data).toPromise().then(result =>
     {console.log(result);})

    }
    fileupload(data:any) {
      this.http.post('https://localhost:44336/api/Registration/fileupload',data).toPromise().then(result =>
      {console.log(result);}),window.alert('file uploaded'), window.location.href='/userhome'
 
     }
    //  complaint(data:any)
    //  {
    //   //return this.http.get<any>('https://localhost:44308/api/Course/viewcourse')
    //   this.http.post('https://localhost:44336/api/Registration/complaint',data).toPromise().then(result =>
    //   {console.log(result);}),window.alert('complaint sent'), window.location.href='/userhome'
    //  }
    getCourseData()
    {
     return this.http.get<any>('https://localhost:44336/api/Registration/view')
    }
}
