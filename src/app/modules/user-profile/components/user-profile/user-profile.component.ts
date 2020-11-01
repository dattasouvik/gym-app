import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';
import { UserProfileStore } from 'src/app/modules/user-profile/services/user-profile.store';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userProfileStore: UserProfileStore
  ) { }

  userProfile$: Observable<UserProfile[]>;

  ngOnInit(): void {
    this.reloadUserProfile();
  }

  reloadUserProfile(){
    this.userProfile$ = this.userProfileStore.viewUserProfile();
  }

}
