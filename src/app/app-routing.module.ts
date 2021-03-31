import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import {LoginEventsComponent} from './login-events/login-events.component';


const routes: Routes = [
  {path: 'new', component: NewEventComponent},
  {path: 'list', component: ListEventsComponent},
  {path: 'login', component: LoginEventsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
