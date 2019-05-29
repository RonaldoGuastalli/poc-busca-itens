import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ItemRestService } from './item-rest.service';
import { ItemModelBuilder } from '../build/item-model.builder';
import { ItemRequestModel } from '../model/item-request.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private listaDeItens: Array<any>;

  constructor(private itemRestService: ItemRestService) { }

  public getItensDaApi(nomeItem: string) {
    this.itemRestService.getListaItens(nomeItem).subscribe(res => {
      res.map(item => {
        return this.fazerForkJoin(item)
      })
    });
  }

  public getForkItens(codigo: number): Observable<any> {
    let estoque = this.itemRestService.getEstoqueItemNaLoja(codigo);
    let detalhe = this.itemRestService.buscaDetalhe(codigo);
    let preco = this.itemRestService.getPrecos(codigo);
    return forkJoin([estoque, detalhe, preco]);
  }

  public getListaItens() {
    this.listaDeItens = new Array<any>();
    return this.listaDeItens;
  }

  public fazerForkJoin(item: ItemRequestModel) {
    return this.getForkItens(item.codigoItem).subscribe(res => {
      this.pushDosItensPesquisados(item, res)
    });
  }

  public pushDosItensPesquisados(item: ItemRequestModel, res: any) {
    return this.listaDeItens.push(
      this.montagemDoBuilder(item, res)
    );
  }

  public montagemDoBuilder(item: ItemRequestModel, res: any) {
    return ItemModelBuilder.get()
      .dadosAutocomplete(item)
      .dadosEstoque(res[0][0])
      .precoDoProduto(res[2][0])
      .eanDoItem(res[1].itens[0])
      .detalheCompletoDoItem(res[1].itens[0])
      .build();
  }

}
