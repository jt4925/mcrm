import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module/app-routing.module';
import { AppComponent } from './app.component/app.component';

import { CoreModule } from '../core.module/core.module';
import { FeaturesModule } from '../features.module/features.module';
import { SharedModule } from '../shared.module/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../common/services/auth-interceptor.service';
import { AuthGuard } from '../../common/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    SharedModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
