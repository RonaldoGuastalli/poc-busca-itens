import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ListaComponent } from './shared/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from './util/token/token.module';
import { ItemRestService } from './tela-inicial/services/item-rest.service';
import { ItemRequestMapper } from './tela-inicial/mapper/Item-request.mapper';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TokenModule
  ],
  providers: [ItemRestService, ItemRequestMapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
