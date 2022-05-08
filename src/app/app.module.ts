import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    AddactivityComponent,
    UpdateactivityComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegisterlistComponent,
    AddregistrationComponent,
    UpdateregistrationComponent,
    ActivitypageComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
