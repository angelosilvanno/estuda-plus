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
  nome = '';
  email = '';
  genero = '';
  senha = '';
  confirmarSenha = '';
  aceitouTermos = false;

  loading = false;
  erroMensagem = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.nome || !this.email || !this.genero || !this.senha || !this.confirmarSenha) {
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

    const dadosUsuario = {
      nome: this.nome,
      email: this.email,
      genero: this.genero,
      curso: 'Estudante'
    };
    localStorage.setItem('usuarioCadastro', JSON.stringify(dadosUsuario));

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, 1500);
  }
}