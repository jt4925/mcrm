import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserValidator {
  private baseUri = environment.api_base_url;

  constructor(private http: HttpClient) {}

  searchUserByEmail(text) {
    // debounce
    //console.log('check2');
    //console.log('text is: ', text);
    return timer(1000)
      .pipe(
        switchMap(() => {
          // Check if username is available
          const uri = `${this.baseUri}/api/users/${text}`;
          //console.log('uri is:', uri);
          return this.http.get<any>(uri);
        })
      );
  }

  // userValidator(): AsyncValidatorFn {
  //   //console.log('check1');
  //   return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
  //     return this.searchUserByEmail(control.value)
  //       .pipe(
  //         map(res => {
  //           // if username is already taken
  //           if (res.length) {
  //             //console.log('inside user validator');
  //             return { 'userNameExists': true};
  //           }
  //         })
  //       );
  //   };
  // }

  userEmailExists(): AsyncValidatorFn {
    //console.log('check1');
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUserByEmail(control.value)
        .pipe(
          map(res => {
            //console.log('res.length', res.length);
            //console.log('res is', res);

            if (res.length !== 0) {
              return { userEmailExists: true};
            }
          })
        );
    };
  }

  userEmailDoesNotExist(): AsyncValidatorFn {
    //console.log('check1');
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUserByEmail(control.value)
        .pipe(
          map(res => {
            if (res.length === 0) {
              return { userEmailDoesNotExist: true};
            }
          })
        );
    };
  }

}
