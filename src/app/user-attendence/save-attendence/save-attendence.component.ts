import { Component, OnInit , Inject} from '@angular/core';
import { AttendenceListComponent } from '../attendence-list/attendence-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-save-attendence',
  templateUrl: './save-attendence.component.html',
  styleUrls: ['./save-attendence.component.scss']
})
export class SaveAttendenceComponent implements OnInit {

currdate: string;
  constructor(public dialogRef: MatDialogRef<SaveAttendenceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.currdate = this.data.addPosition;
  }
  saveMyAttendence(saveAttendence): any {
console.log(saveAttendence.controls.attend_date.value);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
