import { Component, OnInit, HostBinding } from '@angular/core';
import { PageService } from '../../../../common/services/page.service';
import { Input } from '@angular/core';
import { trigger, animate, transition, state, style, query } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '../../../../common/animations/fade.animation';


@Component({
  selector: 'app-layout-b',
  templateUrl: './layout-b.component.html',
  styleUrls: ['./layout-b.component.scss'],
  animations: [routeAnimation]
})
export class LayoutBComponent implements OnInit {
  showSideMenu = true;
  showFade = true;
  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.sideNavToggleSubject.subscribe(() => {
      this.showSideMenu = !this.showSideMenu;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

