import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { FitnessTestService } from '../../../services/fitness-test.service';

@Component({
  selector: 'app-formly-field-tabs',
  templateUrl: './formly-field-tabs.component.html',
  styleUrls: ['./formly-field-tabs.component.scss']
})
export class FormlyFieldTabsComponent extends FieldType implements OnInit {

  reditectTo: string;

  constructor(
    private fitnessTestService: FitnessTestService
  ) {
    super();
  }

  ngOnInit(): void {
    this.reditectTo = this.fitnessTestService.fetchRedirectUrl();
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every(f => this.isValid(f));
  }

}
