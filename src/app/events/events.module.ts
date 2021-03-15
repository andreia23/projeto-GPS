import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event/new-event.component';
import { FormsModule } from '@angular/forms';
import { ListEventsComponent } from './list-events/list-events.component';


@NgModule({
  declarations: [NewEventComponent, ListEventsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EventsModule { }
