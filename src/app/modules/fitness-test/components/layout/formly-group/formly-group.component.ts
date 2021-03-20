import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-group',
  templateUrl: './formly-group.component.html',
  styleUrls: ['./formly-group.component.scss']
})
export class FormlyGroupComponent extends FieldArrayType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {}

}
