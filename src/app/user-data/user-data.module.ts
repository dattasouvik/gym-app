import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { UserdataRoutingModule } from './user-data-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddRemoveTrainerComponent } from './add-remove-trainer/add-remove-trainer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RatingModule } from 'ng-starrating';
import { NgScrollCalendarModule } from 'ng-scroll-calendar';

@NgModule({
  declarations: [UserListViewComponent, UserDetailsComponent, AddRemoveTrainerComponent],
  imports: [
    CommonModule,
    MaterialImportsModule,
    UserdataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RatingModule
  ]
})
export class UserDataModule {

 }
