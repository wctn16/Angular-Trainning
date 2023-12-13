import { Customer, Service } from './../../app.service';
import { Component, OnInit, ViewChild, enableProdMode } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import notify from 'devextreme/ui/notify';
import Validator from 'devextreme/ui/validator';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
const sendRequest = function (value: string) {
  const invalidEmail = 'test@dx-email.com';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value !== invalidEmail);
    }, 1000);
  });
};
interface FormData {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  Name: string;
  // Date: Date;
  // Add other fields as needed
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [Service]
})

export class RegisterComponent {
  @ViewChild(DxFormComponent, { static: false }) form!:DxFormComponent;

  passwordOptions: any = {
    mode: 'password',
    onValueChanged: () => {
      let editor:any = this.form.instance.getEditor('ConfirmPassword');
      if (editor.option('value')) {
        let instance = Validator.getInstance(editor.element()) as Validator;
        instance.validate();
      }
    },
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: './../../../assets/eye.png',
          type: 'default',
          onClick: () => this.changePasswordMode('Password'),
        },
      },
    ],
  };
  regisData : any = {

  };

  confirmOptions: any = {
    mode: 'password',
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: './../../../assets/eye.png',
          type: 'default',
          onClick: () => this.changePasswordMode('ConfirmPassword'),
        },
      },
    ],
  };
  formData: FormData = {
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Name: '',
    // Date: null,
    // Initialize other fields as needed
  };

  // customer: Customer;

  // countries: string[];

  // cities: string[];

  maxDate: Date = new Date();

  cityPattern = '^[^0-9]+$';

  namePattern: any = /^[^0-9]+$/;



  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
    options: {
      onClick: () => {this.onSubmit()}
    }
  };

  passwordComparison = () => this.form.instance.option('formData').Password;

  checkComparison() {
    return true;
  }

  changePasswordMode = (name: string) => {
    let editor:any = this.form.instance.getEditor(name);
    editor.option(
      'mode',
      editor.option('mode') === 'text' ? 'password' : 'text',
    );
  };

  constructor(service: Service) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    // this.countries = service.getCountries();
    // this.cities = service.getCities();
    // this.customer = service.getCustomer();
  }

  asyncValidation(params: { value: string; }) {
    return sendRequest(params.value);
  }
  onSubmit() {
    console.log(this.regisData)
  }

  onFormSubmit = function (e:any) {
    // console.log(this.regisData)

    // notify({
    //   message: 'You have submitted the form',
    //   position: {
    //     my: 'center top',
    //     at: 'center top',
    //   },
    // }, 'success', 3000);
    // e.preventDefault();

  };
}
