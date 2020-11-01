import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';
import { UserProfileStore } from 'src/app/modules/user-profile/services/user-profile.store';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;
  profile: UserProfile;

  constructor(
    private userProfileStore: UserProfileStore,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) profile:UserProfile,
  ) {
    this.profile = profile;

    this.form = fb.group({
      first_name: [profile.first_name, Validators.required],
      last_name: [profile.last_name,Validators.required],
      address: [profile.address,Validators.required]
    });
  }

  ngOnInit(): void {

  }

  save() {
    const changes = this.form.value;
    this.userProfileStore.saveUserProfile(changes).subscribe();

    this.dialogRef.close(changes);
  }

  close() {
    this.dialogRef.close();
  }
}
