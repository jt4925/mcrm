import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutesRecognized } from '@angular/router';
import { PageService } from '../../../../common/services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  private pageLayout = '';
  private page = {
    title: '',
    name: '',
    route: '',
    layoutType: ''
  }

  constructor(private router: Router, private pageService: PageService) {}

  ngOnInit(): void {
    // this.router.events.subscribe((data) => {
    //   if (data instanceof RoutesRecognized) {

    //     if(data.state.root.firstChild) {

    //       let routeData = data.state.root.firstChild.data;

    //       this.page.title = routeData['title'];
    //       this.page.name = routeData['name'];
    //       this.page.route = routeData['route'];
    //       // this.page.layoutType = routeData['layoutType'];

    //       console.log('setting page service with : ', this.page);
    //       this.pageService.setPage(this.page)

    //     }
    //   }
    // });

  }

  getLayoutType(){
    // console.log('returing layout type:', this.page.layoutType);
    return this.page.layoutType;
  }

  getPage(){
    return this.pageService.getPage();
  }
}
