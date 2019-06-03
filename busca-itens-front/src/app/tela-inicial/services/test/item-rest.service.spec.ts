
import { ItemRestService } from "../item-rest.service";
import { async } from "q";
import { TestBed } from "@angular/core/testing";
import { ItemRestServiceStub as stub } from './item-rest.service.stub';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('', () => {
    let restService: ItemRestService;
    let http: HttpClient;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ItemRestService,
                HttpClient,
                HttpHandler,
            ]
        })
        restService = testBed.get(ItemRestService);
        http = testBed.get(HttpClient);
    });

    describe('Dado que [getListaItens] seja chamado >>>>', () => {
        beforeEach(() => {
            spyOn(http, 'get')
            restService.getListaItens('');
        });
        it('Retorna um lista de itens do tipo ItemRequestModel ', () => {
            expect(http.get).toHaveBeenCalled();
        });
    });

    describe('Dado que [getEstoqueItemNaLoja] seja chamado >>>>', () => {
        beforeEach(() => {
            spyOn(http, 'get')
            restService.getEstoqueItemNaLoja(81170);
        });
        it('método get deve ser chamado ', () => {
            expect(http.get).toHaveBeenCalled();
        });
    });

    describe('Dado que [getPrecos] seja chamado >>>>', () => {
        beforeEach(() => {
            spyOn(http, 'get')
            restService.getPrecos(81170);
        });
        it('método get deve ser chamado ', () => {
            expect(http.get).toHaveBeenCalled();
        });
    });

    describe('Dado que [buscaDetalhe] seja chamado >>>>', () => {
        beforeEach(() => {
            spyOn(http, 'post')
            restService.buscaDetalhe(81170);
        });
        it('método post deve ser chamado ', () => {
            expect(http.post).toHaveBeenCalled();
        });
    });


});