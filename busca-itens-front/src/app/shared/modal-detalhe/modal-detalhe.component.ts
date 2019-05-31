import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModelBuilder } from 'src/app/tela-inicial/build/item-model.builder';
import { ItemResponseModel } from 'src/app/tela-inicial/model/item-response.model';

@Component({
  selector: 'app-modal-detalhe',
  templateUrl: './modal-detalhe.component.html',
  styleUrls: ['./modal-detalhe.component.css']
  
})
export class ModalDetalheComponent {

  @Input() detalheItem: ItemResponseModel;

  constructor(public activeModal: NgbActiveModal) { }

}
