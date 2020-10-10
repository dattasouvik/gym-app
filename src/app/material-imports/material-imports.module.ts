import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule,
  MatRadioModule, MatDatepickerModule, MatButtonModule,
  MatNativeDateModule, MatDividerModule, MatListModule, MatCardModule, MatCheckboxModule, MatDialogModule
  ],
  exports: [
  MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule,
  MatRadioModule, MatDatepickerModule, MatButtonModule,
  MatNativeDateModule, MatDividerModule, MatListModule, MatCardModule, MatCheckboxModule, MatDialogModule
  ]
})
export class MaterialImportsModule { }
