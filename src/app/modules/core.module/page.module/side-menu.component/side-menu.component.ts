import { Component, OnInit, Input } from '@angular/core';
// import MenuItems from './side-menu-data.json';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  // public appItems = MenuItems;
  // public config = {
  //   paddingAtStart: true,
  //   classname: 'my-custom-class',
  //   listBackgroundColor: 'rgb(208, 241, 239)',
  //   fontColor: 'rgb(8, 54, 71)',
  //   backgroundColor: 'rgb(208, 241, 239)',
  //   selectedListFontColor: 'red',
  // };
  // @Input() showSideMenu: boolean;

  constructor() {}

  ngOnInit() {
    // console.log('menuItems: ', MenuItems);
  }

  public selectedItem(event:any){
    console.log(event);
  }
}
