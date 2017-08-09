import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { DataService} from './services/data.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
