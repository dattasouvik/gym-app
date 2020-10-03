import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule,
  MatRadioModule, MatDatepickerModule, MatButtonModule, MatDividerModule, MatListModule,
  MatNativeDateModule, MatCardModule, MatDialogModule, } from '@angular/material';
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
