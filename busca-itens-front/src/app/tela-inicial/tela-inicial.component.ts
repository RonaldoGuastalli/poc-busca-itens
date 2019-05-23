import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent implements OnInit {


  constructor(private service: ItemService) { }


  ngOnInit() {
    // this.service.getItens('parace').subscribe(e => {
    //   this.itens = e;
    //   console.table(this.itens.map(item => item));      
    // });

    this.service.getItens();
  }

}
