import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.css'
})
export class Pomodoro implements OnDestroy {
  tempoFoco = 25 * 60;
  tempoDescanso = 5 * 60;
  tempoRestante = this.tempoFoco;
  
  isRodando = false;
  ciclos = 0;
  modo: 'foco' | 'descanso' = 'foco';
  
  private intervaloId: any = null;

  ngOnDestroy(): void {
    this.limparIntervalo();
  }

  iniciar(): void {
    if (this.isRodando) return;
    
    this.isRodando = true;
    this.intervaloId = setInterval(() => {
      if (this.tempoRestante > 0) {
        this.tempoRestante--;
      } else {
        this.alternarModo();
      }
    }, 1000);
  }

  pausar(): void {
    this.isRodando = false;
    this.limparIntervalo();
  }

  reiniciar(): void {
    this.pausar();
    this.tempoRestante = this.modo === 'foco' ? this.tempoFoco : this.tempoDescanso;
  }

  setModo(novoModo: 'foco' | 'descanso'): void {
    this.pausar();
    this.modo = novoModo;
    this.tempoRestante = novoModo === 'foco' ? this.tempoFoco : this.tempoDescanso;
  }

  get formatarTempo(): string {
    const minutos = Math.floor(this.tempoRestante / 60);
    const segundos = this.tempoRestante % 60;
    const minStr = minutos < 10 ? `0${minutos}` : `${minutos}`;
    const segStr = segundos < 10 ? `0${segundos}` : `${segundos}`;
    return `${minStr}:${segStr}`;
  }

  get progressoPercentual(): number {
    const total = this.modo === 'foco' ? this.tempoFoco : this.tempoDescanso;
    return ((total - this.tempoRestante) / total) * 100;
  }

  get dashOffset(): number {
    const circunferencia = 2 * Math.PI * 45;
    return circunferencia - (this.progressoPercentual / 100) * circunferencia;
  }

  private alternarModo(): void {
    this.pausar();
    if (this.modo === 'foco') {
      this.modo = 'descanso';
      this.ciclos++;
      this.tempoRestante = this.tempoDescanso;
    } else {
      this.modo = 'foco';
      this.tempoRestante = this.tempoFoco;
    }
  }

  private limparIntervalo(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
      this.intervaloId = null;
    }
  }
}