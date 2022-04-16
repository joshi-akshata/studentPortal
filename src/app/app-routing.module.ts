import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { UpdateactivityComponent } from './updateactivity/updateactivity.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { AddregistrationComponent } from './addregistration/addregistration.component';
import { UpdateregistrationComponent } from './updateregistration/updateregistration.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';



const routes: Routes = [
 {path:'' ,redirectTo:'home',pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"activitylist",component:ActivityListComponent},
{path:"addactivity",component:AddactivityComponent},
{path:"updateactivity/:id",component:UpdateactivityComponent},
{path:"login",component:LoginComponent},
{path:"registerlist",component:RegisterlistComponent},
{path:"admin",component:AdminComponent},
{path:"addregistration",component:AddregistrationComponent},
{path:"updateregistration/:id",component:UpdateregistrationComponent},
{path:"activitypage",component:ActivitypageComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
