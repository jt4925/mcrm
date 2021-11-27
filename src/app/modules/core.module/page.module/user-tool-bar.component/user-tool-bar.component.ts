import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../common/services/auth.service';

@Component({
  selector: 'app-user-tool-bar',
  templateUrl: './user-tool-bar.component.html',
  styleUrls: ['./user-tool-bar.component.scss']
})
export class UserToolBarComponent implements OnInit {
  public firstName = '';
  public lastName = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    let user = this.authService.getUser();
    this.firstName = user.firstname;
    this.lastName = user.lastname;

    console.log('firstname is: ', this.firstName);
  }
 public logOut(){
   console.log('log out clicked');
   this.authService.logout();
 }
}
