import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemRequestModel } from '../model/item-request.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';

@Injectable()
export class ItemRestService {

    private teste: Observable<EstoqueRequestModel>;

    constructor(private http: HttpClient){ }

    public getListaItens(nomePesquisaItem: string): Observable<ItemRequestModel[]> {
        return this.http.get<ItemRequestModel[]>(`http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${nomePesquisaItem}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
    }

    public getEstoqueItemNaLoja(codigoItem: number): Observable<EstoqueRequestModel[]> {
        return this.http.get<ItemRequestModel[]>(`http://api-int.grupodimedservices.com.br/tst/filial/v1/filiais/101/estoque?itens=${codigoItem}`);
    }


}