import { Pager } from "src/app/models/pager.model";
import { Trainee } from "src/app/modules/trainees/model/trainee.model";

export interface TraineeResponse{
  rows: Trainee[];
  pager: Pager;
}
