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

/* TBM */
interface Validator {
  name: ValidatorErrorNames;
  message: string;
  validator?: ValidatorOptions | string;
}

type ValidatorErrorNames = 'required' | 'pattern' | 'email' | 'minlength' | 'maxlength' | 'requireCheckboxToBeChecked' | 'min' | 'max';

export interface ValidatorOptions {
  type: string;
  value: any;
}

//Supprted ValidatorOptionsTypes
export enum ValidatorOptionsTypes {
  REQUIRED = "required",
  PATTERN = "pattern",
  EMAIL = "email",
  MIN_LENGTH = "minlength",
  MIN = "min",
  MAX_LENGTH = "maxlength",
  MAX = "max",
}

interface Collections {
  type: string;
  minChecked?: number;
}


interface ConfigOptions {
  name: string;
  value ?: string;
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
