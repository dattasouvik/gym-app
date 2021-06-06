import { SideNavigation, SideNavigationActionType } from "../models/side-navigation.model";

export const ANONYMOUS_SIDE_MENU: SideNavigation[] = [
  {
    title: 'Home',
    icon: 'home',
    url: '/home'
  },
  {
    title: 'Register',
    icon: 'add',
    url: '/register'
  },
  {
    title: 'Login',
    icon: 'login',
    url: '/login'
  },
];

export const TRAINEE_SIDE_MENU: SideNavigation[] = [
  {
    title: 'Home',
    icon: 'home',
    url: '/home'
  },
  {
    title: 'Profile',
    icon: 'account_circle',
    url: '/profile'
  },
  {
    title: 'My trainer',
    icon: 'assignment_ind',
    url: '/trainers'
  },
  {
    title: 'My Health Report',
    icon: 'straighten',
    url: '/view/reports/health-report'
  },
  {
    title: 'My Food Chart',
    icon: 'menu_book',
    url: '/view/reports/food-chart'
  },
  {
    title: 'My Workout Routine',
    icon: 'accessibility',
    url: '/view/reports/workout-routine'
  },
  {
    title: 'My Fitness Reports',
    icon: 'fitness_center',
    url: '/view/reports/fitness-test'
  },
  {
    title: 'My Weight Tracker',
    icon: 'monitor_weight',
    url: '/view/reports/weight-monitor'
  },
  {
    title: 'Logout',
    icon: 'remove',
    action: {
      type: SideNavigationActionType.CALLBACK,
      value: 'logout'
    }
  },
];

export const TRAINER_SIDE_MENU: SideNavigation[] = [
  {
    title: 'Home',
    icon: 'home',
    url: '/home'
  },
  {
    title: 'My trainees',
    icon: 'assignment_ind',
    url: '/trainees'
  },
  {
    title: 'Logout',
    icon: 'remove',
    action: {
      type: SideNavigationActionType.CALLBACK,
      value: 'logout'
    }
  },
];
