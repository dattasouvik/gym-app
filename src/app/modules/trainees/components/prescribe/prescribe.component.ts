import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, take, map } from 'rxjs/operators';
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
      map(response => {
        const mapping =  Object.values(response).map(el => {
          return el
        });
        return mapping;
      })
    );
    this.loading.showLoaderUntilCompleted(form$)
    .pipe(take(1))
    .subscribe( fields  => {
      this.formFields = fields as FieldConfig[] ;
    });
  }

  submit(formData: {[key:string]: any}) {
    let submittedData = mapDynamicForm(formData);
    this.traineesService.postPrescibeForm(this.traineeId, submittedData);
  }

}
