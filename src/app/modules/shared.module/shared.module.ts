import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from './ng-mat.module/ng-mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMatModule,
    FlexLayoutModule
  ],
  exports: [
    NgMatModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
