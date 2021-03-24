import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TraineeFitnessReportDetails } from 'src/app/modules/fitness-test/models/fitness-test-response.model';

@Component({
  selector: 'app-fitness-test-details',
  templateUrl: './fitness-test-details.component.html',
  styleUrls: ['./fitness-test-details.component.scss']
})
export class FitnessTestDetailsComponent implements OnInit {


  report: TraineeFitnessReportDetails;

  constructor(
    private dialogRef: MatDialogRef<FitnessTestDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data:TraineeFitnessReportDetails,
  ) {
    this.report = data;
  }

  ngOnInit(): void {

  }

  showGroupedFields(fld1, fld2, fld3, fld4){
    if(!fld1 && !fld2 && !fld3 && !fld4){
      return false;
    }
    return true;
  };

  close() {
    this.dialogRef.close();
  }
}
