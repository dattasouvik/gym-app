import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersRoutingModule } from './trainers-routing.module';
import { ViewMyTrainersComponent } from './components/view-my-trainers/view-my-trainers.component';
import { TrainersStore } from 'src/app/modules/trainers/services/trainers.store';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { TrainersComponent } from './components/trainers/trainers.component';
import { RatingsModule } from 'src/app/modules/ratings/ratings.module';

@NgModule({
  declarations: [
    ViewMyTrainersComponent,
    TrainersComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule,
    MaterialDesignModule,
    RatingsModule
  ],
  providers:[TrainersStore]
})
export class TrainersModule { }
