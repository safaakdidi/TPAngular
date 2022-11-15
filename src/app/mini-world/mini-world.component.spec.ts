import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWorldComponent } from './mini-world.component';

describe('MiniWorldComponent', () => {
  let component: MiniWorldComponent;
  let fixture: ComponentFixture<MiniWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
