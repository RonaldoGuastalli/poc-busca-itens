import { Builder } from 'builder-pattern';


import { ItemRequestModel } from '../model/item-request.model';
import { ItemResponseModel } from '../model/item-response.model';

export class ItemRequestMapper {

    public static mapDaLista(itens: ItemRequestModel[]): ItemResponseModel[] {        
        return  itens.map((request: ItemRequestModel) =>
            Builder<ItemResponseModel>()
                .codigoItem(request.codigoItem)
                .ean(null)
                .estoqueLoja(null)
                .nomenclaturaVarejo(request.nomenclaturaVarejo)
                .precoDe(null)
                .build());
    }
}