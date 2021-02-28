import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tr-heatlh-chart',
  templateUrl: './tr-heatlh-chart.component.html',
  styleUrls: ['./tr-heatlh-chart.component.scss']
})
export class TrHeatlhChartComponent implements OnInit,OnDestroy {

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
