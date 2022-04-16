import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactivityComponent } from './updateactivity.component';

describe('UpdateactivityComponent', () => {
  let component: UpdateactivityComponent;
  let fixture: ComponentFixture<UpdateactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
