import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SimonComponent } from './components/simon/simon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    SimonComponent,
    InicioComponent,
    InstruccionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
