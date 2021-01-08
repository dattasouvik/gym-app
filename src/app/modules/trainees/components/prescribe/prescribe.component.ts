import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, switchMap, take } from 'rxjs/operators';
import { DynamicFormComponent } from 'src/app/modules/dynamicform/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { TraineesService } from 'src/app/modules/trainees/services/trainees.service';
import { mapDynamicForm, mapPrescribeForm } from 'src/app/modules/trainees/utils/form-utility';


@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.scss']
})
export class PrescribeComponent implements OnInit {

  formFields: FieldConfig[] = [];
  traineeId:number;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(
    private traineesService: TraineesService,
    private loading: LoadingService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const form$ = this.route.params.pipe(
      concatMap(params => {
        this.traineeId = + params.id;
        return this.traineesService.getPrescibeForm(this.traineeId);
      }),
    );
    this.loading.showLoaderUntilCompleted(form$)
    .pipe(take(1))
    .subscribe( data  => {
      console.log(data)
      this.formFields = mapPrescribeForm(data.form);
    });
  }

  submit(formData: any) {
    let output = mapDynamicForm(formData);
    console.log(output)
    this.traineesService.postPrescibeForm(this.traineeId, output);
  }

}
