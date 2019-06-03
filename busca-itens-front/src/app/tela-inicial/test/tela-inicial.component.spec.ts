import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialComponent } from '../tela-inicial.component';
import { ItemService } from '../services/item.service';
import { TelaInicialComponentStub as stub } from './tela-inicial.component.stub';
import { AppModule } from '../../app.module';

describe('TelaInicialComponent', () => {
  let component: TelaInicialComponent;
  let fixture: ComponentFixture<TelaInicialComponent>;
  let service: ItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        {provide: ItemService, useClass: stub}
      ]
    })
    .compileComponents()
    .then(() => {
      service = TestBed.get(ItemService);
      fixture = TestBed.createComponent(TelaInicialComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('Caso uso da componente [TelaInicialComponent] seja utilizada',() => {
    it('uma instancia do componente deve ser criada', () => {
      expect(component).toBeDefined();
    });
  })

  describe('Ao se pesquisado um item na tela principal...', () => {
    describe('', () => {
      beforeEach(() => {
        spyOn(service, 'getItensDaApi');
        spyOn(service, 'getListaItens');
        spyOn(component, 'listarItens')
        component.chegadaTexto('para');
        component.listaDeItens = stub.mockItemResponseModelArray();
      });   

      it('o metodo [chegaTexto] deve ser chamado.', () => {
        expect(component.listarItens).toHaveBeenCalled();
      });
    });
  });
  
  describe('Ao ser pesquisado um item na tela principal', () => {
    beforeEach(() => {
      spyOn(service, 'getListaItens').and.returnValue( new Array<any>());
      component.listarItens();
    }); 
    it('o metodo [listarItens] deve ser chamado salvando a lista de itens na variável para uso na modal.', () => {
      expect(component.listaDeItens).toEqual( new Array<any>() );
    });
  });
  
});
