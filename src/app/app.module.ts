import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColumnaIzquierdaComponent } from './columna-izquierda/columna-izquierda.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EstadoComponent } from './estado/estado.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnaIzquierdaComponent,
    CabeceraComponent,
    EstadoComponent,
    RedeSocialComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
