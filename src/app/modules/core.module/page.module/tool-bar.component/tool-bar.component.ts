import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../../common/services/page.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  // @Input() showSideMenu: boolean;
  // @Output() showSideMenuChange = new EventEmitter();


  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit() {

    // let user = this.authService.getUser();
    // this.firstName = user.firstname;
    // this.lastName = user.lastname;

    // console.log('firstname is: ', this.firstName);
  }

  // toggleMenu(){

  //   this.showSideMenu = !this.showSideMenu;

  // };
  goHome(){
    this.router.navigate(['/']);
  }

  toggleMenu() {
    console.log('inside toolbar and just clicked');
    this.pageService.toggle();
  };
}
