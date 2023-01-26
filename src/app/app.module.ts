import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AdddataComponent } from './user/adddata/adddata.component';
import { ViewdataComponent } from './user/viewdata/viewdata.component';
import { RegistercomplaintComponent } from './user/registercomplaint/registercomplaint.component';
import { ViewcomplaintstatusComponent } from './user/viewcomplaintstatus/viewcomplaintstatus.component';
import { SearchbycategoryComponent } from './user/searchbycategory/searchbycategory.component';
import { EditdataComponent } from './user/editdata/editdata.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ApprovecomplaintsComponent } from './admin/approvecomplaints/approvecomplaints.component';
import { ViewcategoryComponent } from './admin/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewusersComponent } from './admin/viewusers/viewusers.component';
import { ViewcomplaintsComponent } from './admin/viewcomplaints/viewcomplaints.component';
import { PendingcomplaintsComponent } from './admin/pendingcomplaints/pendingcomplaints.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdminhomeComponent,
    HomeComponent,
    UserhomeComponent,
    AdddataComponent,
    ViewdataComponent,
    RegistercomplaintComponent,
    ViewcomplaintstatusComponent,
    SearchbycategoryComponent,
    EditdataComponent,
    AddcategoryComponent,
    ApprovecomplaintsComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    ViewusersComponent,
    ViewcomplaintsComponent,
    PendingcomplaintsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
