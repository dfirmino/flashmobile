![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png "React")
# FlashCards Project

  Desenvolvido para o projeto nanodegree de formação em React Realizado Pela [Udacity](https://br.udacity.com/course/react-nanodegree--nd019) 

## Instalação do Projeto


* Entre no Diretório raiz do projeto
* Instale as Dependências `yarn install`
* Rode o Servidor  `yarn start`


## Desenvolvimento
`Todo o código foi desenvolvido e testado no Android pelo expo v2.7.1`

## O Que Vou Encontrar 
```bash
├── package.json # npm package manager file.
└── .expo # arquivos default do expo
├── actions #Actions
│    └── index.js #Arquivo com todas as Actions
├── components 
│   ├── BaralhoDetalhe.js # Componente com os detalhes do baralho.
│   ├── BaralhoPreview.js # Componente renderizado na home trazendo o nome do baralho.
│   ├── Carta.js #Componente contendo os detalhes da carta.
│   ├── CriarBaralho.js # Componente responsável por criar um novo baralho.
│   ├── CriarPergunta.js # Componente responsável por criar uma nova pergunta..  
│   ├── Home.js # Componente responsável por renderizar a Home.
│   ├── Resposta.js # Componente contendo os detalhes da resposta da carta.
│   ├── Resultado.js # Componente responsável por exibir o resultado ao final do questionário
├── reducers # Reducers
│   └── index.js #Arquivo com todos os Reducers
├── utils # Arquivos Úteis para o desenvolvimento.
│   └── api.js # Arquivo Com métodos da Api necessários para o sistema.
│   └── notificacao.js # Arquivo Com métodos responsáveis por gerar notificações.
├── App.js # Raiz do App (Contém as Rotas e Permissões).
├── App.test.js # Arquivo para Teste.
```
