import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//angular fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//services
import { ClientService} from './services/client.service';

const appRoutes: Routes = [
  { path: '', component:DashboardComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent}
];

export const config =  {
    apiKey: "AIzaSyCoiozh-e9QTh_hR8XdwDRRjLnvhBlMDx8",
    authDomain: "clientpanel-d72b2.firebaseapp.com",
    databaseURL: "https://clientpanel-d72b2.firebaseio.com",
    storageBucket: "clientpanel-d72b2.appspot.com",
    messagingSenderId: "1040089759394"
  };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config) 
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
