import { Pager } from 'src/app/models/pager.model';

export interface Notification {
  nid: number;
  class: string;
  field_notification_description: string;
  field_notification_read_status: number;
  notification_type: string;
  created: string;
}

export interface ListNotificationsResponse {
  rows: Notification[];
  pager: Pager;
}
