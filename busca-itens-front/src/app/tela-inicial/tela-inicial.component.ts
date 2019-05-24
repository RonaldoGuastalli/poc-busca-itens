import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { ItemResponseModel } from './model/item-response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent implements OnInit {
  private itens: Observable<ItemResponseModel[]>;
  
  constructor(private service: ItemService) { }
  ngOnInit() {
    this.itens = this.service.getItens()
    .pipe(
      map(i => i)
      );  
  }

}
