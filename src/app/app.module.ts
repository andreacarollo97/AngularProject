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
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {AutoPageComponent} from "./pages/auto/auto-page/auto-page.component";
import {AutoDetailComponent} from "./pages/auto/auto-detail/auto-detail.component";
import { PrenotazioneDetailComponent } from './pages/prenotazione/prenotazione-detail/prenotazione-detail.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';





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
    WelcomeComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        ReactiveFormsModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
