import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRatingComponent } from './components/trainer-rating/trainer-rating.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { RatingsService } from 'src/app/modules/ratings/services/ratings.service';



@NgModule({
  declarations: [TrainerRatingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbRatingModule,
    MaterialDesignModule
  ],
  exports:[TrainerRatingComponent],
  providers:[RatingsService],
  entryComponents: [TrainerRatingComponent]
})
export class RatingsModule { }
