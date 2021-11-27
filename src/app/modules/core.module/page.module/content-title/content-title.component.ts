import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../common/services/page.service';

@Component({
  selector: 'app-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent implements OnInit {

  public pageTitle = '';

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageTitle = this.pageService.getPage().title;
    console.log('setting page title with: ', this.pageTitle);
  }

  getPageTitle(){
    return this.pageService.getPage().title;
  }

}
