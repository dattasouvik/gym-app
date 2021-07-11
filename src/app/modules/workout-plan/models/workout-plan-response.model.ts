export interface WorkoutPlanResponse {
  workout_plan: WorkoutPlanFieldGroup;
}

export interface WorkoutPlanFieldGroup {
  abs: WorkoutPlanField[];
  back: WorkoutPlanField[];
  biceps: WorkoutPlanField[];
  cardio: WorkoutPlanField[];
  chest: WorkoutPlanField[];
  fore_arms: WorkoutPlanField[];
  shoulder: WorkoutPlanField[];
  side: WorkoutPlanField[];
  thigh: WorkoutPlanField[];
  triceps: WorkoutPlanField[];
}

interface WorkoutPlanField {
  ActivityIdentifier: string;
  FieldIdentifier: string;
  ActivityDuration ?: number;
  ActivityReps ?: number;
  ActivitySets ?: number;
}
