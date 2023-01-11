import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'aboutus',component:AboutusComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'adminhome',component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
