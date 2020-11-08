import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineesRoutingModule } from './trainees-routing.module';
import { ViewMyTraineesComponent } from './components/view-my-trainees/view-my-trainees.component';
// import { MaterialImportsModule } from 'src/app/material-imports/material-imports.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { TraineesService } from './services/trainees.service';


@NgModule({
  declarations: [ViewMyTraineesComponent],
  imports: [
    CommonModule,
    TraineesRoutingModule,
    MaterialDesignModule
  ],
  providers: [TraineesService]
})
export class TraineesModule { }
