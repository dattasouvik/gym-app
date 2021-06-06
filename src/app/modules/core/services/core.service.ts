import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Roles } from 'src/app/models/user.model';
import { ANONYMOUS_SIDE_MENU, TRAINEE_SIDE_MENU, TRAINER_SIDE_MENU } from '../configs/side-menu-config';
import { Activity } from '../models/activity.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private activities: Activity[] = [
    {
      image: 'assets/images/icons/health.png',
      title: 'Health',
      description: 'Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justoac ante.'
    },
    {
      image: 'assets/images/icons/dance.png',
      title: 'Dance',
      description: 'Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justoac ante.'
    },
    {
      image: 'assets/images/icons/fitness.png',
      title: 'Fitness',
      description: 'Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justoac ante.'
    },
    {
      image: 'assets/images/icons/yoga.png',
      title: 'Yoga',
      description: 'Nam pellentesque, velit at sodales elementum, neque metus ultricies justo, eget varius diam justoac ante.'
    },
  ];

  private bookings: Booking[] = [
    {
      text: 'Choose Your Location',
    },
    {
      text: 'Choose Your Gym',
    },
    {
      text: 'Enter Contact Details',
    },
    {
      text: 'Book Your Appointment',
      link: 'https://www.healthworldfitness.com/contact-us'
    },
  ];

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  getAllActivities() {
    return this.activities;
  }

  getBookingDetails() {
    return this.bookings;
  }

  /*
  * Load menus based on userroles
  */
  sideNavigationMenu(role: string[]) {
    /* Anonymous Users */
    if (role.length === 0) {
      return ANONYMOUS_SIDE_MENU;
    }
    if (role.includes(Roles.MEMBER)) {
      return TRAINEE_SIDE_MENU;
    }
    return TRAINER_SIDE_MENU;
  }

  /*
  * Render component based on user role
  */
  async loadHomeComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { AnonymousUserHomeComponent } = await import('./../components/anonymous-user-home/anonymous-user-home.component');
    const { LoggedinUserHomeComponent } = await import('./../components/loggedin-user-home/loggedin-user-home.component');

    vcr.clear();
    let component: any = isLoggedIn ? LoggedinUserHomeComponent : AnonymousUserHomeComponent;

    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component));
  }

}
