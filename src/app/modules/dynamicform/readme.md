### Currently supported input types
 "input",
 "radiobutton",
 "select",
 "date",
 "checkbox",
 "multicheckbox",
 "button"

### API Format
 regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: [
        { name: "Male" },
        { name: "Female" }
      ],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: [
        { name: "India" },
        { name: "UAE" },
        { name: "UK" },
        { name: "US" }
      ]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "multicheckbox",
      label: "Multiple options",
      name: "skills",
      value: true,
      options: [
        { name: "JS",  selected: true, id: 12 },
        { name: "CSS",  selected: true, id: 2 },
        { name: "asS",  selected: false, id: 102 },
        { name: "ssdS",  selected: true, id: 20 }
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 2 check is required",
          validator : "Custom"
        }
      ],
      collections: {
        type :  "multicheckbox",
        minChecked : 2
      }
    },
    {
      type: "multicheckbox",
      label: "Multiple Carrer",
      name: "food",
      value: true,
      options: [
        { name: "orange",  selected: true, id: 12 },
        { name: "mango",  selected: true, id: 2 },
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 1 check is required",
          validator : "Custom"
        }
      ],
      collections: {
        type :  "multicheckbox",
        minChecked : 1
      }
    },
    {
      type: "button",
      label: "Save"
    }
];

### To generate form based on fields, add the following code  after importing the module

@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
<dynamic-form [fields]="regConfig" (submit)="submit($event)">
</dynamic-form>

submit(value: any) {
  console.log(value)
}