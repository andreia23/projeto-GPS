import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Evento } from '../model/Evento';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  events: AngularFirestoreCollection<Evento>;
  
  constructor(private firestore: AngularFirestore) {
    this.events = firestore.collection<Evento>('eventos');
  }

  addEvent(event: Evento)
  {
    return this.events.add(event);
  }

  eventosObsv()
  {
    return this.events.snapshotChanges();
  }
}
