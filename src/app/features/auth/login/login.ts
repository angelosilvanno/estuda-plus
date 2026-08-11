import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Modelos de dados vinculados ao formulário
  email = '';
  senha = '';
  lembrarMe = false;
  
  // Controle de estados visuais
  loading = false;
  erroMensagem = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.email || !this.senha) {
      this.erroMensagem = 'Por favor, preencha todos os campos.';
      return;
    }

    this.loading = true;
    this.erroMensagem = '';

    // Simulando uma autenticação rápida de front-end para redirecionar ao Dashboard
    setTimeout(() => {
      this.loading = false;
      // Redireciona para a rota padrão (Dashboard) configurada em app.routes.ts
      this.router.navigate(['/dashboard']);
    }, 1200);
  }
}