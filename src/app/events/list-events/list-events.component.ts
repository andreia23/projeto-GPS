import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/shared/model/Evento';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
  eventos: {[key: string]: Evento};

  constructor(private firestore: FirestoreService, private roteador: Router) {
    this.eventos = {};
    this.firestore.eventosObsv().subscribe((data) => {
      this.eventos = {};
      data.map( d => {
        this.eventos[d.payload.doc.id] = {id: d.payload.doc.id, ... d.payload.doc.data()};
      });
    });
   }

  ngOnInit(): void {
  }

  delete(id: string)
  {
    this.firestore.deleteEvent(id);
  }

  exibirEvento(id: string): void {
    this.roteador.navigate([ 'exibirevento', id]);

  }

}
