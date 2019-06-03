import { Builder } from "builder-pattern";
import { ItemResponseModel } from '../model/item-response.model';
import { ItemModelBuilder } from '../build/item-model.builder';
import { ItemModelBuilderStub } from '../build/test/item-model.builder.stub';

export class TelaInicialComponentStub {

    public getItensDaApi() {}

    public getListaItens() {}

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

}