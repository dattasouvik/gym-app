import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MaterialDesignModule,
    FormsModule,
    CoreModule
  ]
})
export class FaqModule { }
