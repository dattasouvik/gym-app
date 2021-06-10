import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardHeaderComponent } from './banner-card-header.component';

describe('BannerCardHeaderComponent', () => {
  let component: BannerCardHeaderComponent;
  let fixture: ComponentFixture<BannerCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
