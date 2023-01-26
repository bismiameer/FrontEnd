import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcomplaintsComponent } from './pendingcomplaints.component';

describe('PendingcomplaintsComponent', () => {
  let component: PendingcomplaintsComponent;
  let fixture: ComponentFixture<PendingcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
