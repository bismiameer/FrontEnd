import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbycategoryComponent } from './searchbycategory.component';

describe('SearchbycategoryComponent', () => {
  let component: SearchbycategoryComponent;
  let fixture: ComponentFixture<SearchbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
