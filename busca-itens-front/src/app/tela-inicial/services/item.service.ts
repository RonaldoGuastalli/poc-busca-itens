import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, find } from 'rxjs/operators';


import { ItemRestService } from './item-rest.service';
import { ItemResponseModel } from '../model/item-response.model';
import { ItemRequestMapper } from '../mapper/Item-request.mapper';
import { ItemRequestModel } from '../model/item-request.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient, 
    private itemRequestMapper: ItemRequestMapper,
    private itemRestService: ItemRestService) { }

     
    public lista: ItemRequestModel[];

  // public getItens(nomeItem: string): Observable<ItemModel[]> {
  //   return this.http.get<Item[]>(
  //     `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nomeItem}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`)
  //     .pipe(map(itens => ItemModelMapper.mapFromList(itens)));
  //     ;
  // }

  public getItens(): ItemResponseModel[] {
    this.itemRestService
        .getListaItens('parace')
        .subscribe(e => this.lista = e);    
    return this.itemRequestMapper.mapDaLista(this.lista);
  }
}
