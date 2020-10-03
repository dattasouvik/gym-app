import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddRemoveTrainerComponent } from './add-remove-trainer/add-remove-trainer.component';


const routes: Routes = [

    { path: 'list', component: UserListViewComponent },
    { path: 'details', component: UserDetailsComponent },
    { path: 'add-trainers', component: AddRemoveTrainerComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserdataRoutingModule { }
