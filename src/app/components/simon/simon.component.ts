import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
})
export class SimonComponent {
  /* variables de acción */
  play: boolean = false;
  machine: boolean = true;
  user: boolean = false;

  code: string[] = [];
  codeUser: string[] = [];

  /* Scoring */
  scoring: number = 0;
  @Output() score: EventEmitter<number> = new EventEmitter();
  @Output() bestScore: EventEmitter<number> = new EventEmitter();

  startGame() {
    if (!this.play) {
      this.start();
    } else {
      this.stop();
    }
  }

  start() {
    this.play = true;
    this.codeUser = [];
    this.generarSecuencia();
    this.mostrarSecuencia();
  }

  stop() {
    this.play = false;
    this.machine = true;
    this.user = false;
    this.code = [];
    this.codeUser = [];
  }

  generarSecuencia() {
    let code = ['red', 'blue', 'green', 'yellow'];
    let random = Math.floor(Math.random() * code.length);
    this.code.push(code[random]);
  }

  mostrarSecuencia() {
    const btns = document.querySelectorAll('button.btns');
    if (this.machine) {
      let tiempoEspera = 1000;
      for (let c of this.code) {
        setTimeout(() => {
          this.actionClickButton(this.botonIndicado(btns, c), c);
        }, tiempoEspera);
        tiempoEspera += 1000;
      }

      this.cambiarTurno();
    }
  }

  botonIndicado(btn: NodeListOf<Element>, id: string) {
    let btnActivo!: HTMLButtonElement;
    btn.forEach((btn) => {
      if (btn.id === id) {
        btnActivo = btn as HTMLButtonElement;
      }
    });

    return btnActivo;
  }

  presionarBtnSimon(event: Event, color: string) {
    if (this.play && this.user) {
      const btn = event.target as HTMLButtonElement;
      this.actionClickButton(btn, color);
      this.agregarColorUsuario(color);
      this.validar();
      this.scoring++;
      if (this.hayQueCambiarTurno()) {
        
        this.cambiarTurno();
        this.score.emit(this.scoring);
      }
    }
  }

  actionClickButton(btn: HTMLButtonElement, color: string) {
    btn.classList.add(color);
    setTimeout(() => {
      btn.classList.remove(color);
    }, 500);
  }

  agregarColorUsuario(color: string) {
    if (this.codeUser.length < this.code.length) {
      this.codeUser.push(color);
    }
  }

  validar() {
    for (let i = 0; i < this.codeUser.length; i++) {
      if (this.code[i] !== this.codeUser[i]) {
        console.log('Perdiste');
        this.bestScore.emit(this.scoring);
        this.stop();
      }
    }
  }

  cambiarTurno() {
    this.machine = !this.machine;
    this.user = !this.user;

    if (this.machine) {
      this.codeUser = [];
      this.generarSecuencia();
      this.mostrarSecuencia();
    }
  }

  hayQueCambiarTurno() {
    return this.codeUser.length === this.code.length;
  }
}
