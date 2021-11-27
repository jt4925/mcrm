import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmailValidator {

  constructor() {}

  public isValid(control: AbstractControl) {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regExp.test(control.value)) {
      return { invalidEmail: true };
    }
  }
}
