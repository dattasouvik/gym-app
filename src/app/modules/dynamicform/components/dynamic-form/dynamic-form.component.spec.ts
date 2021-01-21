import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';


/* Reference: https://www.telerik.com/blogs/testing-dynamic-forms-in-angular */

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.fields = [
      {
        type: "input",
        label: "Age",
        inputType: "number",
        name: "age",
        validations: [
          {
            name: "required",
            validator: {
              type: "required",
              value: true
            },
            message: "Arms Required"
          }
        ]
      },
    ];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const ageInput = compiled.querySelector('input[type="number"]');


    expect(ageInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    const ageInput = form.controls.name;
    ageInput.setValue(10);

    expect(form.valid).toBeTruthy();
  })

});
