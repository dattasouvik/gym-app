export interface UserRegistration{
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

export enum GenderType{
  MALE = 'Male',
  FEMALE = 'Female',
  OTHERS = 'Others'
}

export enum Roles{
  MEMBER = 'member',
  TRAINER = 'trainer'
}
