import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHealthCardsComponent } from './view-health-cards.component';

describe('ViewHealthCardsComponent', () => {
  let component: ViewHealthCardsComponent;
  let fixture: ComponentFixture<ViewHealthCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHealthCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHealthCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
