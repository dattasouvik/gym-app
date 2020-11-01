import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { EditProfileComponent } from 'src/app/modules/user-profile/components/edit-profile/edit-profile.component';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  @Input() profile: UserProfile[] = [];

  @Output() private profileChanged = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editProfile(profile: UserProfile) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";


    dialogConfig.data = profile;
    const dialogRef = this.dialog.open(EditProfileComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val),
        tap(() => this.profileChanged.emit()
        )
      )
      .subscribe();

  }
}
