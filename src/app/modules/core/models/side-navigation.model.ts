export interface SideNavigation {
  title: string;
  icon?: string;
  url?: string;
  action?: SideNavigationAction;
}

export enum SideNavigationActionType {
  'CALLBACK'='CALLBACK'
}

export interface SideNavigationAction {
  type: SideNavigationActionType;
  value: string;
}
