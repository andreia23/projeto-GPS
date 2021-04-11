import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
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

  deleteEvent(id: string)
  {
    return this.events.doc(id).delete();
  }

  editEvent(e: Evento)
  {
    return this.events.doc(e.id).update(e);
  }

  pesquisarPorId(id: string)
  {
    return this.events.doc(id).valueChanges({idField:"id"}).pipe(map(doc => {
      return {...doc};
    }));
  }
}
