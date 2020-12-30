export interface FieldConfig {
  [x: string]: any;
  label?: string;
  name?: string;
  inputType?: string;
  options?: ConfigOptions[];
  collections?: Collections;
  type: string;
  value?: any;
  validations?: Validator[];
}

interface Validator {
  name: string;
  message: string;
  validator?: any;
}

interface Collections {
  type: string;
  minChecked?: number;
}


interface ConfigOptions {
  name: string;
  id?: number;
  selected?: boolean;
}

//Supprted Input types
export enum DynamicFormInputs {
  INPUT = "input",
  RADIO = "radiobutton",
  SELECT = "select",
  DATE = "date",
  CHECKBOX = "checkbox",
  MULTI_CHECKBOX = "multicheckbox",
  BUTTON = "button",
}
