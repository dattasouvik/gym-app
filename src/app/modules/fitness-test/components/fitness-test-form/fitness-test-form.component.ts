import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FitnessTestForm, FitnessTestFormMode, FitnessTestFormState } from 'src/app/modules/fitness-test/models/fitness-test-form.model';
import { FitnessTestService } from 'src/app/modules/fitness-test/services/fitness-test.service';
import { FitnessTestFormFieldGroup } from 'src/app/modules/fitness-test/models/fitness-test-response.model';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'fitness-test-form',
  templateUrl: './fitness-test-form.component.html',
  styleUrls: ['./fitness-test-form.component.scss']
})
export class FitnessTestFormComponent implements OnInit, OnDestroy {

  /* To track subscriptions & clear on destroy */
  private isAlive = true;

  fitnessTestForm: FormGroup;
  fitnessTestFormModel: any;
  fitnessTestFormFields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  userId: number;
  nid: number;
  formMode: FitnessTestFormMode;
  reditectTo: string;

  constructor(
    private router: Router,
    private fitnessTestService : FitnessTestService
    ) {
      this.getFormState(this.router.getCurrentNavigation().extras.state as FitnessTestFormState);
    }

  ngOnInit(): void {
    this.reditectTo = `/trainees/${this.userId}/fitness`;
    this.buildFormbyMode(this.formMode);
  }

  ngOnDestroy() {
    this.options.resetModel(); /* Clear form values on exit */
    this.isAlive = false;
  }


  private buildFormbyMode(mode: FitnessTestFormMode) {
    this.fitnessTestForm = new FormGroup({});
    this.fitnessTestFormModel = new FitnessTestForm(mode);
    this.fitnessTestFormFields = this.fitnessTestFormModel.formFields();

    if (mode === FitnessTestFormMode.ADD){
      return this.fitnessformFieldsOnAdd();
    }

    return this.fitnessformFieldsOnEdit();
  }

  private getFormState(state: FitnessTestFormState){
    const {uid, mode, nid } = state;
    this.userId = uid;
    this.nid = nid;
    this.formMode = mode;
  }
  /*
  * Renders only on ADD mode
  */
  private fitnessformFieldsOnAdd() {
    /* Load default values */
    this.fitnessTestService.loadDefaultFitnessTestForm()
    .pipe(takeWhile(() => this.isAlive))
    .subscribe( fields => {
      (this.fitnessTestFormModel = fields.form) as FitnessTestFormFieldGroup;
    });
  }

  /*
  * Renders only on EDIT mode
  */
  private fitnessformFieldsOnEdit() {
    this.fitnessTestService.loadEditFitnessTestForm(this.userId, this.nid)
    .pipe(takeWhile(() => this.isAlive))
    .subscribe( fields => {
      (this.fitnessTestFormModel = fields.form) as FitnessTestFormFieldGroup;
    })
  }

  /*
  * Handles submit both for
  * Add/edit form
  */
  submit(payload: FitnessTestForm) {
    const args = {
      node: this.formMode,
      trainee: this.userId
    };

    if(this.formMode === FitnessTestFormMode.EDIT){
      const updatedArgs = {
        ...args,
        nid: this.nid
      }
      return this.fitnessTestService
      .saveFitnessTestForm(payload, {...updatedArgs}, this.reditectTo );
    }

    return this.fitnessTestService
    .saveFitnessTestForm(payload,{...args}, this.reditectTo);
  }

}
