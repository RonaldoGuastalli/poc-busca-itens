import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalheComponent } from '../modal-detalhe/modal-detalhe.component';
import { ItemModelBuilder } from 'src/app/tela-inicial/build/item-model.builder';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  @Input() private resultadoDaPesquisa: Array<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  public openModal(item: ItemModelBuilder) {
    console.log(item);
    let modal = this.modalService.open(ModalDetalheComponent, { size: 'lg' });
    modal.componentInstance.detalheItem = item;
  }

}
