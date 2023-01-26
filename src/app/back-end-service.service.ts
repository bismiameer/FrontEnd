
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

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
     this.http.post('https://localhost:44336/api/Registration/insertregistrationdata',data).toPromise().then(result =>{ alert("Registered Successfully!"),window.location.href='/Login' })

    }
    confirmuser(registrationid: any) {
      this.http.post('https://localhost:44336/api/Registration/confirmuser',registrationid).toPromise().then(result => { alert("User Confirmed Successfully!"),window.location.href='/viewusers' })
    }
    getconfirmeduserdata(){
      return this.http.get<any>('https://localhost:44336/api/Registration/viewconfirmeduser')
    }
    removeuser(registrationid:any){
      this.http.post('https://localhost:44336/api/Registration/removeuser', registrationid).toPromise().then(result => { alert("User Removed!"),window.location.href='/users' })
   
    }
    fileupload(data:any) {
      this.http.post('https://localhost:44336/api/Registration/fileupload',data).toPromise().then(result =>
      {console.log(result);}),window.alert('file uploaded'), window.location.href='/userhome' 
     }
     contact(id:any) {
      this.http.post('https://localhost:44336/api/Registration/contact',id).toPromise().then(result =>
      {console.log(result);}),window.alert('Complaint Sent'), window.location.href='/userhome'
     }
     getCourseData()
    {
     return this.http.get<any>('https://localhost:44336/api/Registration/view')
    }
    getComplaintsstatus()
    {
     return this.http.get<any>('https://localhost:44336/api/Registration/ViewC')
    }
    getUserData()
    {
     return this.http.get<any>('https://localhost:44336/api/Registration/viewuser')
    }
    getUploads()
    {
     return this.http.get<any>('https://localhost:44336/api/Registration/ViewUploads')
    }
    addcategory(data: any) {
      this.http.post('https://localhost:44336/api/Registration/addcategory', data).toPromise().then(result => { alert("Category Added Successfully!"),window.location.href='/viewcategory' })
    }
     getcategorydata() {
      return this.http.get<any>('https://localhost:44336/api/Registration/ViewCategory')
    }
     insertdescdata(id:any)
    {
      this.http.post('https://localhost:44336/api/Registration/insertdesc',id).toPromise().then(result=>
      {alert("Added Successfully!"),window.location.href='/userhome'})
    }
    getcategorybyid(categoryid: any) {
      return this.http.get<any>('https://localhost:44336/api/Registration/ViewCategoryByid/' + categoryid)
    }
    updatecategorydata(Categoryid: any) {
      this.http.post('https://localhost:44336/api/Registration/updatecategory', Categoryid).toPromise().then(result => { alert("Category Updated Successfully!"),window.location.href='/viewcategory' })
    }
  
    deletecategorydata(categoryid: any) {
      this.http.post('https://localhost:44336/api/Registration/deletecategory', categoryid).toPromise().then(result => { alert("Category Deleted!"),window.location.href='/viewcategory' })
    }
    getdescdata(id: any) {
      return this.http.get<any>('https://localhost:44336/api/Registration/getdescdata/'+id)
    }
    allcomplaints()
  {
    return this.http.get<any>('https://localhost:44336/api/Registration/allcomplaints')
  }
  getcomplaintsdata()
  {
    return this.http.get<any>('https://localhost:44336/api/Registration/getcomplaints')
  }
  statuspending(complaintid:any){
    this.http.post('https://localhost:44336/api/Registration/updatestatuspending',complaintid).toPromise().then(result=>{alert("Complaint Status Changed to Pending!"),window.location.href='/approvedcomplaints'})
  }
  getpendingcomplaints()
  {
    return this.http.get<any>('https://localhost:44336/api/Registration/getpendingcomplaints')
  }
  statuscompleted(complaintid:any){
    this.http.post('https://localhost:44336/api/Registration/updatestatuscompleted',complaintid).toPromise().then(result=>{ alert("Complaint Status Changed to Completed!"),window.location.href='/pendingcomplaints'})
 
  }
  getcomplaintstatus(id: any) {
    return this.http.get<any>('https://localhost:44336/api/Registration/getstatuscomplaint/'+id)
  }
  getdescbyid(descid: any) {
    return this.http.get<any>('https://localhost:44336/api/Registration/ViewDescByid/' + descid)
  }
  updatedescdata(descid: any) {
    this.http.post('https://localhost:44336/api/Registration/updatedesc', descid).toPromise().then(result => { alert("Data Updated Successfully!"),window.location.href='/viewdata' })
  }

  deletedescdata(descid: any) {
    this.http.post('https://localhost:44336/api/Registration/deletedesc', descid).toPromise().then(result => { alert("Data Deleted!"),window.location.href='/viewdata' })
  }
  getcountrydata() {
    return this.http.get<any>('https://localhost:44336/api/Registration/ViewCountry')
  }
  GetCategorySearchData() {
    return this.http.get<any>('https://localhost:44336/api/Registration/ViewSearchCategory')
  }
  getcategorysearchdata() {
    return this.http.get<any>('https://localhost:44336/api/Registration/ViewSearchCategory')
  }
  getcategorysearch() {
    return this.http.get<any>('https://localhost:44336/api/Registration/ViewCategorySearch')
  }
  
  
}
