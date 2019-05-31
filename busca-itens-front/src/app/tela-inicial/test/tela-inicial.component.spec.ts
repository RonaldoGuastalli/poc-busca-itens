import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialComponent } from '../tela-inicial.component';
import { ItemService } from '../services/item.service';
import { TelaInicialComponentStub as stub } from './tela-inicial.component.stub';
import { AppModule } from 'src/app/app.module';

describe('TelaInicialComponent', () => {
  let component: TelaInicialComponent;
  let fixture: ComponentFixture<TelaInicialComponent>;
  let service: ItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ TelaInicialComponent ],
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

  describe('',() => {

    
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

});
