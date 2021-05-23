import { Pager } from 'src/app/models/pager.model';

export interface WeightTrackerFormResponse {
  form: WeightTrackerFormFieldGroup;
}
export interface WeightTrackerFormFieldGroup {
  field_weight_date: string | null;
  field_before_weight: number | null;
  field_after_weight: number| null;
}

export interface ListWeightTrackers extends WeightTrackerFormFieldGroup {
  nid?: number;
  field_action?: boolean;
}

export interface ListWeightTrackersResponse{
  rows: ListWeightTrackers[];
  pager: Pager;
}


export interface WeightTrackerPermission{
  isTrainer: boolean;
  uid: number | null;
}
