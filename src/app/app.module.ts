import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirestoreModule} from './firestore/firestore.module';
import { EventsModule } from './events/events.module';
import { LoginEventsComponent } from './login-events/login-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginEventsComponent,

  ],
  imports: [
    EventsModule,
    BrowserModule,
    AppRoutingModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
