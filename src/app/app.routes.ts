import { Routes } from '@angular/router';

export const routes: Routes = [

  { 
    path: '', 
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login),
    pathMatch: 'full' 
  },

  // RF01 - Autenticação (Páginas fora do painel principal)
  { 
    path: '', 
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login),
    pathMatch: 'full' 
  },
  { 
    path: 'cadastro', 
    loadComponent: () => import('./features/auth/cadastro/cadastro').then(m => m.Cadastro) 
  },
  { 
    path: 'recuperar-senha', 
    loadComponent: () => import('./features/auth/recuperar/recuperar').then(m => m.Recuperar) 
  },

  // Área Administrativa / Interna do Estudante (Compartilha Sidebar/Navbar)
  {
    path: '',
    loadComponent: () => import('./core/layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
      // RF10 - Dashboard
      { 
        path: 'dashboard', 
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) 
      },
      
      // RF02 - Gerenciamento de Disciplinas
      { 
        path: 'disciplinas', 
        loadComponent: () => import('./features/disciplinas/disciplinas').then(m => m.Disciplinas) 
      },
      
      // RF03 & RF04 - Cronograma e Agenda
      { 
        path: 'cronograma', 
        loadComponent: () => import('./features/cronograma/cronograma').then(m => m.Cronograma) 
      },
      
      // RF05 - Metas de Estudo
      { 
        path: 'metas', 
        loadComponent: () => import('./features/metas/metas').then(m => m.Metas) 
      },
      
      // RF07 - Timer Pomodoro
      { 
        path: 'pomodoro', 
        loadComponent: () => import('./features/pomodoro/pomodoro').then(m => m.Pomodoro) 
      },

      // RF08 - Revisões
      { 
        path: 'revisoes', 
        loadComponent: () => import('./features/revisoes/revisoes').then(m => m.Revisoes) 
      },

      // RF11 - Relatórios
      { 
        path: 'relatorios', 
        loadComponent: () => import('./features/relatorios/relatorios').then(m => m.Relatorios) 
      },

      // RF14 - Perfil do Usuário
      { 
        path: 'perfil', 
        loadComponent: () => import('./features/perfil/perfil').then(m => m.Perfil) 
      }
    ]
  },
  
  // Rota de fallback para páginas não encontradas
  { path: '**', redirectTo: 'dashboard' }
];