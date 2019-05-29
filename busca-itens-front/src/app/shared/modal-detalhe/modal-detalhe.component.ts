import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModelBuilder } from 'src/app/tela-inicial/build/item-model.builder';

@Component({
  selector: 'app-modal-detalhe',
  templateUrl: './modal-detalhe.component.html',
  styleUrls: ['./modal-detalhe.component.css']
  
})
export class ModalDetalheComponent implements OnInit {

  @Input() detalheItem: ItemModelBuilder;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
