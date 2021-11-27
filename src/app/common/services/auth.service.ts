import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs'
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUri = environment.api_url;
  private token = '';
  private authStatusListener = new Subject<boolean>();
  private user = {
    username: '',
    password: '',
    firstname: '',
    lastname: ''
  };
  // private token: string;
  constructor(private router: Router, private http: HttpClient) { }

  public authenticateUser(username:string, password:string){
    const uri = this.baseUri + '/api/login';

    let _user = {
      username: username,
      password: password,
    }

    return this.http.post<any>(uri, _user);

  }

  public getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  public setToken(_token:string){
    this.token = _token;
    this.saveAuthData(this.token);
  }

  public setUser(user:any){
    this.user = user;
  }

  public getUser(){
    return this.user;
  }

  public getToken(){
    let t = localStorage.getItem('token');
    console.log('getToke() is: ', t)
    return t;
  }

  public isAuthenticated(){
    if(this.token!=''){
      if(!this.tokenExpired(this.token)){
        return true;
      }
    }
    return false;
  }

  public setAuthStatusListenerNextValue(val:boolean){
    this.authStatusListener.next(val);
  }

  public tokenExpired(token:any) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    console.log('expiry is: ', expiry);
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
 }

 private saveAuthData(token:string){
  localStorage.setItem('token', token);

 }

 public logout(){
   this.clearAuthData();
   let _user = {
    username: '',
    password: '',
    firstname: '',
    lastname: ''
    };
    this.setUser(_user);
   this.router.navigate(['/loggedout']);
 }

 private clearAuthData(){
   localStorage.removeItem('token');
 }
}
