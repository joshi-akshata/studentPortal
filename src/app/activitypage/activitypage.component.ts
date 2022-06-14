import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { CommonService } from '../common.service';
import { Notification } from '../notification';
import { NotificationService } from '../notification.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

  activity!: Activity[];
  notification!: Notification[];

  list!: any[];
  event: any;
  count: number = this.getCount();

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  message1 = "file uploaded";



  constructor(private activityService: ActivityService, private router: Router, private uploadService: FileUploadService, private http: HttpClient, public dialog: MatDialog, private commonService: CommonService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getActivity();
    this.getNotification();
  }

  private getActivity() {
    this.activityService.getActivityList().subscribe(data => {
      this.activity = data;
    });
  }

  private getNotification() {
    this.notificationService.getAllNotifications().subscribe(data => {
      this.notification = data;
    });
  }

  public getCount(): number {
    this.notificationService.getNotificationCount().subscribe(data => {
      this.count = data;
    });
    return this.count;
  }

  public setCount() {
    this.openNotifications();
  }

  AddAttachment() {
    this.router.navigate(['/addAttachment']);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile)
          .subscribe({
            error: (err: any) => {
              console.log(err);
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            }
          });
      }
      this.selectedFiles = undefined;
      this.simpleAlertBox();
    }
  }

  simpleAlertBox() {
    Swal.fire('Whoo!', 'file uploaded succesfully....!', 'success');

  }

  imageSrc: string = '';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type != 'application/pdf') {
        reader.readAsDataURL(file);

        reader.onload = () => {

          this.imageSrc = reader.result as string;

          this.myForm.patchValue({
            fileSource: reader.result as string
          });

        };

      }
    }
  }


  addAttachment() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      height: '500px'
    });
  }

  openNotifications() {
    const dialogRef = this.dialog.open(NotificationComponent, {
      width: '450px',
      height: '250px'
    });
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Logout',
      text: 'are you sure you want to logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logout!',
          'You have logout successfully',
          'success'
        )
        this.router.navigate(['/home']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }

}
