import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tr-workout-plan',
  templateUrl: './tr-workout-plan.component.html',
  styleUrls: ['./tr-workout-plan.component.scss'],
})
export class TrWorkoutPlanComponent implements OnInit {

  traineeId:number;
  private subscription: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.auth.user$
    .pipe(
      map(response => response.id),
      take(1)
    )
    .subscribe(id => this.traineeId = +id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
