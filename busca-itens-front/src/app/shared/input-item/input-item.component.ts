import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent{

  public pesquisa: string;

  @Output() emitirEvento = new EventEmitter();

  public eventoPesquisa(pesquisa: string){
    this.emitirEvento.emit(pesquisa);    
  }

}
