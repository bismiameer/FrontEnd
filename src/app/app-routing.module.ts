import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ApprovecomplaintsComponent } from './admin/approvecomplaints/approvecomplaints.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { ViewcategoryComponent } from './admin/viewcategory/viewcategory.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdddataComponent } from './user/adddata/adddata.component';
import { EditdataComponent } from './user/editdata/editdata.component';
import { RegistercomplaintComponent } from './user/registercomplaint/registercomplaint.component';
import { SearchbycategoryComponent } from './user/searchbycategory/searchbycategory.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewcomplaintstatusComponent } from './user/viewcomplaintstatus/viewcomplaintstatus.component';
import { ViewdataComponent } from './user/viewdata/viewdata.component';
import { ViewusersComponent } from './admin/viewusers/viewusers.component';
import { ViewcomplaintsComponent } from './admin/viewcomplaints/viewcomplaints.component';
import { PendingcomplaintsComponent } from './admin/pendingcomplaints/pendingcomplaints.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Registration',component:RegistrationComponent},
  {path:'Login',component:LoginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'adddata',component:AdddataComponent},
  {path:'viewdata',component:ViewdataComponent},
  {path:'registercomplaint',component:RegistercomplaintComponent},
  {path:'viewcomplaintstatus',component:ViewcomplaintstatusComponent},
  {path:'searchbycategory',component:SearchbycategoryComponent},
  {path:'editdata/:id',component:EditdataComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'approvedcomplaints',component:ApprovecomplaintsComponent},
  {path:'pendingcomplaints',component:PendingcomplaintsComponent},
  {path:'editcategory/:id',component:EditcategoryComponent},
  {path:'viewusers',component:ViewusersComponent},
  {path:'viewcomplaints',component:ViewcomplaintsComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
