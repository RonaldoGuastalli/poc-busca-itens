import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalheComponent } from '../modal-detalhe.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalheComponentStub as stub } from './modal-detalhe.component.stub';
import { ItemModelBuilder } from '../../../tela-inicial/build/item-model.builder';
import { ItemService } from '../../../tela-inicial/services/item.service';
import { ItemRestService } from '../../../tela-inicial/services/item-rest.service';
import { ItemResponseModel } from '../../../tela-inicial/model/item-response.model';
import { ItemRequestModel } from '../../../tela-inicial/model/item-request.model';
import { EstoqueRequestModel } from '../../../tela-inicial/model/estoque-request.model';
import { PrecoRequestModel } from '../../../tela-inicial/model/preco-request.model';
import { ItemDetalheCompletoModel } from '../../../tela-inicial/model/item-detalhe-completo.model';
import { InputItemComponent } from '../../input-item/input-item.component';

describe('ModalDetalheComponent', () => {
  let component: ModalDetalheComponent;
  let fixture: ComponentFixture<ModalDetalheComponent>;
  let service: ItemService;
  let serviceRest: ItemRestService;
  let itemModelBuilder: ItemModelBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDetalheComponent],
      providers: [
        { provide: NgbActiveModal },
        { provide: ItemService, useClass: stub },
        { provide: ItemRestService, useClass: stub },
        { provide: ItemModelBuilder, useClass: stub },
        { provide: ItemResponseModel, useClass: stub },
        { provide: ItemRequestModel, useClass: stub },
        { provide: EstoqueRequestModel, useClass: stub },
        { provide: PrecoRequestModel, useClass: stub },
        { provide: ItemDetalheCompletoModel, useClass: stub },

      ]
    })
      .compileComponents()
      .then(() => {
        component = TestBed.get(NgbActiveModal);
        fixture = TestBed.createComponent(ModalDetalheComponent);
        component = fixture.componentInstance;
        service = TestBed.get(ItemService);
        serviceRest = TestBed.get(ItemRestService);
        itemModelBuilder = TestBed.get(ItemModelBuilder); 
        //component.detalheItem = stub.mockItemResponseModel();       
        // fixture.detectChanges();
      });
  }));

  it('Componente [ModalDetalheComponent] deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
