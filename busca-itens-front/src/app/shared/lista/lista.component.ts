import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalheComponent } from '../modal-detalhe/modal-detalhe.component';
import { ItemResponseModel } from '../../tela-inicial/model/item-response.model';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {

  @Input() private resultadoDaPesquisa: Array<any>;

  constructor(private modalService: NgbModal) { }

  public openModal(item: ItemResponseModel) {
    let modal = this.modalService.open(ModalDetalheComponent, { size: 'lg' });
    modal.componentInstance.detalheItem = item;
  }

}
