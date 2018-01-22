import { Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//my costum routing
import { AppRoutingModule } from './/app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'some-app-name:)'),
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ItemService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
