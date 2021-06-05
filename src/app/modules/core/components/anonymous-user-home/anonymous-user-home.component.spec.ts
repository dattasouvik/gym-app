import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousUserHomeComponent } from './anonymous-user-home.component';

describe('AnonymousUserHomeComponent', () => {
  let component: AnonymousUserHomeComponent;
  let fixture: ComponentFixture<AnonymousUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
