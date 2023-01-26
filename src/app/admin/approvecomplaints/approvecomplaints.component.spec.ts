import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecomplaintsComponent } from './approvecomplaints.component';

describe('ApprovecomplaintsComponent', () => {
  let component: ApprovecomplaintsComponent;
  let fixture: ComponentFixture<ApprovecomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovecomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovecomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
