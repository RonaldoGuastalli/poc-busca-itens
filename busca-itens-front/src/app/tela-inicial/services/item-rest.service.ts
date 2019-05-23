import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemRequestModel } from '../model/item-request.model';


@Injectable()
export class ItemRestService {

    constructor(private http: HttpClient){ }

    public getListaItens(nomePesquisaItem: string): Observable<ItemRequestModel[]> {
        return this.http.get<ItemRequestModel[]>(`http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nomePesquisaItem}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`)
        .pipe();
    }
}