import { ItemResponseModel } from '../../../tela-inicial/model/item-response.model';
import { Builder } from 'builder-pattern';
import { ItemModelBuilderStub } from '../../../tela-inicial/build/test/item-model.builder.stub';
import { Categoria } from '../../../tela-inicial/model/categoria';

export class ListaComponentStub {

    public open() {   }

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

    public static categoria(): Categoria {
        return Builder<Categoria>()
            .id(10)
            .descricao('remedios')
            .nivel(10)
            .build()
    }
}