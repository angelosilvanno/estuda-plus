import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  // Modelos de dados vinculados ao formulário
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  aceitouTermos = false;

  // Controle de estados visuais
  loading = false;
  erroMensagem = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Validações básicas de formulário
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.erroMensagem = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.erroMensagem = 'As senhas informadas não coincidem.';
      return;
    }

    if (!this.aceitouTermos) {
      this.erroMensagem = 'Você precisa aceitar os Termos de Uso para prosseguir.';
      return;
    }

    this.loading = true;
    this.erroMensagem = '';

    // Simulação do tempo de resposta do servidor
    setTimeout(() => {
      this.loading = false;
      // Após o cadastro, redireciona para a tela de login para autenticação
      this.router.navigate(['/auth/login']);
    }, 1500);
  }
}