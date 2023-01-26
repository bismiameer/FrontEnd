import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplaintstatusComponent } from './viewcomplaintstatus.component';

describe('ViewcomplaintstatusComponent', () => {
  let component: ViewcomplaintstatusComponent;
  let fixture: ComponentFixture<ViewcomplaintstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcomplaintstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcomplaintstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
