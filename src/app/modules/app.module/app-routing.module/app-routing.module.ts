import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutAComponent } from '../../core.module/page.module/layout-a.component/layout-a.component';
import { LayoutBComponent } from '../../core.module/page.module/layout-b.component/layout-b.component';
import { SplashComponent } from '../../features.module/splash.component/splash.component';
import { LoginComponent } from '../../core.module/auth.module/login.component/login.component';
import { DashboardComponent } from '../../features.module/dashboard.component/dashboard.component';
import { ProductsComponent } from '../../features.module/products.component/products.component';
import { AuthGuard } from '../../../common/services/auth-guard.service';

import { LoggedOutComponent } from '../../features.module/logged-out.component/logged-out.component';
import { FeatureAComponent } from '../../features.module/feature-a.component/feature-a.component';


// const routes: Route[] = [{
//     path: '',
//     pathMatch: 'full',
//     redirectTo: '/login',
//     data: {
//       layoutType: 'A',
//       title: 'Manifest CRM',
//       name: 'Splash',
//       route: 'splash'
//     }
//   },
//   {
//     path: 'splash',
//     component: SplashComponent,
//     data: {
//       layoutType: 'A',
//       title: 'Welcome to Manfiest CRM',
//       name: 'splash',
//       route: 'splash'
//     }
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     data: {
//       layoutType: 'A',
//       title: 'Login',
//       name: 'login',
//       route: 'login'
//     }
//   },
//   {
//     path: 'loggedout',
//     component: LoggedOutComponent,
//     data: {
//       layoutType: 'A',
//       title: 'Logged Out',
//       name: 'loggedout',
//       route: 'loggedout'
//     }
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     data: {
//       layoutType: 'B',
//       title: 'Dashboard',
//       name: 'dashboard',
//       route: 'dashboard'
//     }
//   },
//   {
//     path: 'featurea',
//     component: FeatureAComponent,
//     canActivate: [AuthGuard],
//     data: {
//       layoutType: 'B',
//       title: 'Feature A',
//       name: 'featurea',
//       route: 'featurea'
//     }
//   }
// ];

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // basic routes
  {
    path: '',
    component: LayoutAComponent,
    data: {
      animation: 'layouta'
    },
    children: [
      // { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent, data: { animation: 'login' }},
      { path: 'splash', component: SplashComponent, data: { animation: 'splash' }},
      { path: 'loggedout', component: LoggedOutComponent, data: { animation: 'loggedout'} }
    ]
  },
  {
    path: '',
    component: LayoutBComponent,
    data: {
      animation: 'layoutb'
    },
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboard' }, },
      { path: 'featurea', component: FeatureAComponent, data: { animation: 'featurea' },  }
    ]
  },
// for production use authguard
// {
//   path: '',
//   component: LayoutBComponent,
//   children: [
//     { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
//     { path: 'featurea', canActivate: [AuthGuard], component: FeatureAComponent, }
//   ]
// },
];

@NgModule({
  providers: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {}
