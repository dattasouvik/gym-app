import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-search-presenter',
  templateUrl: './search-presenter.component.html',
  styleUrls: ['./search-presenter.component.scss']
})
export class SearchPresenterComponent implements OnInit {

  searchField: FormControl;

  @Output()
  search = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
    this.searchField = new FormControl();

    this.searchField.valueChanges
    .pipe(
      debounceTime(250),
      distinctUntilChanged(),
      startWith(''))
      .subscribe(data => {
      this.search.emit(data);
    });
  }

}
