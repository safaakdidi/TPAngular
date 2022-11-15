import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCVComponent } from './list-cv.component';

describe('ListCVComponent', () => {
  let component: ListCVComponent;
  let fixture: ComponentFixture<ListCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
