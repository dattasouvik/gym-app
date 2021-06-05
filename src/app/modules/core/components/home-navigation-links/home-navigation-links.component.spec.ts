import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavigationLinksComponent } from './home-navigation-links.component';

describe('HomeNavigationLinksComponent', () => {
  let component: HomeNavigationLinksComponent;
  let fixture: ComponentFixture<HomeNavigationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavigationLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
