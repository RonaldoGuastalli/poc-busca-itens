import { TestBed, async } from "@angular/core/testing";
import { HttpClient } from 'selenium-webdriver/http';
import { ItemServiceStub as stub } from './item.service.stub'
import { ItemRestService } from '../item-rest.service';
import { ItemRequestModel } from '../../model/item-request.model';
import { ItemService } from '../item.service';
import { Observable, of, forkJoin } from 'rxjs';
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
        xdescribe('Testando cenário com erro', () => {
            beforeEach(() => {
                spyOn(restService, 'getListaItens').and.returnValue(of());
                service.getItensDaApi('')
            });

            it('caso de erro', () => {
                service.getItensDaApi('');
                expect(service.fazerForkJoin)
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

    xdescribe('Dado que [fazerForkJoin] seja chamada >>>>', () => {
        beforeEach(() => {
            service.fazerForkJoin(stub.mockItemRequestModelUnico())
            service.getForkItens(851730).subscribe(e => {
                service.pushDosItensPesquisados(stub.mockItemRequestModelUnico(), e)
                service.montagemDoBuilder(stub.mockItemRequestModelUnico(), e)
            })
        });
        it('Retorna itens do forkJoin', () => {
            expect(service.fazerForkJoin).toBeTruthy(stub.mockItemResponseModel());
        });
    });







});