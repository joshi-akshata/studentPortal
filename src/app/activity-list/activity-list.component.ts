import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { DownloadfileService } from '../downloadfile.service'
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Attachment } from '../attachment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DownloadFilePopupComponent } from '../download-file-popup/download-file-popup.component';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity!: Activity[];
  attachment!: Attachment[];
  name!: string;
  id!: number;
  constructor(private activityService: ActivityService, private router: Router, private fileService: FileUploadService, private downloadFileService: DownloadfileService, private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getActivity();
    this.getAttachment();

  }

  private getActivity() {
    this.activityService.getActivityList().subscribe(data => {
      this.activity = data;
    });
  }

  private getAttachment() {
    this.downloadFileService.getAttachmentList().subscribe(data => {
      this.attachment = data;
    });
  }

  updateActivity(id: number) {
    console.log("id ", id);
    this.router.navigate(['/updateactivity', id]);
  }

  deleteFile(id: number) {
    this.downloadFileService.deleteFileById(id).subscribe(data => {
    })
    this.simpleAlertBox2();
  }

  downloadFile(name: string, type: string) {
    console.log("name ", name);
    console.log("type ", type);
    this.http.get(`http://localhost:8080/files/${name}`, { responseType: 'blob' }).subscribe(res => {
      let blob = new Blob([res], { type: type });
      let pdfUrl = window.URL.createObjectURL(blob);

      var PDF_link = document.createElement('a');
      PDF_link.href = pdfUrl;
      //   TO OPEN PDF ON BROWSER IN NEW TAB
      window.open(pdfUrl, '_blank');
      //   TO DOWNLOAD PDF TO YOUR COMPUTER
      PDF_link.download = name;
      PDF_link.click();
    });
    this.simpleAlertBox1();
  }


  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(data => {
      this.simpleAlertBox();
      console.log(data);
      this.getActivity();
    })
  }

  simpleAlertBox() {
    Swal.fire('Whoo!', 'Activity Deleted successfully...!', 'success');
  }

  simpleAlertBox1() {
    Swal.fire('Whoo!', 'File downloaded successfully...!', 'success');
  }

  simpleAlertBox2() {
    Swal.fire('Whoo!', 'File deleted successfully...!', 'success');
  }

  downloadFiles() {
    const dialogRef = this.dialog.open(DownloadFilePopupComponent, {
      width: '500px',
      height: '500px'
    });
  }

  UploadFiles() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      height: '500px'
    });
  }
}
