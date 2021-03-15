import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/shared/model/Evento';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  newEvent : Evento;

  constructor(private firestore: FirestoreService, private router: Router) {
    this.newEvent = {
	    titulo: "",
	    data: "",
	    jogo: "",
	    descricao: ""
    }
   }

  ngOnInit(): void {
  }

  submit()
  {
    console.log('adding...')
    this.firestore.addEvent(this.newEvent);
    this.router.navigate(['/list']);
  }

}
