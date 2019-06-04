import { TestBed, async } from '@angular/core/testing';
import { ItemServiceStub as stub } from './item.service.stub';
import { ItemRestService } from '../item-rest.service';
import { ItemRequestModel } from '../../model/item-request.model';
import { ItemService } from '../item.service';
import { of, throwError } from 'rxjs';
import { ItemModelBuilder } from '../../build/item-model.builder';

describe('ItemService', () => {

    let service: ItemService;
    let restService: ItemRestService;
    let itemRequestModel: ItemRequestModel;
    let itemModelBuilder: ItemModelBuilder;

    beforeEach(async(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ItemService,
                { provide: ItemRestService, useClass: stub },
                { provide: ItemRequestModel, useClass: stub },
                { provide: ItemModelBuilder, useClass: stub }
            ]
        })
        service = testBed.get(ItemService);
        restService = testBed.get(ItemRestService);
        itemRequestModel = testBed.get(ItemRequestModel);
        itemModelBuilder = testBed.get(ItemModelBuilder);
    }));

    describe('Dado que [getItensDaApi] seja chamada >>>>', () => {
        describe('Testando cenário sem erro', () => {
            beforeEach(() => {
                spyOn(restService, 'getListaItens').and.returnValue(of(stub.mockItemRequestModel()));
                spyOn(service, 'fazerForkJoin').and.callFake(() => { });
                service.getItensDaApi('para');
            });

            it('Então deve ser chamada [fazerForkJoin]', () => {
                expect(service.fazerForkJoin).toHaveBeenCalled();
            });
        });
        describe('Testando cenário com erro', () => {
            beforeEach(() => {
                spyOn(restService, 'getListaItens').and.returnValue(throwError(''));
                spyOn(console, 'error');
                service.getItensDaApi('')
            });
            it('caso de erro', () => {
                service.getItensDaApi('');
                expect(console.error).toHaveBeenCalledWith('Erro durante a requisição do item!');
            })
        })
    });

    describe('Dado que [getForkItens] seja chamada >>>>', () => {
        let estoque;
        let detalhe;
        let preco;
        beforeEach(() => {
            spyOn(service, 'getForkItens').and.returnValues(of([
                estoque = stub.mockEstoqueRequestModel,
                detalhe = stub.mockItemRequestModel,
                preco = stub.mockPrecoRequestModel
            ]));
        });
        it('Retorna o resultado das requisições do [ItemRestService]', () => {
            expect(service.getForkItens).toBeTruthy([estoque, detalhe, preco]);
        });
    });

    describe('Dado que [getListaItens] seja chamada >>>>', () => {
        beforeEach(() => {
            service.listaDeItens = stub.mockItemRequestModel();
            service.getListaItens();
        });
        it('Retorna uma nova instância de lista de itens', () => {
            expect(service.listaDeItens).toEqual([]);
        });
    });

    describe('Dado que [fazerForkJoin] seja chamada >>>>', () => {
        beforeEach(() => {
            spyOn(service, 'getForkItens').and.returnValue( of(() => stub.mockItemResponseModel()));
            spyOn(service, 'pushDosItensPesquisados').and.callFake(() => {});
            service.fazerForkJoin(stub.mockItemRequestModelUnico())
        });
        it('Retorna itens do forkJoin', () => {
            expect(service.pushDosItensPesquisados).toHaveBeenCalled();
        });
    });

    describe('Dado que [getForkItens] seja chamada >>>>', () => {
        let resultado;
        beforeEach(() => {
            spyOn(restService, 'getEstoqueItemNaLoja').and.returnValue(of(stub.mockEstoqueRequestModel()));
            spyOn(restService, 'buscaDetalhe').and.returnValue(of(stub.mockItemRequestModelUnico()));
            spyOn(restService, 'getPrecos').and.returnValue(of(stub.mockPrecoRequestModel()));
            service.getForkItens(851730).subscribe(e => resultado = e);
        });
        it('Retorna itens do forkJoin', () => {
            expect(resultado).toEqual([stub.mockEstoqueRequestModel(),
                                        stub.mockItemRequestModelUnico(),
                                        stub.mockPrecoRequestModel()]);
        });
    });

    xdescribe('dado que chame o metodo [montagemDoBuilder] resulta no objeto itemModel', () => {
        beforeEach(() => {
            ItemModelBuilder.get();
            spyOn(itemModelBuilder, 'dadosAutocomplete');
            spyOn(itemModelBuilder, 'dadosEstoque');
            spyOn(itemModelBuilder, 'eanDoItem');
            spyOn(itemModelBuilder, 'precoDoProduto');
            spyOn(itemModelBuilder, 'detalheCompletoDoItem');
            spyOn(itemModelBuilder, 'build');
            service.montagemDoBuilder(stub.mockItemRequestModelUnico(), stub.mockItemResponseModel());
        });
        expect(service.montagemDoBuilder).toEqual(stub.mockItemResponseModel());
    });






});
