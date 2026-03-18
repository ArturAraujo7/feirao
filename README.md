# Feirão Limpa Pátio - Clone

Este repositório contém o código-fonte de um clone exato da landing page do **Feirão Limpa Pátio Santander**. O projeto foi construído utilizando **React**, **Vite** e **Tailwind CSS**, com a estrutura do DOM e estlização (classes) extraídas diretamente da página original para garantir 100% de fidelidade visual.

## 🚀 Como rodar o projeto na sua máquina

Siga os passos abaixo para baixar, instalar as dependências e iniciar o servidor de desenvolvimento na sua máquina local.

### 1. Clonar o repositório

Primeiro, você precisa clonar este repositório para o seu computador. Abra o terminal (ou prompt de comando) e digite:

```bash
git clone https://github.com/ArturAraujo7/feirao.git
```

### 2. Acessar a pasta do projeto

Entre na pasta do projeto que acabou de ser criada:

```bash
cd feirao
```

*Nota: Se o nome da pasta for diferente, ajuste o comando para o nome correto onde os arquivos estão localizados.*

### 3. Instalar as dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina (recomendamos a versão LTS). Em seguida, instale as bibliotecas necessárias para rodar o projeto:

```bash
npm install
```

Isso fará o download do React, Vite, Tailwind CSS e todas as outras ferramentas que o projeto precisa.

### 4. Iniciar o servidor de desenvolvimento

Com tudo instalado, basta iniciar o Vite:

```bash
npm run dev
```

O terminal mostrará um endereço local (geralmente `http://localhost:5173/`). Copie esse endereço e cole no seu navegador para ver o site funcionando.

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface.
- **Vite:** Ferramenta de build super rápida para iniciar o projeto e fazer atualizações instantâneas.
- **Tailwind CSS:** Framework utilitário de CSS usado para copiar fielmente o design original.
- **Lucide React:** Biblioteca de ícones (presente no package.json, embora grande parte dos ícones do clone seja SVG puro extraído da página).

## 📁 Estrutura do Projeto

Todo o código visual e a estrutura perfeitamente replicada encontram-se no arquivo principal:
- `src/App.jsx`

Os estilos do Tailwind são configurados no:
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`
