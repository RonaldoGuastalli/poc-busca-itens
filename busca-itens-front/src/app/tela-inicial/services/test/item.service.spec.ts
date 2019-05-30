import { TestBed } from "@angular/core/testing";
import { HttpClient } from 'selenium-webdriver/http';
import { ItemServiceStub as stub } from './item.service.stub'
import { ItemRestService } from '../item-rest.service';
import { ItemRequestModel } from '../../model/item-request.model';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';

fdescribe('ItemService', () => {

    let service: ItemService;
    let restService: ItemRestService;
    let itemRequestModel: ItemRequestModel;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ItemRestService,
                { provide: ItemService, useClass: stub },
                { provide: ItemRestService, useClass: stub },
                { provide: ItemRequestModel, useClass: stub }
            ]
        });
        service = testBed.get(ItemService);
        restService = testBed.get(ItemRestService);
        itemRequestModel = testBed.get(ItemRequestModel);
    });

    describe('dados do autocomplite', () => {
        beforeEach(() => {
            spyOn(service, 'getListaItens').and.callFake(() => stub.getListaItens());
        })
    
        it('dvdvcd', () => {
            expect(restService.getListaItens).toHaveBeenCalledWith(stub.mockItemRequestModel());
        });        
        
    });
    






});