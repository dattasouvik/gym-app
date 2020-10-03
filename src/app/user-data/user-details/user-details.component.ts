import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  rate = 3.5;
  userDetails: any = {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman', lname: 'Dutta', email: 'suman@gmail.com'};
  alltrainer: any = [
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com'},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com'},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Sudip1', lname: 'Dey1', email: 'Sudip1@gmail.com'}
    ];
    selectedtrainer: any = [
      {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com'},
      {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Sudip1', lname: 'Dey1', email: 'Sudip1@gmail.com'}
      ];


  constructor() { }

  ngOnInit() {
  }
  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
