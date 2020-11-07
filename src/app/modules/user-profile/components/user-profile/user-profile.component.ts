import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfileStore } from 'src/app/modules/user-profile/services/user-profile.store';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public userProfileStore: UserProfileStore
  ) { }

  ngOnInit(): void {
    this.userProfileStore.loadUserProfile();
  }

}
