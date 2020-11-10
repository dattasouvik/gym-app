import { ViewChild, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Trainees } from '../../model/trainees.model';
import { TraineesService } from '../../services/trainees.service';

@Component({
  selector: 'app-view-my-trainees',
  templateUrl: './view-my-trainees.component.html',
  styleUrls: ['./view-my-trainees.component.scss']
})
export class ViewMyTraineesComponent implements OnInit {
  traineeData: Trainees[];

  constructor(public _getTrainees: TraineesService) { }
  ngOnInit(): void {

    this._getTrainees.getTrainees1()
      .subscribe(arg => { this.traineeData = arg.rows; console.log(arg) });


  }


}


