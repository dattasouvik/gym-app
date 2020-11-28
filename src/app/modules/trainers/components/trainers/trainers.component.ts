import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { TrainerRatingComponent } from 'src/app/modules/ratings/components/trainer-rating/trainer-rating.component';
import { RatingsService } from 'src/app/modules/ratings/services/ratings.service';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { UserRatingEvent } from 'src/app/modules/trainers/model/rating-event.model';
import { TrainersStore } from 'src/app/modules/trainers/services/trainers.store';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  constructor(
    public trainersStore:TrainersStore,
    private ratingService: RatingsService,
    private loading: LoadingService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.trainersStore.loadMyTrainers();
  }

  onPageChange(pageData : PageEvent){
    this.trainersStore.loadMyTrainers(pageData.pageIndex);
  }

  viewRatingModal($event: UserRatingEvent){
    /* To handle if pager is diabled */
    const currentPage = $event.currentPage ? $event.currentPage: 0;
    const trainer = $event.trainer;
    const rating$ = this.ratingService.getRatings(trainer);
    this.loading.showLoaderUntilCompleted(rating$).subscribe(
      rating => {
        const trainerRating = {
          ...rating,
          trainer,
          currentPage
        }

        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        dialogConfig.data = trainerRating;
  
        const dialogRef = this.dialog.open(TrainerRatingComponent, dialogConfig);
      }
    )
  }
}
