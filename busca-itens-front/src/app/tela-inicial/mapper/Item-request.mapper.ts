import { Builder } from 'builder-pattern';


import { ItemRequestModel } from '../model/item-request.model';
import { ItemResponseModel } from '../model/item-response.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';

export class ItemRequestMapper {

    constructor(){}

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


    public static estoqueModel(estoque: EstoqueRequestModel[]): ItemResponseModel[]{
        return  estoque.map((req: EstoqueRequestModel) =>
            Builder<ItemResponseModel>()
                .codigoItem(null)
                .ean(null)
                .estoqueLoja(req.estoqueLoja)
                .nomenclaturaVarejo(null)
                .precoDe(null)
                .build());
    }
    
}