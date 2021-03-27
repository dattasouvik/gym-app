import { EventEmitter, Inject, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/modules/app-config/app-config.module';
import { EditProfileComponent } from 'src/app/modules/user-profile/components/edit-profile/edit-profile.component';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';
import { EditProfilePictureComponent } from '../edit-profile-picture/edit-profile-picture.component';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  @Input() profile: UserProfile[] = [];
  @Output() private profileChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    @Inject(APP_CONFIG) public config: AppConfig
  ) { }

  ngOnInit(): void {}

  editProfile(profile: UserProfile) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";


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

  editProfilePic(profile: UserProfile) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";


    dialogConfig.data = profile;
    const dialogRef = this.dialog.open(EditProfilePictureComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val),
        tap(() => this.profileChanged.emit()
        )
      )
      .subscribe();

  }
}
