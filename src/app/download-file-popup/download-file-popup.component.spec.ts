import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFilePopupComponent } from './download-file-popup.component';

describe('DownloadFilePopupComponent', () => {
  let component: DownloadFilePopupComponent;
  let fixture: ComponentFixture<DownloadFilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFilePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
