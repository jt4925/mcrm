import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './page.module/page.module';
import { AuthModule } from './auth.module/auth.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageModule,
    AuthModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PageModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
