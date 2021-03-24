import { Pager } from "src/app/models/pager.model";

export interface FitnessTestFormResponse {
  form : FitnessTestFormFieldGroup;
}


export interface FitnessTestFormFieldGroup {
  cardio: CardioField[];
  field_crunches: MultiValueField[];
  field_push_ups: MultiValueField[];
  field_chest_press_fitness_test: MultiValueField[];
  field_core_balancer: MultiValueField[];
  field_sit_and_rest: MultiValueField[];
}

interface CardioField {
  field_rhr1 : number | null;
  field_rhr2: number | null;
  field_rhr3: number | null;
}

interface MultiValueField{
  value: number | null;
}

/*
* Fitness test report for TRAINER ONLY
*/
export interface MonitorFitnessTestReport {
  name: number | string;
  nid: number;
  field_assessment_date: string;
  field_crunches: [number];
  field_push_ups: [number];
  field_core_balancer: [number];
  field_chest_press_fitness_test: [number];
  field_sit_and_rest: [number];
  field_cardiovascular_endurance: CardioField[];
}

export interface MonitorFitnessTestReportResponse {
  rows: MonitorFitnessTestReport[];
  pager: Pager;
}

export interface TraineeFitnessReports{
  date:string;
  nid:number;
  status:string;
}

export interface TraineeFitnessReportsResponse{
  rows: TraineeFitnessReports[];
  pager: Pager;
}


export interface TraineeFitnessReportDetails{
  nid: number;
  field_assessment_date: string;
  field_crunches: [number];
  field_push_ups: [number];
  field_core_balancer: [number];
  field_chest_press_fitness_test: [number];
  field_sit_and_rest: [number];
  field_cardiovascular_endurance: CardioField[];
  field_arms: number;
  field_blood_p: number;
  field_bmi: number;
  field_body_age: number;
  field_body_water: number;
  field_fat_percent: number;
  field_height: number;
  field_le: number;
  field_minerals: number;
  field_protein: number;
  field_resting_metabolis: number;
  field_skeletal_arms: number;
  field_skeletal_legs: number;
  field_skeletal_trunk: number;
  field_skeletal_whole_body: number;
  field_trunk: number;
  field_visceral_fat: number;
  field_weight: number;
  field_whole_body: number;
}

export interface TraineeFitnessReportDetailsResponse{
  rows: TraineeFitnessReportDetails[];
  pager: Pager;
}
