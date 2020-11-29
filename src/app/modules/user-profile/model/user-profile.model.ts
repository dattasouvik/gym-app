import { GenderType, Roles } from 'src/app/models/user.model';

export interface UserProfile{
  first_name: string;
  last_name: string;
  username : string;
  email : string;
  address: string;
  about_me ?: string;
  gender?: GenderType;
  role: string;
}
