import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./pages/user/user-page/user-page.component";
import {PrenotazionePageComponent} from "./pages/prenotazione-page/prenotazione-page.component";
import {AutoPageComponent} from "./pages/auto-page/auto-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserDetailComponent} from "./pages/user/user-detail/user-detail.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },

  { path: 'user', component: UserPageComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/add', component: UserDetailComponent },

  { path: 'auto', component: AutoPageComponent },

  { path: 'prenotazione', component: PrenotazionePageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
