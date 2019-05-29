import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalheComponent } from './modal-detalhe.component';

describe('ModalDetalheComponent', () => {
  let component: ModalDetalheComponent;
  let fixture: ComponentFixture<ModalDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
