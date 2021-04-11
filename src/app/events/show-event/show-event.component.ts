import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirestoreService} from '../../shared/services/firestore.service';
import {Evento} from '../../shared/model/Evento';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
  evento: Evento;

  constructor(private firestore: FirestoreService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.evento = {
      titulo: "",
      data: "",
      jogo: "",
      descricao: ""
    };
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idEvent: string = (this.rotaAtual.snapshot.paramMap.get('id')) as string;
      this.firestore.pesquisarPorId(idEvent).subscribe(
        eventoRetornado => this.evento = eventoRetornado as Evento
      );
    }
  }

  ngOnInit(): void {
  }

  voltar() {
    this.roteador.navigate(['/list']);
  }

  atualizar() {
    this.firestore.editEvent(this.evento);
    this.voltar();
  }
}
