import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ItemRestService } from './item-rest.service';
import { ItemModelBuilder } from '../build/item-model.builder';
import { ItemRequestModel } from '../model/item-request.model';
import { ItemResponseModel } from '../model/item-response.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public listaDeItens: Array<any>;

  constructor(private itemRestService: ItemRestService) { }

  public getItensDaApi(nomeItem: string) {
    this.itemRestService.getListaItens(nomeItem)
      .subscribe({
        next: res => res.map(item => this.fazerForkJoin(item)), 
        error: err => console.log(err)      
    });
  }

  public getForkItens(codigo: number): Observable<any> {
    let estoque = this.itemRestService.getEstoqueItemNaLoja(codigo);
    let detalhe = this.itemRestService.buscaDetalhe(codigo);
    let preco = this.itemRestService.getPrecos(codigo);
    return forkJoin([estoque, detalhe, preco]);
  }

  public getListaItens(): any[] {
    this.listaDeItens = new Array<any>();
    return this.listaDeItens;
  }

  public fazerForkJoin(item: ItemRequestModel): void {
    this.getForkItens(item.codigoItem).subscribe(res => {
      this.pushDosItensPesquisados(item, res)
    });
  }

  public pushDosItensPesquisados(item: ItemRequestModel, res: any): void {
    this.listaDeItens.push(
      this.montagemDoBuilder(item, res)
    );
  }

  public montagemDoBuilder(item: ItemRequestModel, res: any): ItemResponseModel {
    return ItemModelBuilder.get()
      .dadosAutocomplete(item)
      .dadosEstoque(res[0][0])
      .precoDoProduto(res[2][0])
      .eanDoItem(res[1].itens[0])
      .detalheCompletoDoItem(res[1].itens[0])
      .build();
  }

}
