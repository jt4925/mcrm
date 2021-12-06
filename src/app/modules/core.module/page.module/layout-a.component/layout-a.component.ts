import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { routeAnimation } from '../../../../common/animations/fade.animation';
import { trigger, animate, transition, state, style, query } from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-a',
  templateUrl: './layout-a.component.html',
  styleUrls: ['./layout-a.component.scss'],
  animations: [routeAnimation]
})
export class LayoutAComponent implements OnInit {
  @Input() page: any;


  constructor(private router: Router) {
    console.log('configured routes: ', this.router.config);
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
