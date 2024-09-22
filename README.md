# Além da Lógica

**Descrição**:  
O **Além da Lógica** é uma plataforma inovadora que combina narrativa e elementos visuais, permitindo que os usuários publiquem histórias curtas acompanhadas de GIFs. A ideia é dar vida às palavras através de imagens animadas, proporcionando uma experiência mais envolvente e criativa para quem conta e quem lê. Com um design simples e amigável, a plataforma facilita a criação e a visualização de conteúdos de forma rápida e intuitiva, tornando a interação mais dinâmica.

## Funcionalidades

- **Publicação de Histórias**: Os usuários podem criar e publicar suas histórias curtas.
- **Incorporação de GIFs**: Cada história pode ser acompanhada por um GIF, permitindo uma representação visual das emoções e temas da narrativa.
- **Visualização das Histórias**: Leitores podem navegar pelas histórias publicadas, visualizando o texto junto com os GIFs de forma fluida.
- **Interface Responsiva**: A aplicação foi projetada para funcionar perfeitamente tanto em desktops quanto em dispositivos móveis.
  
## Tecnologias Utilizadas

Este projeto foi construído utilizando um conjunto de tecnologias modernas e eficientes para garantir uma boa performance e manutenibilidade:

- **React**: Biblioteca JavaScript para a criação de interfaces de usuário interativas e eficientes.
- **JavaScript/TypeScript**: Linguagens de programação usadas para adicionar funcionalidade e garantir a tipagem estática no desenvolvimento.
- **JSON**: Formato de intercâmbio de dados utilizado para armazenamento e manipulação das histórias e GIFs.

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura de diretórios do projeto, organizada para facilitar o desenvolvimento e a escalabilidade:

📦 trabalho-front-end
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Banner.js          // Componente de banner para o topo da aplicação
 ┃ ┃ ┣ 📜Header.js          // Cabeçalho da aplicação
 ┃ ┃ ┣ 📜Modal.js           // Componente modal para exibição de informações
 ┃ ┃ ┣ 📜PostForm.js        // Formulário de criação de posts
 ┃ ┃ ┣ 📜PostItem.js        // Componente de exibição de um post individual
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Home.js            // Página principal que reúne os componentes
 ┃ ┃ ┣ 📜Posts.js           // Página para exibição de posts publicados
 ┃ ┣ 📂assets               // Arquivos de mídia, imagens, e outros recursos estáticos
 ┃ ┣ 📜App.js               // Componente raiz da aplicação
 ┃ ┗ 📂utils                // Funções utilitárias utilizadas no projeto
 ┣ 📜README.md              // Documentação do projeto
 ┣ 📜package.json           // Gerenciamento de dependências do projeto
 ┣ 📜.gitignore             // Arquivos a serem ignorados pelo Git
 ┣ 📜package-lock.json      // Bloqueio de versão exata das dependências instaladas
 ┣ 📜index.js               // Ponto de entrada da aplicação React
 ┣ 📜index.css              // Estilos globais da aplicação
 ┗ 📜App.css                // Estilos principais do aplicativo

### Componentes

- **StoryForm.tsx**: Componente responsável pelo formulário de criação de novas histórias. Ele permite ao usuário inserir o texto da história e selecionar um GIF.
- **GifDisplay.tsx**: Exibe o GIF selecionado junto com a história do usuário.
  
### Páginas

- **Home.tsx**: Página principal da aplicação, que fornece um ponto de entrada para o usuário explorar as histórias e criar novas.
- **Stories.tsx**: Exibe todas as histórias publicadas, organizadas de forma que o leitor possa navegar e apreciar o conteúdo de maneira simples e rápida.

### Outras pastas

- **assets**: Contém arquivos de mídia, como imagens e ícones, usados na aplicação.
- **utils**: Funções utilitárias e auxiliares que são reutilizadas em diferentes partes do projeto, facilitando a manutenção do código.

## Como Funciona

1. **Publicação de Histórias**:  
   Os usuários podem acessar a página principal e usar o formulário para escrever uma história. Eles também podem selecionar um GIF a partir de uma lista ou buscá-lo, dando à história um toque visual.

2. **Visualização de Histórias**:  
   Todas as histórias publicadas pelos usuários são exibidas em uma lista na página dedicada. O leitor pode clicar em qualquer história para visualizar o texto e o GIF em conjunto.

3. **Interação com o GIF**:  
   O usuário pode interagir com os GIFs para criar histórias mais expressivas. A integração é simples, focada em permitir que o GIF complemente a narrativa sem complicar a experiência do usuário.

---

Essa versão do README é mais completa e detalhada, descrevendo não apenas o projeto, mas também sua estrutura interna e como ele funciona. Ela dá uma visão clara de como a aplicação é organizada e do propósito de cada parte do código, além de explicar como a interação do usuário acontece.
