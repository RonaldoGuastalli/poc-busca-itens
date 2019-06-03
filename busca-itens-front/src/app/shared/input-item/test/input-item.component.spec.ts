import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemComponent } from '../input-item.component';

describe('InputItemComponent', () => {
  let component: InputItemComponent;
  let fixture: ComponentFixture<InputItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputItemComponent ],
      imports: [ ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(InputItemComponent);
      component = fixture.componentInstance;
      //component.pesquisa = 'tors';
      fixture.detectChanges();
    });
  }));

  it('Deve criar component', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado que o metodo [eventoPesquisa] seja chamado... ', () => {
    beforeEach(() => {
      spyOn(component.emitirEvento, 'emit');
      component.eventoPesquisa('para');
    });

    it('Deve emitir descrição', () => {
      expect(component.emitirEvento.emit).toHaveBeenCalledWith('para');
    });
  });

});
