import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  nome = '';
  email = '';
  curso = 'Estudante';
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80';

  notificacoesEmail = true;
  notificacoesSistema = true;

  loading = false;
  sucessoMensagem = '';
  erroMensagem = '';

  ngOnInit(): void {
    const dadosUsuario = localStorage.getItem('usuarioLogado') || sessionStorage.getItem('usuarioLogado');
    if (dadosUsuario) {
      try {
        const usuario = JSON.parse(dadosUsuario);
        this.nome = usuario.nome || '';
        this.email = usuario.email || '';
        this.curso = usuario.curso || 'Estudante';
        if (usuario.avatarUrl) {
          this.avatarUrl = usuario.avatarUrl;
        }
      } catch (error) {
        console.error('Erro ao ler informações de perfil do usuário:', error);
      }
    }
  }

  onSalvar(): void {
    if (!this.nome || !this.email) {
      this.erroMensagem = 'Os campos Nome Completo e E-mail são obrigatórios.';
      return;
    }

    this.loading = true;
    this.sucessoMensagem = '';
    this.erroMensagem = '';

    setTimeout(() => {
      const dadosUsuario = localStorage.getItem('usuarioLogado') || sessionStorage.getItem('usuarioLogado');
      let usuario: any = {};
      
      if (dadosUsuario) {
        try {
          usuario = JSON.parse(dadosUsuario);
        } catch (e) {
          usuario = {};
        }
      }

      usuario.nome = this.nome;
      usuario.email = this.email;
      usuario.curso = this.curso;
      usuario.avatarUrl = this.avatarUrl;

      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));

      const dadosCadastro = localStorage.getItem('usuarioCadastro');
      if (dadosCadastro) {
        try {
          const cadastroObj = JSON.parse(dadosCadastro);
          if (cadastroObj.email === usuario.email || cadastroObj.nome) {
            cadastroObj.nome = this.nome;
            cadastroObj.email = this.email;
            cadastroObj.curso = this.curso;
            localStorage.setItem('usuarioCadastro', JSON.stringify(cadastroObj));
          }
        } catch (e) {}
      }

      this.loading = false;
      this.sucessoMensagem = 'Perfil atualizado com sucesso! Recarregue a página para aplicar as alterações no painel.';
    }, 1000);
  }
}