import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/Usuario';
import {FirestoreService} from '../../shared/services/firestore.service';
import {Router} from '@angular/router';
import {FirestoreUsuarioService} from '../../shared/services/firestore-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  newUsuario: Usuario;

  constructor(private firestore: FirestoreUsuarioService, private router: Router) {
    this.newUsuario = {
      nome: '',
      email: '',
      senha: '',
      idade: ''
    };
  }

  ngOnInit(): void {
  }

  cadastrar(){
    this.firestore.addUsuario(this.newUsuario);
    this.router.navigate(['/new']);
  }

}
