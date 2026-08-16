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
  email = '';
  senha = '';
  lembrarMe = false;
  
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

    const cadastroJSON = localStorage.getItem('usuarioCadastro');

    if (!cadastroJSON) {
      this.loading = false;
      this.erroMensagem = 'E-mail ou senha incorretos.';
      return;
    }

    try {
      const cadastro = JSON.parse(cadastroJSON);

      if (cadastro.email !== this.email) {
        this.loading = false;
        this.erroMensagem = 'E-mail ou senha incorretos.';
        return;
      }

      if (cadastro.senha && cadastro.senha !== this.senha) {
        this.loading = false;
        this.erroMensagem = 'E-mail ou senha incorretos.';
        return;
      }

      const usuarioLogado = {
        nome: cadastro.nome,
        email: cadastro.email,
        curso: cadastro.curso || 'Estudante'
      };

      if (this.lembrarMe) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
      } else {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
      }

    } catch (error) {
      this.loading = false;
      this.erroMensagem = 'Erro ao processar as credenciais.';
      return;
    }

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1200);
  }
}