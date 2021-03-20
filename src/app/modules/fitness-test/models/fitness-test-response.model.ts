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