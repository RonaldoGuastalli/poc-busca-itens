import { Component, OnInit, OnChanges } from '@angular/core';
import { ItemService } from './services/item.service';
import { ItemResponseModel } from './model/item-response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Builder } from 'builder-pattern';
import { forEach } from '@angular/router/src/utils/collection';
import { ItemRequestMapper } from './mapper/Item-request.mapper';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent implements OnChanges, OnInit {  
  private itens: Observable<ItemResponseModel[]>;
  private estoqueLoja: Observable<ItemResponseModel[]>;
  private itensNovo: Observable<ItemResponseModel[]>;
  private objetoFinal: Observable<any>;
  private textoEmetido: string;
  private listaDeItens: Array<any> = new Array<any>();


  constructor(private service: ItemService) { }

  ngOnChanges() {        
  }

  ngOnInit(){
  }

  chegadaTexto(texto: string) {
    this.textoEmetido = texto
    this.service.getItensDaApi(texto); 
    this.listarItens();
      
  }

  public listarItens(){
    this.listaDeItens = this.service.getListaItens();    
  }

}
