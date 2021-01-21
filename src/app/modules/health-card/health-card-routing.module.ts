import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHealthCardComponent } from 'src/app/modules/health-card/components/add-health-card/add-health-card.component';
import { HealthCardComponent } from 'src/app/modules/health-card/components/health-card/health-card.component';
import { ViewHealthCardsComponent } from 'src/app/modules/health-card/components/view-health-cards/view-health-cards.component';



const routes: Routes = [
  { path: '',
    component: HealthCardComponent,
    children: [
      {
        path: 'view',
        component: ViewHealthCardsComponent
      },
      {
        path: 'add/:id',
        component: AddHealthCardComponent
      },
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCardRoutingModule { }
