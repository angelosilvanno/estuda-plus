import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recuperar.html',
  styleUrl: './recuperar.css'
})
export class Recuperar {
  // Modelo de dados do formulário
  email = '';

  // Controle de estados de carregamento e fluxo
  loading = false;
  isEnviado = false;
  erroMensagem = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.email) {
      this.erroMensagem = 'Por favor, informe o seu e-mail cadastrado.';
      return;
    }

    this.loading = true;
    this.erroMensagem = '';

    // Simulação do tempo de envio da mensagem para o e-mail
    setTimeout(() => {
      this.loading = false;
      this.isEnviado = true;
    }, 1500);
  }
}