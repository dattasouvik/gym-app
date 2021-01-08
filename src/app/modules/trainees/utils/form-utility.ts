/* Should be modified for date input */

export function mapDynamicForm(formValue: object): object{
  const output = {};
  for(const [key, value ] of Object.entries(formValue)){
      typeof(value) === "object" ? output[key] = filterCheckedValues(value) : output[key] = value;
  }
  return output;
}


export function filterCheckedValues(subType: object):Array<string>{
  let data = [];
  for(const [key, value ] of Object.entries(subType)){
    if( value!== false){
      data.push(key)
    }
  }
  return data;
}

export function  mapPrescribeForm(formValue: object){
  const output = [];
  for(const [key, value ] of Object.entries(formValue)){
    if(typeof(value) === "object") {
      output.push(value);
    }
  }
  return output;
}