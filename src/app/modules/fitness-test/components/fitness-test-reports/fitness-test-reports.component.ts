import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ft-fitness-test-reports',
  templateUrl: './fitness-test-reports.component.html',
  styleUrls: ['./fitness-test-reports.component.scss']
})
export class FitnessTestReportsComponent implements OnInit {

  @Input()
  userId :number;
  
  constructor(private router: Router) { }

  ngOnInit(): void {}

  // navigate(){
  //   alert("clicked");
  //   this.router.navigateByUrl('/fitness-test/form');
  // }
}
