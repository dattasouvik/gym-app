export interface ViewFoodChart{
  is_prescribed: boolean;
  fields: Field[]
}

interface Field {
  label: string;
  values: [string];
}
