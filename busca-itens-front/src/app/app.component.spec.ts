import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ListaComponent } from './shared/lista/lista.component';
import { InputItemComponent } from './shared/input-item/input-item.component';
import { ModalDetalheComponent } from './shared/modal-detalhe/modal-detalhe.component';
import { NavbarAppComponent } from './shared/navbar-app/navbar-app.component';
import { ItemService } from './tela-inicial/services/item.service';
import { ItemRestService } from './tela-inicial/services/item-rest.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule        
      ],
      declarations: [
        AppComponent,
        TelaInicialComponent,
        ListaComponent,
        InputItemComponent,
        ModalDetalheComponent,
        NavbarAppComponent
      ],
      providers: [
        {provide: ItemService},
        {provide: HttpClient},
        {provide: ItemRestService}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'busca-itens-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('busca-itens-front');
  });
});
