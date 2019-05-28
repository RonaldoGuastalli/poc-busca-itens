import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,  Subscription, forkJoin } from 'rxjs';
import { map, find } from 'rxjs/operators';


import { ItemRestService } from './item-rest.service';
import { ItemResponseModel } from '../model/item-response.model';
import { ItemRequestMapper } from '../mapper/Item-request.mapper';
import { ItemModelBuilder } from '../build/item-model.builder';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private listaResponse:ItemResponseModel[];

  constructor(private itemRestService: ItemRestService) { }

  public getItens(): Observable<ItemResponseModel[]>{  
    return this.itemRestService.getListaItens('dipi')
        .pipe(
          map(e => ItemRequestMapper.mapDaLista(e))
          );
  }

  public getEstoque(): Observable<ItemResponseModel[]>{
    return this.itemRestService.getEstoqueItemNaLoja(484160)
      .pipe(
        map(
          e => ItemRequestMapper.estoqueModel(e)
        )
      )
  }

  public getItensDaApi(){
    return this.itemRestService.getListaItens('tors').subscribe(res => {
      res.map(item => {
        this.getForkItens(item.codigoItem).subscribe(res => {
          let objetoTelaInicial = ItemModelBuilder.get()
            .dadosAutocomplete(item)
            .dadosEstoque(res[0][0])
            .precoDoProduto(res[2][0])
            .eanDoItem(res[1].itens[0])
            .detalheCompleoDoItem(res[1].itens[0])
            .build()
            console.log(objetoTelaInicial); 
        });
      })      
    });
  }

  public getDetalheDoItem(codigoItem: number){
    
    
  }


  public getForkItens(codigo: number): Observable<any>{    
    let estoque = this.itemRestService.getEstoqueItemNaLoja(codigo);
    let detalhe = this.itemRestService.buscaDetalhe(codigo);
    let preco = this.itemRestService.getPrecos(codigo);
    let detalheFull = this.itemRestService.detalheCompletoDoItem(codigo);
    return forkJoin([estoque, detalhe, preco, detalheFull]);
  }
  
}
