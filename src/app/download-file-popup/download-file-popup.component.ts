import { Component, OnInit } from '@angular/core';
import { DownloadfileService } from '../downloadfile.service'
import Swal from 'sweetalert2';
import { Attachment } from '../attachment';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-download-file-popup',
  templateUrl: './download-file-popup.component.html',
  styleUrls: ['./download-file-popup.component.css']
})
export class DownloadFilePopupComponent implements OnInit {

  attachment!: Attachment[];
  name!: string;
  id!: number;
  constructor(private downloadFileService: DownloadfileService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAttachment();
  }

  private getAttachment() {
    this.downloadFileService.getAttachmentList().subscribe(data => {
      this.attachment = data;
    });
  }

  deleteFile(id: number) {
    this.downloadFileService.deleteFileById(id).subscribe(data => {
    })
    this.simpleAlertBox2();
  }

  downloadFile(name: string, type: string, id: number) {

    this.http.get(`http://localhost:8080/files/${name}/${id}`, { responseType: 'blob' }).subscribe(res => {
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
  }



  simpleAlertBox1() {
    Swal.fire('Oops!', 'Something went wrong...!', 'error');
  }

  simpleAlertBox2() {
    Swal.fire('Whoo!', 'File deleted successfully...!', 'success');
  }

}
