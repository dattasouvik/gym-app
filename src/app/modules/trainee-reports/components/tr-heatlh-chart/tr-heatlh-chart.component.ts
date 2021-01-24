import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tr-heatlh-chart',
  templateUrl: './tr-heatlh-chart.component.html',
  styleUrls: ['./tr-heatlh-chart.component.scss']
})
export class TrHeatlhChartComponent implements OnInit {

  traineeId:number;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.pipe(
      map(response => response.id)
    ).subscribe(id => this.traineeId = +id)
  }

}
