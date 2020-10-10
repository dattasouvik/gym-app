import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, EmailValidator, FormControl, NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';


@Component({
  selector: 'app-add-remove-trainer',
  templateUrl: './add-remove-trainer.component.html',
  styleUrls: ['./add-remove-trainer.component.scss']
})
export class AddRemoveTrainerComponent implements OnInit {
  dropdownSettings: IDropdownSettings  = {};
  alltrainer: any = [
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com', id: 1},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 2},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Sudip1', lname: 'Dey1', email: 'Sudip1@gmail.com', id: 3},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com', id: 4},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 5},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com', id: 6},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 7},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com', id: 8},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 9},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Suman1', lname: 'Dutta1', email: 'suman1@gmail.com', id: 10},
    {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 11}
    ];
    seltrainer: any = [
      {img: 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png', fname: 'Soumya1', lname: 'Bnerjee1', email: 'Soumya1@gmail.com', id: 2}
      ];
  constructor() {

  }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'fname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // limitSelection : 2,
      // itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onSubmit(customform) {
  console.log(customform.controls);
  }
}
