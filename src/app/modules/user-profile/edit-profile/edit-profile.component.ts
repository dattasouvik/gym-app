import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;
  profile: UserProfile;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) profile:UserProfile,
  ) { 
    this.profile = profile;

    this.form = fb.group({
      firstName: [profile.firstName, Validators.required],
      lastName: [profile.lastName,Validators.required],
      address: [profile.address,Validators.required]
    });
  }

  ngOnInit(): void {

  }

  save() {
    const changes = this.form.value;
  }

  close() {
    this.dialogRef.close();
  }
}
