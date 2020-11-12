import { Trainer } from 'src/app/modules/trainers/model/trainer.model';
import { Pager } from 'src/app/models/pager.model';


export interface TrainerResponse{
  rows:Trainer[];
  pager: Pager;
}
