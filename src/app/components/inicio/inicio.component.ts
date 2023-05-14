import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  @Output() inicio: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() jugar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() instrucciones: EventEmitter<boolean> = new EventEmitter<boolean>();

  iniciarJuego(){
    this.inicio.emit(false);
    this.jugar.emit(true);
  }

  iniciarInstrucciones(){
    this.inicio.emit(false);
    this.instrucciones.emit(true);
  }

  volver(){
    window.history.back();
  }
}
