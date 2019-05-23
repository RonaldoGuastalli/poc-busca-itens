import { Builder } from 'builder-pattern';


import { Injectable } from '@angular/core';
import { ItemRequestModel } from '../model/item-request.model';
import { ItemResponseModel } from '../model/item-response.model';

@Injectable()
export class ItemRequestMapper {

    public mapDaLista(itens: ItemRequestModel[]): ItemResponseModel[] {
            let listaItens = itens.map(item => 
             Builder<ItemResponseModel>()
            .codigoItem(item.codigoItem)
            .ean(null)
            .estoqueLoja(null)
            .nomenclaturaVarejo(item.nomenclaturaVarejo)
            .precoDe(null)
            .build());
            
            console.log(listaItens);
            
            
            return listaItens;         
    }
    
}