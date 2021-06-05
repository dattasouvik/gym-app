import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinUserHomeComponent } from './loggedin-user-home.component';

describe('LoggedinUserHomeComponent', () => {
  let component: LoggedinUserHomeComponent;
  let fixture: ComponentFixture<LoggedinUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
