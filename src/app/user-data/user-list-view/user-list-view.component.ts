import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  roles : any
  optionValue : string
  member : any =    [
  {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Suman',lname:'Dutta',email:'suman@gmail.com'},
  {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Soumya',lname:'Bnerjee',email:'Soumya@gmail.com'},
  {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Sudip',lname:'Dey',email:'Sudip@gmail.com'}
  ]
  trainer : any =[
    {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Suman1',lname:'Dutta1',email:'suman1@gmail.com'},
    {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Soumya1',lname:'Bnerjee1',email:'Soumya1@gmail.com'},
    {img:'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png',fname:'Sudip1',lname:'Dey1',email:'Sudip1@gmail.com'}
    ]

    userName : any
  constructor() {
    this.roles = ['Members','Trainer']
   }

  ngOnInit() {
  }

  seclectUser()
  {
    this.optionValue === 'Members' ?
    this.userName = this.member :
    (
      this.optionValue === 'Trainer' ?
      this.userName = this.trainer : this.userName = []
    )
  }
}
