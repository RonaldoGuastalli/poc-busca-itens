import { Builder } from "builder-pattern";

import { ItemResponseModel } from '../../model/item-response.model';
import { ItemModelBuilderStub } from '../../build/test/item-model.builder.stub';
import { ItemRequestModel } from '../../model/item-request.model';
import { EstoqueRequestModel } from '../../model/estoque-request.model';
import { ItemDetalheCompletoModel } from '../../model/item-detalhe-completo.model';
import { PrecoRequestModel } from '../../model/preco-request.model';
import { Preco } from '../../model/preco';
import { Categoria } from '../../model/categoria';

export class ItemServiceStub {

    public getListaItens() { }

    public getEstoqueItemNaLoja() { }

    public buscaDetalhe() { }

    public getPrecos() { }

    //dados mockados
    public static mockItemResponseModel(): ItemResponseModel {
        return Builder<ItemResponseModel>()
            .codigoItem(851730)
            .estoqueLoja(2)
            .precoDe(10.00)
            .nomenclaturaVarejo('paracetamol dc 150mg')
            .ean(1000)
            .promocao('promocao')
            .precoPor(10.00)
            .nomenclatura('paracetamol dc')
            .nomenclaturaDetalhada('paracetamos dc 150mg')
            .principioAtivo('fenol')
            .classeTerapeutica('TS')
            .situacaoDoItem('ok')
            .advertencias(['cuidado risco de morte'])
            .categorias([ItemModelBuilderStub.categoria()])
            .build()
    }

    public static mockItemRequestModel(): ItemRequestModel[] {
        return [
            Builder<ItemRequestModel>()
                .codigoItem(851730)
                .nomenclaturaVarejo('paracetamol')
                .nomeDetalhado('paracetamol dc 150mg')
                .possuiItemAVencer(false)
                .participaPbm(false)
                .permiteAdesao(false)
                .possuiKitAdesao(false)
                .exclusivoPanvel(false)
                .participaListaReferencial(false)
                .participaFarmaciaPopular(false)
                .build()
        ]
    }

    public static mockItemRequestModelUnico(): ItemRequestModel {
        return Builder<ItemRequestModel>()
            .codigoItem(851730)
            .nomenclaturaVarejo('paracetamol')
            .nomeDetalhado('paracetamol dc 150mg')
            .possuiItemAVencer(false)
            .participaPbm(false)
            .permiteAdesao(false)
            .possuiKitAdesao(false)
            .exclusivoPanvel(false)
            .participaListaReferencial(false)
            .participaFarmaciaPopular(false)
            .build()
    }

    public static mockEstoqueRequestModel(): EstoqueRequestModel[] {
        return [
            Builder<EstoqueRequestModel>()
                .estoqueLoja(2)
                .estoqueApoio(2)
                .reservaVirtual(2)
                .estoqueCd(2)
                .estoqueCdApoio(2)
                .filial(101)
                .codigoItem(851730)
                .build()
        ]
    }

    public static mockItemDetalheCompletoModel(): ItemDetalheCompletoModel {
        return Builder<ItemDetalheCompletoModel>()
            .codigo(851730)
            .codigoFabricante(1000)
            .ean(1000)
            .precoDe(10.00)
            .precoPor(10.00)
            .principioAtivo('fenol')
            .origemDesconto('promocao')
            .quantidade(10)
            .codigoPrincipioAtivo(10)
            .classeTerapeutica('TS')
            .nomenclatura('paracetamol dc')
            .nomenclaturaDetalhada('paracetamos dc 150mg')
            .situacaoItem('ok')
            .advertencias(['cuidado risco de morte'])
            .categorias([ItemModelBuilderStub.categoria()])
            .build()
    }

    public static mockPrecoRequestModel(): PrecoRequestModel {
        return Builder<PrecoRequestModel>()
            .codigoItem(851730)
            .preco(ItemModelBuilderStub.preco())
            .build()
    }

    public static preco(): Preco {
        return Builder<Preco>()
            .precoVenda(10.00)
            .precoPor(10.00)
            .precoFidelidade(10.00)
            .precoFidelidade55Mais(10.00)
            .build()
    }

    public static categoria(): Categoria {
        return Builder<Categoria>()
            .id(10)
            .descricao('remedios')
            .nivel(10)
            .build()
    }
}