import { Component, OnInit, OnChanges } from '@angular/core';
import { ItemService } from './services/item.service';
import { ItemResponseModel } from './model/item-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent {
  // private itens: Observable<ItemResponseModel[]>;
  // private estoqueLoja: Observable<ItemResponseModel[]>;
  // private itensNovo: Observable<ItemResponseModel[]>;
  // private objetoFinal: Observable<any>;
  private textoEmetido: string;
  private listaDeItens: Array<any>;


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
