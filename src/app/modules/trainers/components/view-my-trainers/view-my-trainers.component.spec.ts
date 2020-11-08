import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTrainersComponent } from './view-my-trainers.component';

describe('ViewMyTrainersComponent', () => {
  let component: ViewMyTrainersComponent;
  let fixture: ComponentFixture<ViewMyTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyTrainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
