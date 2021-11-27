import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { AuthService } from '../../../../common/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Router} from '@angular/router';

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  isLoading = false;
  email:string = 'jt49256@gmail.com';
  password:string = '49254925';
  // loginForm: FormGroup;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router){}

  ngOnInit(){

  }

  onLogin(form: NgForm) {
    // console.log('form value is: ',form.value);
    // console.log('form.value.email value is: ',form.value.email);
    // console.log("email is: ", this.email);
    // console.log("password is: ", this,this.password);
    if(form.invalid) { return; }
    let user = {
      username: form.value.email,
      password: form.value.password
    }
    console.log('user is: ', user);

    this.isLoading = true;
    setTimeout(() => {
      this.authService.authenticateUser(this.email, this.password).subscribe((data) => {
        console.log('check1')
        console.log('authService.token is: ', this.authService.getToken())
        console.log('check2')
        let isAuthenticated = data.isAuthenticated;
        console.log('check3')
        let token = data.token;
        console.log('check4')
        console.log('data42: is', data);
        this.authService.setToken(token);
        this.authService.setUser(data.user);
        this.authService.setAuthStatusListenerNextValue(true);
        this.isLoading = false;
        console.log('check5')
        this.router.navigate(['/featurea']);
        console.log('check6')
        console.log('authService.token is: ', this.authService.getToken())
      });
    }, 0);




  }

//   onLogin2(form: NgForm){
//     console.log('inside onLogin');
//     const baseUri = environment.api_url;
//     const uri = baseUri + '/api/login';

//     let user = {
//       username: form.value.email,
//       password: form.value.password
//     }

//     console.log('uri is: ', uri);
//     this.http.post<any>(uri, user).subscribe(data => {
//       console.log('data is: ', data);
//     });
//   }
}
