import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from 'src/app/modules/user-profile/components/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/modules/user-profile/components/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { UserProfileStore } from 'src/app/modules/user-profile/services/user-profile.store';

@NgModule({
  declarations: [UserProfileComponent,EditProfileComponent, ViewProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule
  ],
  providers:[UserProfileStore],
  entryComponents: [EditProfileComponent]
})
export class UserProfileModule { }
