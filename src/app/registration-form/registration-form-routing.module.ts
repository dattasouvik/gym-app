import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationMainFormComponent } from './registration-main-form/registration-main-form.component';



const routes: Routes = [

    { path: 'reg-user', component: RegistrationMainFormComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegistrationFormRoutingModule { }
