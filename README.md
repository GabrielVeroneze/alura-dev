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
-   [Sobre o Challenge](#trophy-sobre-o-challenge)
    -   [O que é um Challenge?](#o-que-é-um-challenge)
    -   [História do Projeto](#história-do-projeto)
    -   [Desenvolvimento Ágil com Trello](#desenvolvimento-ágil-com-trello)
-   [Demonstração Visual](#camera-demonstração-visual)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/alura-dev/blob/85fab08bb86536479b6cf65c5cbafb38c986bfa5/src/assets/images/logotipo.svg"></h1>
<p align="center">O Alura Dev é um editor de texto online que simplifica a postagem e visualização de trechos de código em várias linguagens de programação.</p>

<p align="center">Ele oferece uma plataforma intuitiva e eficiente para desenvolvedores salvarem e compartilharem seus códigos de maneira prática.</p>

<p align="center">Com uma interface versátil e intuitiva, proporciona uma experiência de edição de código eficiente e esteticamente agradável.</p>

## :building_construction: Páginas e Componentes

### Página do Editor de Código

A página do editor de código é o local principal para criação e edição de projetos. Ela contém um campo de inserção de código com Syntax Highlight, um formulário para cadastro do projeto com título e descrição, além de um botão de exportação que permite salvar o código em formato de imagem.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/775b1c8b-359d-47a1-bd57-4d3ff5cf8c47" />
</details>

### Página de Comunidade

A página de comunidade exibe uma lista de projetos criados pelos usuários. Cada item apresenta uma miniatura do código com Syntax Highlight, o título e a descrição do projeto, as personalizações realizadas, e contadores de comentários e curtidas. Além disso, o nome do autor do projeto é exibido para identificar o criador de cada projeto.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/fb62ec42-e3c4-41b1-bde7-206acd61c89a" />
</details>

## :rocket: Funcionalidades e Recursos

### Navegação e Acesso

-   `Navegação`: Fornece links para as principais páginas da plataforma, como a página do Editor de Código e a página da Comunidade.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/f95892e8-4ef7-4734-b4d5-f11c725cbc07" />
    </details>

### Editor de Código

-   `Inserção de Código`: Proporciona espaço destinado à inserção e edição do código fonte, possibilitando aos usuários escrever e modificar o código na linguagem escolhida.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/61cfb281-d7fd-4087-8a34-36b7820eed2c" />
    </details>

-   `Personalização do Editor`: Permite aos usuários ajustar as configurações do editor de código, como selecionar a linguagem de programação e escolher a cor de fundo do editor.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/f49f0e06-fee8-42c4-8af0-9185de085fb9" />
    </details>

-   `Adição de Syntax Highlight`: Permite aos usuários realçar a sintaxe do código dentro do editor, melhorando a legibilidade e compreensão do código fonte.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/0408e286-67fe-4f0c-ad12-ac143ad798a9" />
    </details>

### Gerenciamento de Projetos

-   `Criar Projeto`: Os usuários podem criar um projeto ao preencher os campos de título e descrição, selecionar a linguagem do código dentre as opções disponíveis e escolher a cor de fundo usando um seletor de cores.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/d1705eec-b9c0-42ca-9a47-b079eba49dcb" />
    </details>

-   `Salvar Projeto`: Permite aos usuários salvar um projeto, tornando ele disponível na página da Comunidade para visualização e interação.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/8639e90a-e0b7-47a8-8550-6c7e9d5fc3ba" />
    </details>

-   `Editar Projeto`: O usuário pode navegar pela página da Comunidade e clicar no card do projeto que deseja editar. Ao fazer isso, será redirecionado para o editor de código, onde poderá efetuar alterações no projeto.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/f26b0ea6-d3de-45a3-bb18-b1ef27787868" />
    </details>

### Exportação e Feedback

-   `Exportação de Código`: Disponibiliza ao usuário a opção de exportar o código em imagem, disponível nos formatos PNG, SVG ou JPEG.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/77b08b49-bcf8-4a3e-b8c3-27020bbb573c" />
    </details>

-   `Feedback aos Usuários`: Utiliza snackbars para fornecer mensagens informativas sobre o status das ações realizadas.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/845d489e-a3be-4053-8ded-d126b63ab8e0" />
    </details>

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Componentes Funcionais e JSX`: Estrutura a interface utilizando componentes funcionais e a sintaxe declarativa do JSX, promovendo organização e legibilidade no código.

-   `Hooks e Hooks Customizados`: Aproveita os hooks do React, como `useState`, `useEffect`, `useRef`, entre outros, além de hooks customizados que centralizam lógica reutilizável para gerenciamento de dados, estados e validações.

-   `Componentização`: Cria interfaces modulares e reutilizáveis, onde cada componente é responsável por uma seção específica da UI, controlando sua própria lógica, estado e renderização.

-   `Renderização Condicional`: Controla a exibição de elementos da interface com base em estados e condições específicas, garantindo uma experiência de usuário dinâmica e personalizada.

-   `Renderização de Listas`: Utiliza renderização de listas para exibir conjuntos de dados dinâmicos de forma eficiente, iterando sobre arrays e gerando elementos estruturados.

-   `Manipulação de Eventos`: Gerencia interações do usuário com eventos como `onClick`, `onChange` e `onSubmit`, tornando a aplicação mais responsiva e interativa.

### Tipagem com TypeScript

-   `Definições de Tipos`: Usa `interface` para definir a estrutura de dados, estabelecendo regras claras para objetos, o que facilita a organização e reutilização de tipos na aplicação.

-   `Tipos Básicos e Uniões`: Utiliza tipos básicos, como `string`, `number` e `boolean`, além de `Union Types` para combinar múltiplos tipos, tornando o código mais flexível e seguro.

-   `Tipos de Objetos e Arrays`: Define a tipagem de objetos e arrays, especificando as propriedades e tipos esperados, garantindo o tratamento correto das estruturas de dados.

-   `Tipos de Funções`: Define tipos para funções, especificando parâmetros e valores de retorno, garantindo maior previsibilidade e reduzindo erros em chamadas de função.

-   `Propriedades e Parâmetros Opcionais`: Define propriedades e parâmetros opcionais usando `?`, tornando o código mais flexível e adaptável a diferentes cenários.

-   `Asserções de Tipo`: Utiliza asserções de tipo para especificar o tipo esperado de uma variável em contextos específicos, permitindo uma manipulação mais precisa e segura dos dados.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza `BrowserRouter`, `Routes` e `Route` para estruturar as rotas da aplicação, permitindo a navegação dinâmica entre páginas e seções.

-   `Layout Routes`: Usa o componente `Outlet` para criar layouts reutilizáveis, permitindo que diferentes rotas compartilhem elementos comuns como cabeçalho e menu.

-   `Links de Navegação`: Utiliza os componentes `Link` e `NavLink` para criar uma navegação intuitiva e visualmente distinta, aplicando estilos específicos aos links ativos.

-   `Parâmetros de Rota`: Define parâmetros de rota com `:parameter` na URL e usa `useParams` para acessar e exibir conteúdo personalizado conforme os valores da URL.

### Gerenciamento de Estado com Recoil

-   `Fornecimento do Estado Global`: Utiliza o `RecoilRoot` para fornecer o contexto necessário, permitindo que os componentes da aplicação acessem e modifiquem estados globais.

-   `Definição de Estados Globais`: Utiliza o `atom` para criar unidades de estado independentes, possibilitando que diferentes componentes leiam e atualizem esses estados de forma reativa e eficiente.

-   `Gerenciamento de Estados Compartilhados`: Usa o hook `useRecoilState` para ler e atualizar estados globais, facilitando o controle de dados entre diferentes componentes.

### Comunicação com API via Axios

-   `Requisições HTTP`: Realiza operações como GET, POST e PUT para consumir e manipular dados vindos de APIs, garantindo uma comunicação eficiente com o backend.

-   `Configuração de Instância`: Utiliza o `axios.create` para criar instâncias personalizadas, centralizando configurações específicas para facilitar o gerenciamento de requisições.

### Estilização com Styled Components

-   `Criação de Componentes Estilizados`: Utiliza `styled` para criar componentes com estilos integrados, garantindo uma integração eficiente entre a lógica e a aparência da interface.

-   `Tema Personalizado`: Implementa um tema personalizado para gerenciar a definição de cores, tipografia, espaçamentos e outras propriedades visuais, assegurando uma aparência consistente em toda a aplicação.

-   `Estilização Dinâmica`: Aplica estilos dinâmicos baseados em props, permitindo a criação de componentes versáteis que se adaptam a diferentes estados e necessidades.

-   `Extensão de Estilos`: Faz uso da extensão de estilos para criar variações de componentes existentes, evitando a duplicação de código e facilitando a manutenção do design.

-   `Estilos Globais`: Utiliza `createGlobalStyle` para definir estilos globais que afetam toda a aplicação, mantendo a consistência visual e garantindo um design uniforme.

### Construção de Layout

-   `Flexbox`: Cria layouts flexíveis, ajustando a distribuição e o comportamento dos elementos com propriedades como `flex`, `flex-direction`, `align-items` e `justify-content`.

-   `Grid Layout`: Constrói layouts avançados com Grid Layout, controlando linhas e colunas por meio de propriedades como `grid-template-rows`, `grid-template-columns` e `gap`.

-   `Media Queries`: Utiliza `@media` para ajustar o layout e os estilos conforme o tamanho da tela, garantindo compatibilidade com dispositivos móveis, tablets e desktops.

### Utilização de Pacotes

-   `json-server`: Utilizado para simular uma API RESTful local durante o desenvolvimento, permitindo testes rápidos sem a necessidade de um backend real.

-   `Highlight.js`: Implementado para aplicar destaque de sintaxe no código do editor, facilitando a leitura e compreensão do código.

-   `Dom-to-Image`: Adotado para converter elementos DOM em imagens estáticas, permitindo a exportação de áreas específicas da interface.

-   `File Saver`: Usado para permitir que os usuários salvem imagens geradas ao exportar o código em formato de imagem.

-   `React Responsive Masonry`: Utilizado para criar layouts dinâmicos no estilo masonry, responsivos e ajustáveis a diferentes tamanhos de tela.

-   `React Toastify`: Usado para exibir notificações e mensagens de alerta de forma elegante e responsiva, com opções de personalização.

## :computer: Ferramentas utilizadas

| React | TypeScript |  Styled Components | React Router | Recoil | &nbsp; Axios &nbsp; | Vite |
| :---: | :--------: | :----------------: | :----------: | :----: | :-----------------: | :--: |
<img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/6696dd4c-ff05-4e4d-800f-e34cc72baf6a"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/4fece894-e9e0-4334-aa4d-fdc827a42f94"> | <img height="80px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/607ff27f-a108-4a23-929e-8fc0f0c6a8fc"> | <img height="50px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/bad822e7-d3aa-4a79-855d-ed46e163a7e5"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/bd4e69b0-608d-4676-89ef-3ea1e9c73a24"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/3615e690-9dbf-4305-8454-1a0e4fe55a18"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-dev/assets/95183901/c0aee16b-710d-4a5b-b641-be2eb07607ad">

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

#### Semana 2

-   Utilização de JavaScript para adicionar comportamento dinâmico ao sistema, incluindo micro interações na página do editor e validações de entrada nos formulários.

-   Implementação da cor de fundo personalizável do editor e adição do syntax highlight ao código.

-   Funcionalidade de links no menu de navegação e desenvolvimento da página de visualização de projetos com cards dos projetos salvos.

-   Melhoria na responsividade da aplicação para diferentes dispositivos e implementação de micro interações em outras páginas.

#### Semanas 3 & 4

-   Utilização de frameworks SPA para montar o editor de código e integração com a API para gerenciar os projetos.

-   Implementação da função de salvar o projeto e exportação do código em PNG, SVG ou JPG.

-   Documentação do projeto e realização do deploy da aplicação.
