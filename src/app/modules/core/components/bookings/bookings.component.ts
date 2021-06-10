import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.bookings = this.coreService.getBookingDetails();
  }

}
