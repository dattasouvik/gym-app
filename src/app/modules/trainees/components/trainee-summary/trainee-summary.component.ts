import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DynamicFormComponent } from 'src/app/modules/dynamicform/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { AddUserAttendanceComponent } from 'src/app/modules/user-attendance/components/add-user-attendance/add-user-attendance.component';
import { UserAttendanceStore }
  from 'src/app/modules/user-attendance/services/user-attendance.store';


@Component({
  selector: 'app-trainee-summary',
  templateUrl: './trainee-summary.component.html',
  styleUrls: ['./trainee-summary.component.scss']
})
export class TraineeSummaryComponent implements OnInit, OnDestroy {
  id: number;
  subscription: Subscription
  regConfig: FieldConfig[] = [

    {
      type: "multicheckbox",
      label: "Multiple options",
      name: "skills",
      value: true,
      options: [
        { name: "JS", selected: true, id: 12 },
        { name: "CSS", selected: true, id: 2 },
        { name: "asS", selected: false, id: 102 },
        { name: "ssdS", selected: true, id: 20 },
        { name: "Soumya", selected: false, id: 230 }
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 2 check is required",
          validator: "Custom"
        }
      ],
      collections: {
        type: "multicheckbox",
        minChecked: 2
      }
    },
    {
      type: "multicheckbox",
      label: "Multiple Carrer",
      name: "food",
      value: true,
      options: [
        { name: "orange", selected: true, id: 12 },
        { name: "mango", selected: true, id: 2 },
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 1 check is required",
          validator: "Custom"
        }
      ],
      collections: {
        type: "multicheckbox",
        minChecked: 1
      }
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(
    private route: ActivatedRoute,
    public userAttendanceStore: UserAttendanceStore,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = + params.id;
      this.userAttendanceStore.loadUserAttendance(this.id);
    });
  }



  submit(value: any) {
    console.log(value)
  }

  addAttendance() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = this.id;
    const dialogRef = this.dialog.open(AddUserAttendanceComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
