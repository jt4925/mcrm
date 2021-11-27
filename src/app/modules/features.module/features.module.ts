import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component/splash.component';
import { NgMatModule } from '../shared.module/ng-mat.module/ng-mat.module';
import { ProductsComponent } from './products.component/products.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { LoggedOutComponent } from './logged-out.component/logged-out.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeatureAComponent } from './feature-a/feature-a.component';

@NgModule({
  declarations: [
    SplashComponent,
    ProductsComponent,
    DashboardComponent,
    LoggedOutComponent,
    FeatureAComponent
  ],
  imports: [
    CommonModule,
    NgMatModule,
    FlexLayoutModule
  ],
  exports: [
    NgMatModule
  ]
})
export class FeaturesModule { }
