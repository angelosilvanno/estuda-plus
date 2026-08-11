import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlocoEstudo {
  id: number;
  disciplina: string;
  assunto: string;
  dia: string;       // 'Segunda', 'Terça', 'Quarta', etc.
  horario: string;   // 'Manhã', 'Tarde', 'Noite'
  status: 'concluido' | 'progresso' | 'pendente';
  prioridade: 'alta' | 'media' | 'baixa';
  corClasse: string; // Cores do Tailwind v4
}

interface BlocoPendente {
  id: number;
  disciplina: string;
  assunto: string;
  prioridade: 'alta' | 'media' | 'baixa';
  corClasse: string;
}

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cronograma.html',
  styleUrl: './cronograma.css'
})
export class Cronograma {
  // Controle de Abas
  visaoAtiva: 'semana' | 'mes' = 'semana';

  diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  turnos = ['Manhã (08h - 12h)', 'Tarde (14h - 18h)', 'Noite (19h - 22h)'];

  // Base de dados das sessões de estudo já agendadas
  blocosAgendados: BlocoEstudo[] = [
    { id: 1, disciplina: 'Cálculo II', assunto: 'Derivadas Parciais', dia: 'Segunda', horario: 'Manhã (08h - 12h)', status: 'concluido', prioridade: 'alta', corClasse: 'border-blue-500 bg-blue-50/50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-300' },
    { id: 2, disciplina: 'Algoritmos', assunto: 'Árvores de Busca', dia: 'Terça', horario: 'Manhã (08h - 12h)', status: 'progresso', prioridade: 'alta', corClasse: 'border-emerald-500 bg-emerald-50/50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300' },
    { id: 3, disciplina: 'Física I', assunto: 'Mecânica Vetorial', dia: 'Quarta', horario: 'Tarde (14h - 18h)', status: 'pendente', prioridade: 'media', corClasse: 'border-purple-500 bg-purple-50/50 text-purple-700 dark:bg-purple-950/20 dark:text-purple-300' },
    { id: 4, disciplina: 'Algoritmos', assunto: 'Grafos Avançados', dia: 'Quinta', horario: 'Manhã (08h - 12h)', status: 'pendente', prioridade: 'alta', corClasse: 'border-emerald-500 bg-emerald-50/50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300' },
    { id: 5, disciplina: 'Cálculo II', assunto: 'Exercícios de Integrais', dia: 'Sexta', horario: 'Tarde (14h - 18h)', status: 'concluido', prioridade: 'alta', corClasse: 'border-blue-500 bg-blue-50/50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-300' }
  ];

  // Backlog de blocos que aguardam agendamento pelo usuário
  blocosPendentes: BlocoPendente[] = [
    { id: 101, disciplina: 'Física I', assunto: 'Termodinâmica Básica', prioridade: 'alta', corClasse: 'border-purple-500 bg-purple-50/50 text-purple-700 dark:bg-purple-950/20 dark:text-purple-300' },
    { id: 102, disciplina: 'Química I', assunto: 'Equilíbrio Químico', prioridade: 'media', corClasse: 'border-amber-500 bg-amber-50/50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-300' },
    { id: 103, disciplina: 'Álgebra Linear', assunto: 'Vetores e Matrizes', prioridade: 'baixa', corClasse: 'border-sky-500 bg-sky-50/50 text-sky-700 dark:bg-sky-950/20 dark:text-sky-300' }
  ];

  // Retorna o bloco agendado para o dia e turno correspondentes na tabela
  getBloco(dia: string, turno: string): BlocoEstudo | undefined {
    return this.blocosAgendados.find(b => b.dia === dia && b.horario === turno);
  }

  // Simulação Interativa: Agenda o primeiro bloco da fila de pendentes em um horário clicado vago
  agendarNoHorario(dia: string, turno: string): void {
    if (this.blocosPendentes.length === 0) {
      alert('Nenhum bloco de estudos pendente para agendar no momento.');
      return;
    }

    // Pega o primeiro bloco pendente
    const blocoParaAgendar = this.blocosPendentes.shift()!;

    // Adiciona na lista de agendados
    this.blocosAgendados.push({
      id: blocoParaAgendar.id,
      disciplina: blocoParaAgendar.disciplina,
      assunto: blocoParaAgendar.assunto,
      dia: dia,
      horario: turno,
      status: 'pendente',
      prioridade: blocoParaAgendar.prioridade,
      corClasse: blocoParaAgendar.corClasse
    });
  }

  // Alterna o status do bloco de estudos ao clicar nele
  alternarStatus(bloco: BlocoEstudo): void {
    if (bloco.status === 'pendente') {
      bloco.status = 'progresso';
    } else if (bloco.status === 'progresso') {
      bloco.status = 'concluido';
    } else {
      bloco.status = 'pendente';
    }
  }
}