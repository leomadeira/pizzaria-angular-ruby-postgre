import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardapioComponent,
    FuncionariosComponent,
    ContatoComponent,
    HistoriaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
