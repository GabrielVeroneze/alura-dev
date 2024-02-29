Este projeto foi desenvolvido como parte do Challenge Front-End 1ª Edição da Alura. Durante quatro semanas, os participantes tiveram a oportunidade de praticar e ampliar seus conhecimentos em desenvolvimento web, resultando na criação do Alura Dev, um editor de texto online. Este README fornece informações sobre as funcionalidades, recursos e instruções para execução da aplicação.

<hr>

## Índice

-   [Descrição](#descricao)
-   [Páginas e Componentes](#building_construction-páginas-e-componentes)
    -   [Página do Editor de Código](#página-do-editor-de-código)
    -   [Página de Comunidade](#página-de-comunidade)
-   [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
    -   [Navegação e Acesso](#navegação-e-acesso)
    -   [Editor de Código](#editor-de-código)
    -   [Gerenciamento de Projetos](#gerenciamento-de-projetos)
    -   [Exportação e Feedback](#exportação-e-feedback)
-   [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
    -   [Desenvolvimento com React](#desenvolvimento-com-react)
    -   [Estado Global com Recoil](#estado-global-com-recoil)
    -   [Estilização com Styled Components](#estilização-com-styled-components)
    -   [Rotas com React Router](#rotas-com-react-router)
    -   [Consumo de API com Axios](#consumo-de-api-com-axios)
    -   [Hooks Customizados](#hooks-customizados)
    -   [Técnicas de Estilo e Layout CSS](#técnicas-de-estilo-e-layout-css)
    -   [Simulação de API com json-server](#simulação-de-api-com-json-server)
    -   [Destaque de Sintaxe com Highlight.js](#destaque-de-sintaxe-com-highlightjs)
    -   [Conversão de DOM para Imagem com Dom-to-Image](#conversão-de-dom-para-imagem-com-dom-to-image)
    -   [Salvamento de Arquivos com File Saver](#salvamento-de-arquivos-com-file-saver)
    -   [Layout Masonry com React Responsive Masonry](#layout-masonry-com-react-responsive-masonry)
    -   [Mensagens de Alerta com React Toastify](#mensagens-de-alerta-com-react-toastify)
-   [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
-   [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
-   [Instruções](#clipboard-instruções)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/alura-dev/blob/85fab08bb86536479b6cf65c5cbafb38c986bfa5/src/assets/images/logotipo.svg"></h1>
<p align="center">O Alura Dev é um editor de texto online que simplifica a postagem e visualização de trechos de código em várias linguagens de programação.</p>

<p align="center">Ele oferece uma plataforma intuitiva e eficiente para desenvolvedores salvarem e compartilharem seus códigos de maneira prática.</p>

<p align="center">Com uma interface versátil e intuitiva, proporciona uma experiência de edição de código eficiente e esteticamente agradável.</p>

## :building_construction: Páginas e Componentes

### Layout das Páginas

Consiste em um layout que inclui os componentes e elementos que são encontrados em todas as páginas da plataforma.

-   `Cabeçalho`: Possui a logotipo da plataforma, uma barra de pesquisa para procurar projetos ou perfis, e a imagem do perfil do usuário com o nome.

-   `Menu de Navegação`: Contém os links para cada uma das páginas principais da plataforma. Localizado na barra lateral esquerda.

### Página do Editor de Código

É o local principal da plataforma, onde os usuários podem criar e editar projetos de forma dinâmica e interativa.

-   `Campo de Inserção de Código`: Permite aos usuários escrever e editar o código do projeto.

-   `Botão para Aplicar o Highlight`: Aplica o Syntax Highlight ao código, posicionado abaixo do campo de código.

-   `Formulário de Cadastro de Projeto`: Inclui campos para inserção do título, descrição e personalizações do projeto.

-   `Botão para Exportar Código`: Possibilita salvar o código como uma imagem para compartilhamento ou uso posterior.

### Página de Comunidade

Nela é exibido uma lista de cards dos projetos criados pelos usuários, permitindo aos usuários explorar e interagir com os projetos.

-   `Cards dos Projetos`: Representa visualmente cada projeto salvo na página de comunidade. Cada card é composto por:

    -   `Miniatura do Código`: Uma visualização em miniatura do código, com o Syntax Highlight aplicado.

    -   `Título do Projeto`: O título descritivo que identifica o projeto de forma clara.

    -   `Descrição do Projeto`: A descrição que fornece informações adicionais sobre o conteúdo do projeto.

    -   `Personalizações`: Inclui as personalizações feitas, como a cor de fundo do editor e a linguagem de programação utilizada.

    -   `Contador de Comentários`: Indica o número de comentários feitos pelos usuários sobre o projeto.

    -   `Contador de Curtidas`: Exibe a quantidade de curtidas recebidos pelo projeto.

    -   `Autor do Projeto`: Identifica o usuário responsável pela criação do projeto.

## :rocket: Funcionalidades e Recursos

### Navegação e Acesso

-   `Navegação`: Fornece links para as principais páginas da plataforma, como a página do Editor de Código e a página da Comunidade.

### Editor de Código

-   `Edição de Código`: Espaço destinado à inserção e edição do código fonte, possibilitando aos usuários escrever e modificar o código na linguagem escolhida.

-   `Personalização do Editor`: Permite aos usuários ajustar as configurações do editor de código, como selecionar a linguagem de programação e escolher a cor de fundo do editor.

-   `Adição de Syntax Highlight`: Permite aos usuários realçar a sintaxe do código dentro do editor, melhorando a legibilidade e compreensão do código fonte.

### Gerenciamento de Projetos

-   `Criar Projeto`: Os usuários podem criar um projeto ao preencher os campos de título e descrição, selecionar a linguagem do código dentre as opções disponíveis e escolher a cor de fundo usando um seletor de cores.

-   `Salvar Projeto`: Permite aos usuários salvar um projeto, tornando ele disponível na página da Comunidade para visualização e interação.

-   `Editar Projeto`: O usuário pode navegar pela página da Comunidade e clicar no card do projeto que deseja editar. Ao fazer isso, será redirecionado para o editor de código, onde poderá efetuar alterações no projeto.

### Exportação e Feedback

-   `Exportação de Código`: Disponibiliza ao usuário a opção de exportar o código em imagem, disponível nos formatos PNG, SVG ou JPEG.

-   `Feedback aos Usuários`: Utiliza snackbars para fornecer mensagens informativas sobre o status das ações realizadas.
## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Componentes Funcionais`: Utiliza componentes funcionais como a base da estrutura da aplicação.

-   `Hooks`: Aproveita os hooks do React, como `useState`, `useEffect`, `useRef`, entre outros, para adicionar funcionalidades.

-   `Props`: Utiliza props para passar dados de um componente pai para um componente filho, sem passar para componentes profundos na hierarquia.

-   `Renderização Condicional`: Utiliza renderização condicional para controlar qual parte da interface é exibida com base em condições.

-   `Renderização de Listas`: Utiliza renderização de listas para exibir conjuntos de dados dinâmicos, como itens de uma lista.

-   `Eventos`: Utiliza eventos do React para lidar com interações do usuário, como cliques, digitação e foco.

### Estado Global com Recoil

-   `Recoil`: Utilizado para gerenciar o estado global da aplicação.

### Estilização com Styled Components

-   `Styled Components`: Adotado para estilizar os componentes React de forma modular e dinâmica.

-   `Tema Personalizado`: Implementa um tema personalizado para centralizar as definições de cores, tipografia e outras propriedades de estilo utilizadas em toda a aplicação.

-   `Estilização Dinâmica com Props`: Estiliza os componentes de forma dinâmica com base em props para criar componentes versáteis e reutilizáveis.

-   `Extensão de Estilos`: Utiliza a extensão de estilos para criar variações de componentes existentes sem a necessidade de duplicar código.

-   `Estilos Globais`: Também utiliza o Styled Components para definir estilos globais que se aplicam a toda a aplicação.

### Rotas com React Router

-   `React Router`: Adotado para gerenciar a navegação entre diferentes páginas da aplicação.

-   `Componentes de Rota`: Utiliza o componente `<Route>` do React Router para definir as rotas da aplicação.

-   `Rotas Aninhadas`: Utiliza rotas aninhadas para para criar layouts reutilizáveis, compostos por vários componentes de rota aninhados.

-   `Links de Navegação`: Utiliza o componente `<Link>` do React Router para criar links de navegação entre diferentes partes da aplicação.

-   `Estilos Ativos`: Utiliza o componente `<NavLink>` para aplicar estilos especiais aos links de navegação quando a rota correspondente estiver ativa.

-   `Parâmetros de Rota`: Aproveita os parâmetros de rota do React Router para criar páginas com conteúdo personalizado, baseado nos parâmetros fornecidos na URL.

### Consumo de API com Axios

-   `Axios`: Utilizado para realizar requisições HTTP para a API de mock que fornece os dados dos projetos.

-   `Recebimento de Dados`: Utiliza o método GET para receber dados do servidor em resposta à requisição.

-   `Envio de Dados`: Utiliza o método POST para enviar dados para o servidor em requisições de criação de recursos.

-   `Atualização de Dados`: Utiliza o método PUT para atualizar dados existentes na API, enviando dados modificados ou atualizados para o servidor.

-   `Configuração de Headers`: Configura cabeçalhos personalizados nas requisições Axios para fornecer informações adicionais ao servidor.

### Hooks Customizados

-   `useManipularProjetos`: Encapsula a lógica de manipulação de projetos, incluindo carregamento, cadastro e edição via requisições HTTP.

-   `useManipularFormulario`: Responsável por gerenciar o estado de formulários, facilitando manipulação, validação e envio.

-   `useProjetoAtual`: Mantém o estado do projeto selecionado, permitindo acesso e exibição de informações relevantes.

-   `useAplicarHighlight`: Responsável por aplicar destaque de sintaxe no código do editor.

-   `useCodigoEmImagem`: É utilizado para converter o código em uma imagem, possibilitando o compartilhamento do código.

-   `useCurtirProjeto`: Gerencia a funcionalidade de curtir projetos, atualizando o estado do projeto e contagem de curtidas.

-   `useMenuAberto`: Controla o estado de abertura e fechamento do menu na interface da aplicação.

### Técnicas de Estilo e Layout CSS

-   `Flexbox`: Emprega o modelo de layout flexbox para criar layouts flexíveis e responsivos na aplicação.

-   `Grid Layout`: Utiliza o sistema de layout grid para criar layouts avançados na aplicação.

-   `Media Queries`: Implementa media queries para tornar a aplicação responsiva, ajustando o layout e o estilo em dispositivos móveis, tablets e desktops.

-   `Pseudoclasses e Pseudoelementos`: Utiliza pseudoclasses e pseudoelementos CSS para aplicar estilos a elementos.

### Simulação de API com json-server

-   `json-server`: Ferramenta utilizada para simular uma API REST durante o desenvolvimento da aplicação.

### Destaque de Sintaxe com Highlight.js

-   `Highlight.js`: Utilizado para aplicar destaque de sintaxe no código do editor de código.

### Conversão de DOM para Imagem com Dom-to-Image

-   `Dom-to-Image`: Adotado para converter elementos DOM em imagens estáticas.

### Salvamento de Arquivos com File Saver

-   `File Saver`: Adotado para permitir que os usuários salvem arquivos de imagens gerados ao exportar o código em imagem.

### Layout Masonry com React Responsive Masonry

-   `React Responsive Masonry`: Utilizado para criar layouts em estilo masonry responsivos e dinâmicos.

### Mensagens de Alerta com React Toastify

-   `React Toastify`: Utilizado para exibir mensagens de alerta e notificação para o usuário de forma elegante e responsiva.

## :computer: Ferramentas utilizadas

| React | TypeScript | Recoil | Styled Components | React Router | &nbsp; Axios &nbsp; | Vite |
| :---: | :--------: | :----: | :---------------: | :----------: | :-----------------: | :--: |
<img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/6696dd4c-ff05-4e4d-800f-e34cc72baf6a"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/4fece894-e9e0-4334-aa4d-fdc827a42f94"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/bd4e69b0-608d-4676-89ef-3ea1e9c73a24"> | <img height="85px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/607ff27f-a108-4a23-929e-8fc0f0c6a8fc"> | <img height="55px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/bad822e7-d3aa-4a79-855d-ed46e163a7e5"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/3615e690-9dbf-4305-8454-1a0e4fe55a18"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/c0aee16b-710d-4a5b-b641-be2eb07607ad">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  

[Baixar código fonte](https://github.com/GabrielVeroneze/alura-dev/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/alura-dev.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que o Node.js está instalado em seu computador. Caso não esteja, realize o download e a instalação a partir do site oficial:

   https://nodejs.org/

2. Abra o terminal e navegue até a pasta raiz do projeto utilizando o comando `cd`. Por exemplo:
   ```
   cd alura-dev
   ```
3. Antes de iniciar a aplicação, é necessário instalar as dependências necessárias. Execute o seguinte comando no terminal:
   ```
   npm install
   ```
   Este comando instalará todas as dependências listadas no arquivo `package.json`.

4. Após a instalação das dependências, inicie o servidor JSON Server para disponibilizar os dados da API. Utilize o seguinte comando:
   ```
   npx json-server db.json
   ```
   Isso iniciará o JSON Server na porta 3000 usando o arquivo `db.json` como banco de dados.

5. Após a inicialização do JSON Server, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm run dev
   ```
   Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.

## :trophy: Sobre o Challenge

O Challenge Front-End 1ª Edição oferece a oportunidade de praticar e aprimorar seus conhecimentos em desenvolvimento web, enquanto cria um novo projeto do início ao fim.

### O que é um Challenge?

O Challenge Front-End é uma abordagem baseada em desafios, onde os participantes se envolvem em um problema específico e buscam soluções por meio de cursos, conteúdos e interações. Após explorar o desafio proposto, os participantes aplicam seus conhecimentos para desenvolver e implementar um projeto prático.

### História do Projeto

Um produtor de conteúdo de programação solicitou a construção de um editor de texto online para compartilhar trechos de código. O editor precisa ser acessível, simples, bonito e funcional, permitindo ao produtor compartilhar a ferramenta com seus seguidores.

As principais funcionalidades pedidas incluem um campo para selecionar a linguagem a ser escrita, um campo para escrever o código e um botão para visualizar o código com syntax highlight.

### Desenvolvimento Ágil com Trello

Durante o período de quatro semanas, o projeto foi desenvolvido seguindo uma abordagem ágil, com o auxílio do Trello. Ele é utilizado para gerenciar as tarefas, desde o início até a conclusão do projeto.

Ao longo de cada semana, foram estabelecidas metas específicas, direcionando o foco e o esforço em diferentes áreas do projeto. Abaixo, estão listadas as principais tarefas de cada semana:

#### Semana 1

-   Implementação do layout básico da página do editor de código, incluindo elementos estáticos como logotipo, barra de pesquisa e menu de navegação.

-   Criação do formulário de cadastro de projetos com campos para título, descrição, linguagem e cor de fundo do editor.

-   Desenvolvimento do botão para salvar o projeto e do campo de inserção do código, com integração do botão para adicionar syntax highlight.

