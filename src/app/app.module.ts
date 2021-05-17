import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirestoreModule} from './firestore/firestore.module';
import { EventsModule } from './events/events.module';
import { ReuniaoEventsComponent } from './reuniao-events/reuniao-events.component';
import { UsuarioModule } from './usuario/usuario.module';
import {LoginComponent} from './user/login/login.component';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ReuniaoEventsComponent
  ],
  imports: [
    EventsModule,
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    UsuarioModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
