import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  resetForm(formGroup: FormGroup){
    formGroup.reset();
    Object.keys(formGroup.controls).forEach(key => {
      formGroup.get(key).setErrors(null) ;
    });
    formGroup.setErrors({ pristine: true });
  }
}
