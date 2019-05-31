import { TestBed, async } from "@angular/core/testing";
import { HttpClient } from 'selenium-webdriver/http';
import { ItemServiceStub as stub } from './item.service.stub'
import { ItemRestService } from '../item-rest.service';
import { ItemRequestModel } from '../../model/item-request.model';
import { ItemService } from '../item.service';
import { Observable, of } from 'rxjs';
import { ItemModelBuilder } from '../../build/item-model.builder';

fdescribe('ItemService', () => {

    let service: ItemService;
    let restService: ItemRestService;
    let itemRequestModel: ItemRequestModel;
    let itemModelBuilder: ItemModelBuilder;
    let httpClient: HttpClient;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ItemService,
                { provide: HttpClient },
                { provide: ItemService, useClass: stub },
                { provide: ItemRestService, useClass: stub },
                { provide: ItemRequestModel, useClass: stub },
                { provide: ItemModelBuilder, useClass: stub }
            ]
        })
        service = testBed.get(ItemService);
        httpClient = testBed.get(HttpClient);
        restService = testBed.get(ItemRestService);
        itemRequestModel = testBed.get(ItemRequestModel);
        itemModelBuilder = testBed.get(ItemModelBuilder);
    });

    describe('Dado que [getItensDaApi] seja chamada >>>>', () => {
        beforeEach(() => {
            spyOn(restService, 'getListaItens').and.returnValue(of(stub.mockItemRequestModel()));
            spyOn(service, 'fazerForkJoin').and.callFake(() => {});
            service.getItensDaApi('para');
        })

        it('espera os objetos da pesquisa', () => {
            expect(service.fazerForkJoin).toHaveBeenCalled();
        });

    });







});