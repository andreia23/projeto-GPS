import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import {LoginComponent} from './user/login/login.component';
import { ReuniaoEventsComponent } from './reuniao-events/reuniao-events.component';
import {ShowEventComponent} from './events/show-event/show-event.component';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  {path: 'new', component: NewEventComponent},
  {path: 'list', component: ListEventsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'reuniao', component: ReuniaoEventsComponent},
  {path: 'exibirevento/:id', component: ShowEventComponent},
  {path: 'cadastrarusuario', component: CadastroUsuarioComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
