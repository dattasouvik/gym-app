import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCardRoutingModule } from './health-card-routing.module';
import { AddHealthCardComponent } from
'./components/add-health-card/add-health-card.component';
import { HealthCardComponent }
from './components/health-card/health-card.component';
import { ViewHealthCardsComponent }
from './components/view-health-cards/view-health-cards.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicformModule } from 'src/app/modules/dynamicform/dynamicform.module';



@NgModule({
  declarations: [AddHealthCardComponent, HealthCardComponent, ViewHealthCardsComponent],
  imports: [
    CommonModule,
    HealthCardRoutingModule,
    FlexLayoutModule,
    MaterialDesignModule,
    DynamicformModule
  ]
})
export class HealthCardModule { }
