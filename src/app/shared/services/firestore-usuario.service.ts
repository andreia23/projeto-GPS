import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Evento} from '../model/Evento';
import {Usuario} from '../model/Usuario';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUsuarioService {
  usuarios: AngularFirestoreCollection<Usuario>;

  constructor(private firestore: AngularFirestore) {
    this.usuarios = firestore.collection<Usuario>('usuarios');

  }

  addUsuario(usuario: Usuario){
    return this.usuarios.add(usuario);
  }

  usuariosObsv(){
    return this.usuarios.snapshotChanges();
  }

  deleteUsuario(id: string){
    return this.usuarios.doc(id).delete();
  }

  editUsuario(usuario: Usuario){
    return this.usuarios.doc(usuario.id).update(usuario);
  }

  pesquisarPorId(id: string){

    return this.usuarios.doc(id).valueChanges({idField: 'id'}).pipe(map(doc => {
      return {...doc};
    }));

  }

}
