import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  templateUrl: './formly-repeat-section.component.html',
  styleUrls: ['./formly-repeat-section.component.scss']
})
export class FormlyRepeatSectionComponent extends FieldArrayType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
