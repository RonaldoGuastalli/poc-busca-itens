import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,  Subscription } from 'rxjs';
import { map, find } from 'rxjs/operators';


import { ItemRestService } from './item-rest.service';
import { ItemResponseModel } from '../model/item-response.model';
import { ItemRequestMapper } from '../mapper/Item-request.mapper';

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
  
}
