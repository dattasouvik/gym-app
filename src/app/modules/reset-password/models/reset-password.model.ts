export interface ResetPassword {
  resetType : string;
  value: string | number;
  code: string;
  pass: string;
}
