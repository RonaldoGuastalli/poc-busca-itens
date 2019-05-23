import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) { }

  public getItens(nomeItem: string): Observable<Item[]> {
    return this.http.get<Item[]>(
      `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nomeItem}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`)
      .pipe()
      ;
  }
}
