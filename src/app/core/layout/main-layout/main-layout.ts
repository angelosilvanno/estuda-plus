import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  estudanteNome = '';
  estudanteCurso = 'Estudante';
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80';

  menuAberto = false;
  sidebarRetraida = false;

  constructor(private router: Router) {
    const dadosSessao =
      localStorage.getItem('usuarioLogado') ||
      sessionStorage.getItem('usuarioLogado');

    if (dadosSessao) {
      try {
        const usuario = JSON.parse(dadosSessao);

        this.estudanteNome = usuario.nome || '';

        if (usuario.curso) {
          this.estudanteCurso = usuario.curso;
        }
      } catch (error) {
        console.error('Erro ao analisar os dados de sessão do usuário:', error);
      }
    }
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  alternarSidebar(): void {
    this.sidebarRetraida = !this.sidebarRetraida;
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('usuarioLogado');
    this.router.navigate(['/']);
  }
}