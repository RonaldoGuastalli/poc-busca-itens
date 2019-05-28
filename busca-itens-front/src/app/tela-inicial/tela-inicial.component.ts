import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { ItemResponseModel } from './model/item-response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Builder } from 'builder-pattern';
import { forEach } from '@angular/router/src/utils/collection';
import { ItemRequestMapper } from './mapper/Item-request.mapper';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  providers: [ItemService]
})
export class TelaInicialComponent implements OnInit {
  private itens: Observable<ItemResponseModel[]>;
  private estoqueLoja: Observable<ItemResponseModel[]>;

  private itensNovo: Observable<ItemResponseModel[]>;

  private objetoFinal: Observable<any>;


  constructor(private service: ItemService) { }
  ngOnInit() {

    this.itens = this.service.getItens()
      .pipe(
        map(i => i)
      );

    this.estoqueLoja = this.service.getEstoque()
      .pipe(
        map(estoque => estoque)
      )

    // let ola = this.service.getForkItens('para')
    //   .pipe(
    //     map(e => {
    //       console.log('>>> forJoin result', e);
    //       console.log('>>>> itens', e[0]);
    //       console.log('>>>> estoque', e[1]);
    //       console.log('>>>> detalhes', e[2]);
    //     })).subscribe();

    console.log('>>> jusfaguisfagh',this.service.getItensDaApi());
        
    //console.log('>>> resultado', ItemRequestMapper.getItensTelaInicial(this.service));

  }

}
