import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TarefaDia {
  id: number;
  texto: string;
  disciplina: string;
  prioridade: 'alta' | 'media' | 'concluida';
  concluida: boolean;
}

interface ProvaProxima {
  disciplina: string;
  assunto: string;
  tempoRestante: string;
}

interface RevisaoPendente {
  disciplina: string;
  assunto: string;
  status: string;
  corClasse: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  // Informações de perfil fictícias
  estudanteNome = 'Mariana Silva';
  metaSemanalPorcentagem = 85;

  // KPIs
  horasHoje = '2h 45m';
  horasSemana = '17h 30m';
  streakDias = 12;
  proximaProvaData = 'Em 2 dias (Sexta)';

  // RF09 - Lista de Tarefas do Dia (Dados reativos)
  tarefas: TarefaDia[] = [
    { id: 1, texto: 'Revisar derivadas parciais de 2ª ordem', disciplina: 'Cálculo II', prioridade: 'alta', concluida: false },
    { id: 2, texto: 'Ler capítulo 3 sobre Álgebra Linear', disciplina: 'Geometria Analítica', prioridade: 'concluida', concluida: true },
    { id: 3, texto: 'Resolver exercícios de Mecânica Geral', disciplina: 'Física I', prioridade: 'media', concluida: false }
  ];

  // RF04 - Agenda / Próximas Provas
  provas: ProvaProxima[] = [
    { disciplina: 'Cálculo II', assunto: 'Limites e Derivadas', tempoRestante: 'Sexta-feira (Em 2 dias)' },
    { disciplina: 'Física I', assunto: 'Mecânica Vetorial', tempoRestante: 'Próxima Terça (Em 6 dias)' }
  ];

  // RF08 - Revisões Pendentes (Active Recall)
  revisoes: RevisaoPendente[] = [
    { disciplina: 'Geometria Analítica', assunto: 'Espaços Vetoriais', status: 'Urgente', corClasse: 'bg-red-50 text-red-700 border-red-100 dark:bg-red-950/20 dark:text-red-400' },
    { disciplina: 'Algoritmos', assunto: 'Complexidade de Tempo', status: 'Morno', corClasse: 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950/20 dark:text-orange-400' }
  ];

  // RF11 - Distribuição de Horas por Disciplina (Gráfico de Distribuição)
  distribuicaoDisciplinas = [
    { nome: 'Cálculo II', porcentagem: 40, corClasse: 'bg-blue-500' },
    { nome: 'Algoritmos', porcentagem: 30, corClasse: 'bg-emerald-500' },
    { nome: 'Física I', porcentagem: 20, corClasse: 'bg-purple-500' },
    { nome: 'Outros', porcentagem: 10, corClasse: 'bg-slate-400' }
  ];

  // RF11 - Dados do Histórico Semanal de Horas (Segunda a Domingo)
  historicoSemanal = [
    { dia: 'Seg', horas: '3.0h', porcentagemAltura: '45%' },
    { dia: 'Ter', horas: '4.5h', porcentagemAltura: '65%' },
    { dia: 'Qua', horas: '6.0h', porcentagemAltura: '90%' },
    { dia: 'Qui', horas: '5.0h', porcentagemAltura: '75%', hoje: true },
    { dia: 'Sex', horas: '0.0h', porcentagemAltura: '5%' },
    { dia: 'Sáb', horas: '0.0h', porcentagemAltura: '5%' },
    { dia: 'Dom', horas: '0.0h', porcentagemAltura: '5%' }
  ];

  // Método interativo para alternar o estado de uma tarefa
  alternarTarefa(tarefa: TarefaDia): void {
    tarefa.concluida = !tarefa.concluida;
    tarefa.prioridade = tarefa.concluida ? 'concluida' : 'media';
  }
}