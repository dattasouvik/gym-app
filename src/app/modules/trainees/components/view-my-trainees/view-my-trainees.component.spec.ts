import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTraineesComponent } from './view-my-trainees.component';

describe('ViewMyTraineesComponent', () => {
  let component: ViewMyTraineesComponent;
  let fixture: ComponentFixture<ViewMyTraineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyTraineesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
