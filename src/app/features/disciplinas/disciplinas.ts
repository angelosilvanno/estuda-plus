import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Disciplina {
  id: number;
  nome: string;
  professor: string;
  categoria: string;
  cargaHorariaEstudada: number;
  cargaHorariaTotal: number;
  aproveitamento: number;
  progresso: number;
  icone: string;
  corPrimaria: string;
  corFundo: string;
  corTexto: string;
  corBorda: string;
}

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './disciplinas.html',
  styleUrl: './disciplinas.css'
})
export class Disciplinas {
  disciplinas: Disciplina[] = [
    {
      id: 1,
      nome: 'Cálculo Diferencial II',
      professor: 'Dr. Augusto Nunes',
      categoria: 'Exatas',
      cargaHorariaEstudada: 42,
      cargaHorariaTotal: 60,
      aproveitamento: 88,
      progresso: 70,
      icone: '∫',
      corPrimaria: 'bg-blue-500',
      corFundo: 'bg-blue-50/50 dark:bg-blue-950/20',
      corTexto: 'text-blue-600 dark:text-blue-400',
      corBorda: 'border-blue-100 dark:border-blue-950'
    },
    {
      id: 2,
      nome: 'Algoritmos & Estruturas',
      professor: 'Dra. Clara Silveira',
      categoria: 'Tecnologia',
      cargaHorariaEstudada: 18,
      cargaHorariaTotal: 45,
      aproveitamento: 72,
      progresso: 40,
      icone: '</>',
      corPrimaria: 'bg-emerald-500',
      corFundo: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      corTexto: 'text-emerald-600 dark:text-emerald-400',
      corBorda: 'border-emerald-100 dark:border-emerald-950'
    },
    {
      id: 3,
      nome: 'Química Inorgânica',
      professor: 'Msc. Flávio Ramos',
      categoria: 'Ciências',
      cargaHorariaEstudada: 12,
      cargaHorariaTotal: 40,
      aproveitamento: 90,
      progresso: 30,
      icone: 'H₂O',
      corPrimaria: 'bg-purple-500',
      corFundo: 'bg-purple-50/50 dark:bg-purple-950/20',
      corTexto: 'text-purple-600 dark:text-purple-400',
      corBorda: 'border-purple-100 dark:border-purple-950'
    }
  ];

  filtroAtivo = 'todas';

  get disciplinasFiltradas(): Disciplina[] {
    if (this.filtroAtivo === 'todas') {
      return this.disciplinas;
    }
    return this.disciplinas.filter(d => d.categoria.toLowerCase() === this.filtroAtivo.toLowerCase());
  }
}