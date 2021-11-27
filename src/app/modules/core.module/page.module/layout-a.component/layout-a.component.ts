import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { fadeAnimation } from '../../../../common/animations/fade.animation';
import { trigger, animate, transition, state, style, query } from '@angular/animations';


@Component({
  selector: 'app-layout-a',
  templateUrl: './layout-a.component.html',
  styleUrls: ['./layout-a.component.scss'],
  animations: [fadeAnimation]
})
export class LayoutAComponent implements OnInit {
  @Input() page: any;


  constructor() { }

  ngOnInit(): void {
  }

}
