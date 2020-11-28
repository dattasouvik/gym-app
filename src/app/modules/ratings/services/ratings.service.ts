import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, exhaustMap, map, shareReplay, tap } from 'rxjs/operators';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { HttpService } from 'src/app/services/http.service';
import { TrainerRating } from 'src/app/modules/ratings/model/trainer-rating.model';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { TrainersStore } from 'src/app/modules/trainers/services/trainers.store';

@Injectable()

export class RatingsService {

  constructor(
    private httpService: HttpService,
    public trainersStore:TrainersStore,
    private messages: MessagesService,
    private loading: LoadingService
  ) { }

  getRatings(trainerId:number){
    let params = new HttpParams();
    params = params.append('_format', `json`);
    params = params.append('trainer', `${trainerId}`);
    return this.httpService.get('trainer-review', {params})
    .pipe(
      map((rating,index) => rating[index]),
      catchError(err => {
        const message = "Unable to load Ratings.";
        this.messages.showErrors(message);
        return throwError(err);
      }),
      shareReplay()
    )
  }

  postRatings(data:TrainerRating){
    let params = new HttpParams();
    params = params.append('_format', `json`);
    const ratingData = {
      "trainer": data.trainer,
      "rating": data.rating,
      "comment": data.comment
    }
    const update$ = this.httpService.post('user-review', ratingData, {params})
    .pipe(
        exhaustMap( async (_) => this.trainersStore.loadMyTrainers(data.currentPage)
        ),
        catchError(err => {
          this.notify("Unable to submit rating.", true);
          return throwError(err);
      })
    );
    this.loading.showLoaderUntilCompleted(update$).subscribe(success =>
      this.notify("Thanks for your feedback.")
    );
  }

  private notify(message:string, error = false):void {
    if(error){
      this.messages.showErrors(message);
    }else{
      this.messages.showOnSuccess(message);
    }
  }
  
}
