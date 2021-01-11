import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function minimumCheckboxCheckedValidator(
  minRequired = 1
): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    // if(formGroup.untouched){
    //   return null;
    // }
    // console.log(formGroup.invalid)
    let checked = 0

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key]
      if (control.value) {
        checked++
      }
    })

    if (checked < minRequired) {
      return {
        requireCheckboxToBeChecked: true,
        message: `Minimum ${minRequired} check is required `
      }
    }

    return null
  }
}
