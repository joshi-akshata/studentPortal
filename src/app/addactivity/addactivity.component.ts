import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
  activity: Activity = new Activity();
  id!: number;
  submitted = false;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private activityService: ActivityService, private router: Router, private uploadService: FileUploadService, private http: HttpClient, private commonService: CommonService) { }

  ngOnInit(): void {

  }
  saveActivity() {
    this.activityService.addActivity(this.activity).subscribe(data => {
      console.log(data);
      this.goToActivityList();
    },
      error => console.log(error));
  }

  goToActivityList() {
    this.router.navigate(['/activitylist'])
  }

  onSubmit() {
    if (this.activity.name == null) {
      this.simpleAlertBox1();

    }
    else {
      this.upload();
      this.saveActivity();
      this.simpleAlertBox2();
    }
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
    }
  }

  simpleAlertBox1() {
    Swal.fire('Oops!', 'Please add Activity Name it should not be null...!', 'error');
  }

  simpleAlertBox2() {
    Swal.fire('Whoo!', 'Activity added successfully...!', 'success');
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
