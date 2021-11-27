import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component/page.component';
import { LayoutAComponent } from './layout-a.component/layout-a.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module/shared.module';
import { SideMenuComponent } from './side-menu.component/side-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMatModule } from '../../shared.module/ng-mat.module/ng-mat.module';
import { LayoutBComponent } from './layout-b.component/layout-b.component';
import { ToolBarComponent } from './tool-bar.component/tool-bar.component';
import { UserToolBarComponent } from './user-tool-bar.component/user-tool-bar.component';
import { ContentTitleComponent } from './content-title/content-title.component';
import { ContentBodyComponent } from './content-body/content-body.component';


@NgModule({
  declarations: [
    PageComponent,
    LayoutAComponent,
    SideMenuComponent,
    LayoutBComponent,
    ToolBarComponent,
    UserToolBarComponent,
    ContentTitleComponent,
    ContentBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PageComponent,
    SharedModule,
    FlexLayoutModule,
    NgMatModule
  ]
})
export class PageModule {}
