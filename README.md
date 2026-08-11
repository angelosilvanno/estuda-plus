# Estuda+

Plataforma web para organização de estudos, planejamento de cronogramas, controle de metas, monitoramento de horas estudadas e foco com Timer Pomodoro.

## 🔥 Introdução

O **Estuda+** é um sistema web desenvolvido para auxiliar estudantes (sejam do ensino médio, universitários, concurseiros ou profissionais em preparação para certificações) no planejamento e na organização de sua rotina diária de aprendizado. 

O principal objetivo da aplicação é aumentar a produtividade e incentivar a constância através de uma interface limpa, moderna e minimalista, inspirada em ferramentas consolidadas como o *Notion* e o *Todoist*, evitando o excesso de informações e o cansaço visual.

### Funcionalidades já estruturadas:
*   **Autenticação:** Telas responsivas de Login, Cadastro e Recuperação de Senha, unificadas em uma identidade visual moderna com foco em usabilidade.
*   **Cronograma de Estudos:** Painel reativo com grade horária semanal, permitindo visualizar de forma clara as prioridades e o status das sessões, além de contar com uma simulação interativa de agendamento de tarefas pendentes.

---

### ⚙️ Pré-requisitos

Para conseguir rodar este projeto localmente na sua máquina, você precisará ter as seguintes ferramentas instaladas:

1.  **Node.js** (Recomendada a versão LTS atual, como v20 ou v22):
    [Download do Node.js](https://nodejs.org/)
2.  **NPM** (Gerenciador de pacotes, que é instalado automaticamente junto com o Node.js).
3.  **Angular CLI** instalado globalmente no seu sistema operacional. Para instalar, execute no seu terminal de preferência:

```bash
npm install -g @angular/cli
```

---

### 🔨 Guia de instalação

Siga as etapas abaixo para clonar o repositório, instalar todas as dependências necessárias e executar o ambiente de desenvolvimento local:

**Etapas para instalar e rodar:**

1.  **Clonar o repositório:**
    Abra o seu terminal e clone o projeto do seu GitHub:
    ```bash
    git clone https://github.com/angelosilvanno/estuda-plus.git
    ```

2.  **Entrar no diretório do projeto:**
    ```bash
    cd estuda-plus
    ```

3.  **Instalar as dependências do projeto:**
    Este comando lerá o arquivo `package.json` e instalará o Angular, o Tailwind CSS v4 e todas as demais ferramentas necessárias de forma automatizada:
    ```bash
    npm install
    ```

4.  **Iniciar o servidor de desenvolvimento:**
    Execute o comando abaixo para compilar o projeto e iniciar o servidor local:
    ```bash
    npm start
    ```

