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





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LoginPageComponent, canActivate: [RouteGuardServiceUser]},
  { path: 'welcomeAdmin', component: WelcomeAdminComponent, canActivate: [RouteGuardServiceAdmin]},
  { path: 'welcomeUser', component: WelcomeUserComponent, canActivate: [RouteGuardServiceUser]},

  { path: 'user', component: UserPageComponent, canActivate: [RouteGuardServiceAdmin]},
  { path: 'user/detail/:id', component: UserDetailComponent, canActivate: [RouteGuardServiceAdmin]},
  { path: 'user/add', component: UserDetailComponent, canActivate: [RouteGuardServiceAdmin]},

  { path: 'auto', component: AutoPageComponent, canActivate: [RouteGuardServiceUser]},
  { path: 'auto/detail/:id', component: AutoDetailComponent, canActivate: [RouteGuardServiceAdmin]},
  { path: 'auto/add', component: AutoDetailComponent, canActivate: [RouteGuardServiceAdmin] },

  { path: 'prenotazione', component: PrenotazionePageComponent , canActivate: [RouteGuardServiceUser]},
  { path: 'prenotazione/detail/:id', component: PrenotazioneDetailComponent , canActivate: [RouteGuardServiceAdmin]},
  { path: 'prenotazione/add', component: PrenotazioneDetailComponent, canActivate: [RouteGuardServiceAdmin]},

  { path: 'prenota', component: PrenotazioneUserComponent, canActivate:[RouteGuardServiceUser]},
  { path: 'listauto/:dataInizio/:dataFine', component: AutoDisponibiliComponent, canActivate:[RouteGuardServiceUser]},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
