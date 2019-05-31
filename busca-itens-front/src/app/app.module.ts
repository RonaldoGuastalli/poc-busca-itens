import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ListaComponent } from './shared/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from './util/token/token.module';
import { ItemRestService } from './tela-inicial/services/item-rest.service';
import { InputItemComponent } from './shared/input-item/input-item.component';
import { ModalDetalheComponent } from './shared/modal-detalhe/modal-detalhe.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarAppComponent } from './shared/navbar-app/navbar-app.component';
import { ItemService } from './tela-inicial/services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ListaComponent,
    InputItemComponent,
    ModalDetalheComponent,
    NavbarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TokenModule,
    NgbModule
  ],
  providers: [ItemRestService],
  bootstrap: [AppComponent],
  entryComponents: [ListaComponent, ModalDetalheComponent]
})
export class AppModule { }
