import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainerRating } from 'src/app/modules/ratings/model/trainer-rating.model';
import { RatingsService } from 'src/app/modules/ratings/services/ratings.service';

@Component({
  selector: 'app-trainer-rating',
  templateUrl: './trainer-rating.component.html',
  styleUrls: ['./trainer-rating.component.scss']
})
export class TrainerRatingComponent implements OnInit {

  ratingForm: FormGroup;
  ratingInfo: TrainerRating;
  hovered = 0;
  selected = 0;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TrainerRatingComponent>,
    @Inject(MAT_DIALOG_DATA) rating:TrainerRating,
    private ratingsService: RatingsService
  ) {
    this.ratingInfo = rating;
  }

  ngOnInit(): void {
    this.selected = this.ratingInfo.rating ? this.ratingInfo.rating: 0 ;
    this.ratingForm = this.fb.group({
      rate:  [ this.ratingInfo.rating, Validators.compose([ Validators.required ])],
      feedback: [ this.ratingInfo.comment , Validators.required]
    });
  }

  save() {
    const ratingsData = {
      "comment": this.ratingForm.value.feedback,
      "rating": this.ratingForm.value.rate,
      "currentPage": this.ratingInfo.currentPage,
      "trainer": this.ratingInfo.trainer
    }
    this.ratingsService.postRatings(ratingsData);
    this.dialogRef.close(ratingsData);
  }

  close() {
    this.dialogRef.close();
  }
}
