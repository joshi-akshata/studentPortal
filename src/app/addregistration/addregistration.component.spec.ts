import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrationComponent } from './addregistration.component';

describe('AddregistrationComponent', () => {
  let component: AddregistrationComponent;
  let fixture: ComponentFixture<AddregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
