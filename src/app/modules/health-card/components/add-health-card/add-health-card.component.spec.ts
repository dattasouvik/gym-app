import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealthCardComponent } from './add-health-card.component';

describe('AddHealthCardComponent', () => {
  let component: AddHealthCardComponent;
  let fixture: ComponentFixture<AddHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHealthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
