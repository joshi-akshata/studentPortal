import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FileUploadService } from 'src/app/file-upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  message1 = "file uploaded";

  constructor(public dialogRef: MatDialogRef<PopupComponent>, private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({
      top: `30px`,
      right: `40px`
    });
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

}
