import { ItemResponseModel } from '../model/item-response.model';
import { ItemRequestModel } from '../model/item-request.model';
import { EstoqueRequestModel } from '../model/estoque-request.model';
import { PrecoRequestModel } from '../model/preco-request.model';
import { ItemDetalheCompletoModel } from '../model/item-detalhe-completo.model';
import { Component, Injectable, Pipe } from '@angular/core';

export class ItemModelBuilder {
    private itemModel: ItemResponseModel;

    constructor() {
        this.instanciaDeItemModel();
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

    public eanDoItem(dados: ItemDetalheCompletoModel): ItemModelBuilder {
        if (this.itemModel.codigoItem === dados.codigo) {
            this.itemModel.ean = dados.ean;
        }

        return this;
    }

    public precoDoProduto(dados: PrecoRequestModel): ItemModelBuilder {
        if (this.itemModel.codigoItem === dados.codigoItem) {
            this.itemModel.precoDe = dados.preco.precoVenda;
        }
        return this;
    }

    public detalheCompletoDoItem(dados: ItemDetalheCompletoModel): ItemModelBuilder {
        if (this.itemModel.codigoItem === dados.codigo) {
            this.itemModel.promocao = dados.origemDesconto;
            this.itemModel.precoPor = dados.precoPor;
            this.itemModel.precoDe = dados.precoDe;
            this.itemModel.nomenclatura = dados.nomenclatura;
            this.itemModel.nomenclaturaDetalhada = dados.nomenclaturaDetalhada;
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

    public instanciaDeItemModel(){
        return this.itemModel = new ItemResponseModel();
    }
}
