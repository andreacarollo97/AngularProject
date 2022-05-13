import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyTableComponent } from './my-table/my-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserPageComponent } from './pages/user/user-page/user-page.component';
import { PrenotazionePageComponent } from './pages/prenotazione/prenotazione-page/prenotazione-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import {AutoPageComponent} from "./pages/auto/auto-page/auto-page.component";
import {AutoDetailComponent} from "./pages/auto/auto-detail/auto-detail.component";
import { PrenotazioneDetailComponent } from './pages/prenotazione/prenotazione-detail/prenotazione-detail.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';

import { PrenotazioneUserComponent } from './pages/prenotazione/prenotazione-user/prenotazione-user.component';
import { AutoDisponibiliComponent } from './pages/prenotazione/auto-disponibili/auto-disponibili.component';
import {InterceptorService} from "./services/login/interceptor.service";
import { WelcomeAdminComponent } from './pages/welcome/welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './pages/welcome/welcome-user/welcome-user.component';






@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    HeaderComponent,
    UserPageComponent,
    PrenotazionePageComponent,
    AutoPageComponent,
    HomePageComponent,
    UserDetailComponent,
    AutoDetailComponent,
    PrenotazioneDetailComponent,
    LoginPageComponent,
    PrenotazioneUserComponent,
    AutoDisponibiliComponent,
    WelcomeAdminComponent,
    WelcomeUserComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : InterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
