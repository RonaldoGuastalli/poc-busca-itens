import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {

  public pesquisa: string;

  @Output() emitirEvento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public eventoPesquisa(pesquisa: string){
    this.emitirEvento.emit(pesquisa);    
  }

}
