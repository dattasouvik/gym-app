import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { takeWhile } from 'rxjs/operators';
import { WeightTrackerForm, WeightTrackerFormMode, WeightTrackerFormState } from '../../models/weight-tracker-form.model';
import { WeightTrackerFormFieldGroup } from '../../models/weight-tracker-response.model';
import { WeightTrackerService } from '../../services/weight-tracker.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weight-tracker-form',
  templateUrl: './weight-tracker-form.component.html',
  styleUrls: ['./weight-tracker-form.component.scss']
})
export class WeightTrackerFormComponent implements OnInit, OnDestroy {

  /* To track subscriptions & clear on destroy */
  private isAlive = true;

  weightTrackerForm: FormGroup;
  weightTrackerFormModel: WeightTrackerFormFieldGroup;
  weightTrackerFormFields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  userId: number;
  nid: number;
  formMode: WeightTrackerFormMode;

  constructor(
    private router: Router,
    private weightTrackerService: WeightTrackerService
  ) {
    this.getFormState(this.router.getCurrentNavigation().extras.state as WeightTrackerFormState);
   }

  ngOnInit(): void {
    this.buildFormbyMode(this.formMode);
  }

  ngOnDestroy(): void {
    this.options.resetModel(); /* Clear form values on exit */
    this.isAlive = false;
  }

  private buildFormbyMode(mode: WeightTrackerFormMode) {
    this.weightTrackerForm = new FormGroup({});
    const form  = new WeightTrackerForm(mode);
    this.weightTrackerFormFields = form.formFields();

    if (mode === WeightTrackerFormMode.ADD){
      return this.weightTrackerFormFieldsOnAdd();
    }

    return this.weightTrackerFormFieldsOnEdit();
  }

  private getFormState(state: WeightTrackerFormState){
    const {uid, mode, nid } = state;
    this.userId = uid;
    this.nid = nid;
    this.formMode = mode;
  }

  /*
  * Renders only on ADD mode
  */
  private weightTrackerFormFieldsOnAdd() {
    /* Load default values */
    this.weightTrackerService.loadDefaultForm()
    .pipe(takeWhile(() => this.isAlive))
    .subscribe( ({form}) => this.weightTrackerFormModel = form
    );
  }

  /*
  * Renders only on EDIT mode
  */
  private  weightTrackerFormFieldsOnEdit() {
    this.weightTrackerService.loadEditForm(this.nid)
    .pipe(takeWhile(() => this.isAlive))
    .subscribe( fields => {
      console.log("Output", fields);
    })
  }

  /*
  * Handles submit both for
  * Add/edit form
  */
  submit(payload: WeightTrackerFormFieldGroup) {
    const { field_weight_date } = payload;
    const formattedDate = moment(field_weight_date).format('YYYY-MM-DD');
    const reditectTo = `/trainees/${this.userId}/weight-monitor`;
    const args = {
      trainee: this.userId,
      field_weight_date: formattedDate
    };
    return this.weightTrackerService.saveWeightTrackerForm(payload, {...args}, reditectTo);
  }

  navigateBack(){
    this.router.navigateByUrl(`/trainees/${this.userId}/weight-monitor`,
    { skipLocationChange: true });
  }

}
