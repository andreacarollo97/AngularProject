import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./pages/user/user-page/user-page.component";
import {PrenotazionePageComponent} from "./pages/prenotazione/prenotazione-page/prenotazione-page.component";
import {AutoPageComponent} from "./pages/auto/auto-page/auto-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserDetailComponent} from "./pages/user/user-detail/user-detail.component";
import {AutoDetailComponent} from "./pages/auto/auto-detail/auto-detail.component";
import {PrenotazioneDetailComponent} from "./pages/prenotazione/prenotazione-detail/prenotazione-detail.component";
import {LoginPageComponent} from "./pages/login/login-page/login-page.component";

import {RouteGuardServiceAdmin} from "./services/login/route-guard.serviceAdmin";
import {PrenotazioneUserComponent} from "./pages/prenotazione/prenotazione-user/prenotazione-user.component";
import {AutoDisponibiliComponent} from "./pages/prenotazione/auto-disponibili/auto-disponibili.component";
import {RouteGuardServiceUser} from "./services/login/route-guard.serviceUser";
import {WelcomeAdminComponent} from "./pages/welcome/welcome-admin/welcome-admin.component";
import {WelcomeUserComponent} from "./pages/welcome/welcome-user/welcome-user.component";
import {ParcoAutoPageComponent} from "./pages/parcoAuto/parco-auto-page/parco-auto-page.component";
import {RouteGuardServiceSuper} from "./services/login/route-guard.serviceSuper";
import {ParcoAutoDetailComponent} from "./pages/parcoAuto/parco-auto-detail/parco-auto-detail.component";
import {WelcomeSuperComponent} from "./pages/welcome/welcome-super/welcome-super.component";
import {RouteGuardServiceSuperOrAdmin} from "./services/login/route-guard.serviceSuperOrAdmin";
import {AutoPageSuperComponent} from "./pages/auto/auto-page-super/auto-page-super.component";
import {AutoDetailAssociateComponent} from "./pages/auto/auto-detail-associate/auto-detail-associate.component";





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LoginPageComponent, canActivate: [RouteGuardServiceUser]},
  { path: 'welcomeAdmin', component: WelcomeAdminComponent, canActivate: [RouteGuardServiceAdmin]},
  { path: 'welcomeUser', component: WelcomeUserComponent, canActivate: [RouteGuardServiceUser]},
  { path: 'welcomeSuper', component: WelcomeSuperComponent, canActivate: [RouteGuardServiceSuper]},

  { path: 'user', component: UserPageComponent, canActivate: [RouteGuardServiceSuperOrAdmin]},
  { path: 'user/detail/:id', component: UserDetailComponent, canActivate: [RouteGuardServiceSuperOrAdmin]},
  { path: 'user/add', component: UserDetailComponent, canActivate: [RouteGuardServiceSuperOrAdmin]},

  { path: 'auto', component: AutoPageComponent, canActivate: [RouteGuardServiceUser]},
  { path: 'autoLibere', component : AutoPageSuperComponent, canActivate: [RouteGuardServiceSuper]},
  { path: 'auto/detail/:id', component: AutoDetailComponent, canActivate: [RouteGuardServiceSuperOrAdmin]},
  { path: 'autoLibere/selected/:id', component: AutoDetailAssociateComponent, canActivate: [RouteGuardServiceSuper]},
  { path: 'auto/add', component: AutoDetailComponent, canActivate: [RouteGuardServiceSuperOrAdmin] },

  { path: 'prenotazione', component: PrenotazionePageComponent , canActivate: [RouteGuardServiceUser]},
  { path: 'prenotazione/detail/:id', component: PrenotazioneDetailComponent , canActivate: [RouteGuardServiceAdmin]},
  { path: 'prenotazione/add', component: PrenotazioneDetailComponent, canActivate: [RouteGuardServiceAdmin]},

  { path: 'parcoAuto', component: ParcoAutoPageComponent, canActivate: [RouteGuardServiceSuper]},
  { path: 'parcoAuto/detail/:id', component: ParcoAutoDetailComponent, canActivate: [RouteGuardServiceSuper]},
  { path: 'parcoAuto/add', component: ParcoAutoDetailComponent, canActivate: [RouteGuardServiceSuper] },

  { path: 'prenota', component: PrenotazioneUserComponent, canActivate:[RouteGuardServiceUser]},
  { path: 'listauto/:dataInizio/:dataFine', component: AutoDisponibiliComponent, canActivate:[RouteGuardServiceUser]},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
