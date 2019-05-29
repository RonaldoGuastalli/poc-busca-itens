import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemRequestModel } from '../model/item-request.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';
import { itemDetalhe } from '../model/item-detalhe.model';
import { PrecoRequestModel } from '../model/preco-request.model';

@Injectable()
export class ItemRestService {

    private urlBase: string = 'http://api-int.grupodimedservices.com.br/tst'

    constructor(private http: HttpClient) { }

    public getListaItens(nomePesquisaItem: string): Observable<ItemRequestModel[]> {
        return this.http.get<ItemRequestModel[]>(`${this.urlBase}/item/v3/itens/base/autocomplete?nome=${nomePesquisaItem}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
    }

    public getEstoqueItemNaLoja(codigoItem: number): Observable<EstoqueRequestModel[]> {
        return this.http.get<ItemRequestModel[]>(`${this.urlBase}/filial/v1/filiais/101/estoque?itens=${codigoItem}`);
    }

    buscaDetalhe(codigoItem: number): Observable<ItemRequestModel> {
        const url: string = `${this.urlBase}/mostruario/v3/itens/detalhe`;
        itemDetalhe.itens[0].codigo = codigoItem;
        return this.http.post<ItemRequestModel>(url, itemDetalhe);
    }

    public getPrecos(codigoItem: number): Observable<PrecoRequestModel> {
        const url: string = `${this.urlBase}/mostruario/v3/itens/precos?item=${codigoItem}&filial=101&perfil=1`;
        return this.http.get<ItemRequestModel>(url);
    }
}