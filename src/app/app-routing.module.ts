import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import {LoginComponent} from './user/login/login.component';
import { ReuniaoEventsComponent } from './reuniao-events/reuniao-events.component';
import {ShowEventComponent} from './events/show-event/show-event.component';
import { LoggedInGuard } from './shared/guards/logged-in.guard';


const routes: Routes = [
  //TODO: Habilitar guards depois que tela de login e registro estiver implementada.
  {path: 'new', component: NewEventComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'list', component: ListEventsComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'login', component: LoginComponent},
  {path: 'reuniao', component: ReuniaoEventsComponent},
  {path: 'exibirevento/:id', component: ShowEventComponent/*, canActivate: [LoggedInGuard]*/},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
