import { Builder } from 'builder-pattern';


import { ItemRequestModel } from '../model/item-request.model';
import { ItemResponseModel } from '../model/item-response.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

export class ItemRequestMapper {

    constructor() { }

    public static mapDaLista(itens: ItemRequestModel[]): ItemResponseModel[] {
        return itens.map((request: ItemRequestModel) =>
            Builder<ItemResponseModel>()
                .codigoItem(request.codigoItem)
                .ean(null)
                .estoqueLoja(null)
                .nomenclaturaVarejo(request.nomenclaturaVarejo)
                .precoDe(null)
                .build());
    }


    public static estoqueModel(estoque: EstoqueRequestModel[]): ItemResponseModel[] {
        return estoque.map((req: EstoqueRequestModel) =>
            Builder<ItemResponseModel>()
                .codigoItem(null)
                .ean(null)
                .estoqueLoja(req.estoqueLoja)
                .nomenclaturaVarejo(null)
                .precoDe(null)
                .build());
    }

    // public static getItensTelaInicial(itens: ItemService): Observable<ItemResponseModel> {        
    //     return itens.getForkItens('parac').pipe(
    //         map(e => {return Builder<ItemResponseModel>()
    //             .codigoItem(e[0][0].codigoItem)
    //             .ean(null)
    //             .estoqueLoja(e[1][0].estoqueLoja)
    //             .nomenclaturaVarejo(e[0][0][0].nomenclaturaVarejo)
    //             .precoDe(e[2][0].precoPor)
    //             .build()})
    //     );
    // }

}