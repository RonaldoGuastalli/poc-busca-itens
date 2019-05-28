import { ItemResponseModel } from '../model/item-response.model';
import { ItemRestService } from '../services/item-rest.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ItemRequestModel } from '../model/item-request.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';
import { PrecoRequestModel } from '../model/preco-request.model';
import { IfStmt } from '@angular/compiler';
import { ItemDetalheCompletoModel } from '../model/item-detalhe-completo.model';

export class ItemModelBuilder {
    private itemModel: ItemResponseModel;

    constructor() {
        this.itemModel = new ItemResponseModel();
    }

    public static get() {
        return new ItemModelBuilder();
    }

    public dadosAutocomplete(dados: ItemRequestModel): ItemModelBuilder {
        this.itemModel.codigoItem = dados.codigoItem;
        this.itemModel.nomenclaturaVarejo = dados.nomeDetalhado;
        return this;
    }

    public dadosEstoque(dados: EstoqueRequestModel): ItemModelBuilder {
        this.itemModel.estoqueLoja = dados.estoqueLoja;
        return this;
    }

    public eanDoItem(dados: ItemDetalheCompletoModel): ItemModelBuilder{
        if(this.itemModel.codigoItem === dados.codigo){
            this.itemModel.ean = dados.ean;
        }    
        
        return this;
    }

    public precoDoProduto(dados: PrecoRequestModel): ItemModelBuilder {
        if(this.itemModel.codigoItem === dados.codigoItem){
            this.itemModel.precoDe = dados.preco.precoVenda;
        }          
        return this;
    }

    public detalheCompleoDoItem(dados: ItemDetalheCompletoModel): ItemModelBuilder{        
        if(this.itemModel.codigoItem === dados.codigo){
            this.itemModel.promocao = dados.origemDesconto;
            this.itemModel.precoPor = dados.precoPor;
            this.itemModel.precoDe = dados.precoDe;
            this.itemModel.nomeclatura = dados.nomenclatura;
            this.itemModel.nomeclaturaDetalhada = dados.nomenclaturaDetalhada;
            this.itemModel.principioAtivo = dados.principioAtivo;
            this.itemModel.classeTerapeutica = dados.classeTerapeutica;
            this.itemModel.situacaoDoItem = dados.situacaoItem;
            this.itemModel.advertencias = dados.advertencias;
            this.itemModel.categorias = dados.categorias;
        }    
        
        return this;
    }

    public build(): ItemResponseModel {
        return this.itemModel;
    }
}