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



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },

  { path: 'user', component: UserPageComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/add', component: UserDetailComponent },

  { path: 'auto', component: AutoPageComponent },
  { path: 'auto/detail/:id', component: AutoDetailComponent },
  { path: 'auto/add', component: AutoDetailComponent },

  { path: 'prenotazione', component: PrenotazionePageComponent },
  { path: 'prenotazione/detail/:id', component: PrenotazioneDetailComponent },
  { path: 'prenotazione/add', component: PrenotazioneDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
