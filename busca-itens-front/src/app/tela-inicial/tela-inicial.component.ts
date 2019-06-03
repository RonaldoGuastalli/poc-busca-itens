import { Component, OnInit, OnChanges } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent {
  private textoEmetido: string;
  public listaDeItens: Array<any>;


  constructor(private service: ItemService) { }

  chegadaTexto(texto: string) {
    this.textoEmetido = texto
    this.service.getItensDaApi(texto);
    this.listarItens();

  }

  public listarItens() {
    this.listaDeItens = this.service.getListaItens();
  }

}
