import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ListaComponent } from '../lista.component';
import { ItemResponseModel } from '../../../tela-inicial/model/item-response.model';
import { ModalDetalheComponent } from '../../modal-detalhe/modal-detalhe.component';
import { ListaComponentStub as stub } from './lista.component.stub';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let fixtureDetalheComponet: ComponentFixture<ModalDetalheComponent>;
  let modalDetalheComponent: ModalDetalheComponent;
  let itemResponseModel: ItemResponseModel;
  let modalService: NgbModal;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent, ModalDetalheComponent ],
      imports:[ ],
      providers: [
        {provide: NgbModal, useClass: stub},
        {provide: ItemResponseModel, useClass: stub},
        {provide: NgbActiveModal, useClass: stub}
      ]
    })
    .compileComponents()
    .then(() => {
      fixtureDetalheComponet = TestBed.createComponent(ModalDetalheComponent);
      fixture = TestBed.createComponent(ListaComponent);
      modalDetalheComponent = fixtureDetalheComponet.componentInstance;
      component = fixture.componentInstance;
      itemResponseModel = TestBed.get(ItemResponseModel);
      modalService = TestBed.get(NgbModal);
      ngbActiveModal = TestBed.get(NgbActiveModal);
      fixture.detectChanges();
    });
  }));

  describe('Ao ser chamado o [ListaComponent] deve', () => {
    it('O componente deve ser criado', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Ao abrir clicar em um item na lista inicial...', () => {
    beforeEach(() => {
      spyOn(modalService, 'open').and.callFake(() => fixtureDetalheComponet);
      component.openModal(stub.mockItemResponseModel());
    })
    it('O método [open] deve abriar a modal com detalhes do item', () => {
      expect(modalService.open).toHaveBeenCalled();
    });
    
  });

});
