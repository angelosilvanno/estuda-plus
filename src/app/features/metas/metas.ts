import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MetaEstudo {
  id: number;
  tipo: 'diaria' | 'semanal' | 'mensal';
  descricao: string;
  atual: number;
  meta: number;
  unidade: string;
  porcentagem: number;
  concluida: boolean;
}

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './metas.html',
  styleUrl: './metas.css'
})
export class Metas {
  metas: MetaEstudo[] = [
    { id: 1, tipo: 'diaria', descricao: 'Estudo ativo de Cálculo II', atual: 2, meta: 3, unidade: 'horas', porcentagem: 66, concluida: false },
    { id: 2, tipo: 'diaria', descricao: 'Resolver questões de Física I', atual: 10, meta: 10, unidade: 'questões', porcentagem: 100, concluida: true },
    { id: 3, tipo: 'semanal', descricao: 'Completar ciclos de Pomodoro', atual: 16, meta: 20, unidade: 'ciclos', porcentagem: 80, concluida: false },
    { id: 4, tipo: 'semanal', descricao: 'Leitura de artigos acadêmicos', atual: 2, meta: 4, unidade: 'artigos', porcentagem: 50, concluida: false },
    { id: 5, tipo: 'mensal', descricao: 'Acumular horas totais de estudo', atual: 55, meta: 80, unidade: 'horas', porcentagem: 68, concluida: false },
    { id: 6, tipo: 'mensal', descricao: 'Simulados de revisão geral', atual: 3, meta: 3, unidade: 'simulados', porcentagem: 100, concluida: true }
  ];

  abaAtiva: 'todas' | 'diaria' | 'semanal' | 'mensal' = 'todas';

  get metasFiltradas(): MetaEstudo[] {
    if (this.abaAtiva === 'todas') {
      return this.metas;
    }
    return this.metas.filter(m => m.tipo === this.abaAtiva);
  }

  incrementarProgresso(meta: MetaEstudo): void {
    if (meta.atual < meta.meta) {
      meta.atual++;
      meta.porcentagem = Math.round((meta.atual / meta.meta) * 100);
      if (meta.atual === meta.meta) {
        meta.concluida = true;
      }
    }
  }
}