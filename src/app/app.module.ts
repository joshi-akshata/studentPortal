import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { PostComponent } from './post/post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PopupComponent } from './popup/popup.component';
import { NotificationComponent } from './notification/notification.component';
import { DownloadFilePopupComponent } from './download-file-popup/download-file-popup.component';
import { LogoutPopupComponent } from './logout-popup/logout-popup.component';



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
    PostComponent,
    ViewPostComponent,
    UpdatePostComponent,
    PopupComponent,
    NotificationComponent,
    DownloadFilePopupComponent,
    LogoutPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    PdfViewerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
