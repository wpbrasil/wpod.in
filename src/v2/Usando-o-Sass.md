# Usando o Sass

## Instalação

Toda a estrutura do Odin foi preparada para ser utilizada juntamente com o Sass.
Se você não tem o Sass instalado, leia a [orientação de instalação do Sass](http://sass-lang.com/install).

Para compilar o seu Sass, o Odin já possui tarefas do Grunt preparadas para isso. Para executar uma tarefa do Grunt, lembre-se primeiro de, em seu terminal, navegar até o diretório `/src/` e dar o comando `npm install` para que os pacotes do Grunt definidos no package.json sejam instalado em seu projeto.

Após concluir a instalação para compilar o Sass, navegue até a pasta `/src/` e execute os comandos a partir deste diretório.

## Compilando Arquivos:

Utilize os comandos em seu terminal, a partir do diretório `/src/`.

### grunt sass

Com o Grunt, os pacotes e o Sass instalados, você pode rodar `grunt sass` para compilar os seus arquivos Sass imediatamente.

### grunt watch

Se você quiser manter os seus arquivos compilando continuamente a cada salvamento, você pode rodar `grunt watch`.

### grunt watch:sass

`grunt watch`irá executar diversas tarefas, não apenas a compilação do Sass em CSS. Caso você queira restringir o watch para a tarefa de compilação do Sass, utilize `grunt watch:sass`.

## Opções

### Style

Por padrão o estilo de compressão é `compressed` que irá gerar o seu CSS comprimido. Para alterar isso, é possível modificar o parâmetro da tarefa `sass` no Gruntfile.js.

[Mais sobre os parâmetros permitidos em style](https://github.com/gruntjs/grunt-contrib-sass#style)

### Compass

Caso você queira utilizar o Compass, é preciso adicionar a opção `compass: true` nas `options`da tarefa `sass` no Gruntfile.js.

### Mais opções

Para mais opções e informações, veja o projeto do [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass).

## Estrutura de Arquivos:

Os arquivos do Odin no Sass estão estruturados da seguinte forma

```
sass/
├── style.scss (Arquivo para desenvolvimento)
├── bootstrap/ (Arquivos do Bootstrap Sass)
├── odin/
│   └── _core.scss (Estilos para compatibilidade de elementos do WordPress/Bootstrap)
└── wordpress/
    └── _wordpress.scss (Estilos para classes padrão do WordPress)
```

## Código Fonte

Os arquivos Sass estão localizados em [/assets/sass/](https://github.com/wpbrasil/odin/tree/master/assets/sass).
