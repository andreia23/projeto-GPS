import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirestoreModule} from './firestore/firestore.module';
import { EventsModule } from './events/events.module';
import { ReuniaoEventsComponent } from './reuniao-events/reuniao-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ReuniaoEventsComponent,
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
