import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPresenterComponent } from './search-presenter.component';

describe('SearchPresenterComponent', () => {
  let component: SearchPresenterComponent;
  let fixture: ComponentFixture<SearchPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
