import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simon';

  inicio: boolean = true;
  instrucciones: boolean = false;
  juego: boolean = false;

  score: number = 0;
  bestScore: number = 0;

  iniciarJuego(event: boolean){
    this.juego = event;
  }

  iniciarInstrucciones(event: boolean){
    this.instrucciones = event;
  }

  cerrarInicio(event: boolean){
    this.inicio = event;
  }

  setScore(event: number){
    this.score = event;
  }

  setBestScore(event: number){
    this.bestScore = event;
  }

  back(){
    this.inicio = true;
    this.instrucciones = false;
    this.juego = false;
  }

}
