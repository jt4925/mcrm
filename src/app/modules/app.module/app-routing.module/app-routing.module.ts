import {
  NgModule
} from '@angular/core';
import {
  Route,
  RouterModule
} from '@angular/router';

import {SplashComponent} from '../../features.module/splash.component/splash.component';
import {LoginComponent} from '../../core.module/auth.module/login.component/login.component';
import {DashboardComponent} from '../../features.module/dashboard.component/dashboard.component';
import {ProductsComponent} from '../../features.module/products.component/products.component';
import {AuthGuard} from '../../../common/services/auth-guard.service';

import {LoggedOutComponent} from '../../features.module/logged-out.component/logged-out.component';
import {FeatureAComponent } from '../../features.module/feature-a/feature-a.component';

const routes: Route[] = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
    data: {
      layoutType: 'A',
      title: 'Manifest CRM',
      name: 'Splash',
      route: 'splash'
    }
  },
  {
    path: 'splash',
    component: SplashComponent,
    data: {
      layoutType: 'A',
      title: 'Welcome to Manfiest CRM',
      name: 'splash',
      route: 'splash'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      layoutType: 'A',
      title: 'Login',
      name: 'login',
      route: 'login'
    }
  },
  {
    path: 'loggedout',
    component: LoggedOutComponent,
    data: {
      layoutType: 'A',
      title: 'Logged Out',
      name: 'loggedout',
      route: 'loggedout'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      layoutType: 'B',
      title: 'Dashboard',
      name: 'dashboard',
      route: 'dashboard'
    }
  },
  {
    path: 'featurea',
    component: FeatureAComponent,
    canActivate: [AuthGuard],
    data: {
      layoutType: 'B',
      title: 'Feature A',
      name: 'featurea',
      route: 'featurea'
    }
  }
];



@NgModule({
  providers: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {}