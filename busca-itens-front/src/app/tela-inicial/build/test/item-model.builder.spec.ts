import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { ItemResponseModel } from '../../model/item-response.model';
import { ItemModelBuilder } from '../item-model.builder';
import { ItemRequestModel } from '../../model/item-request.model';
import { EstoqueRequestModel } from '../../model/estoque-request.model';
import { PrecoRequestModel } from '../../model/preco-request.model';
import { ItemDetalheCompletoModel } from '../../model/item-detalhe-completo.model';
import { ItemModelBuilderStub as stub} from './item-model.builder.stub';
import { Observable } from 'rxjs';

describe('ItemModelBuilder', () => {
    let modelBuilder: ItemModelBuilder; 
    let fixture: ComponentFixture<ItemModelBuilder>
    let itemResponseModel: ItemResponseModel;
    let itemRequestModel: ItemRequestModel;
    let estoqueRequestModel: EstoqueRequestModel;
    let precoRequestModel: PrecoRequestModel;
    let itemDetalheCompletoModel: ItemDetalheCompletoModel;

    describe('', () => {
        let obj: ItemResponseModel;    
        beforeEach(() => {
            obj = ItemModelBuilder.get()
            .dadosAutocomplete(stub.mockItemRequestModel())
            .dadosEstoque(stub.mockEstoqueRequestModel())
            .detalheCompletoDoItem(stub.mockItemDetalheCompletoModel())
            .eanDoItem(stub.mockItemDetalheCompletoModel())
            .precoDoProduto(stub.mockPrecoRequestModel())
            .detalheCompletoDoItem(stub.mockItemDetalheCompletoModel())
            .build();
        })
    
        it('Deve setar os dados de acordo com o autocomplete', () => {                
            expect(obj).toBeTruthy(stub.mockItemResponseModel());            
        })
        
        it('Não é o mesmo objeto', () => {
            expect(obj instanceof ItemResponseModel).toBe(true, 'instancia de ItemResponseModel')
        });
    });

});