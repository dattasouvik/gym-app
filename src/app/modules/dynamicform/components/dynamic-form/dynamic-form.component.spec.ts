import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DebugElement } from '@angular/core';
import { DynamicFieldDirective } from 'src/app/modules/dynamicform/directives/dynamic-field.directive';
import { BrowserModule } from '@angular/platform-browser';


/* Reference: https://www.telerik.com/blogs/testing-dynamic-forms-in-angular */
describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DynamicFormComponent, 
        DynamicFieldDirective
       ],
      imports: [ 
        ReactiveFormsModule,
        BrowserModule 
      ],
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
    de = fixture.debugElement;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input element of type number', () => {
    const ageInput = de.nativeElement.querySelector('input[type="number"]');
    expect(ageInput).toBeTruthy();
  });


  it('should test form validity', () => {
    const form = component.form;
    // console.log(form)
    console.log("Component",component)
    // expect(form.valid).toBeFalsy();

    const ageInput = form.controls.age;
    ageInput.setValue(10);

    expect(form.valid).toBeTruthy();
  })

});
