import { Roles, GenderType } from 'src/app/models/user.model';

export interface UserRegistration {
  first_name: string;
  last_name: string;
  email: string;
  role: Roles;
  gender: GenderType;
  address: string;
  phone: number;
  password: string;
  about_me?: string;
}