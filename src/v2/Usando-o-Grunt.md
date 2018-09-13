# Utilizando Grunt com Odin

## O que é Grunt?

Grunt é um automatizador de tarefas. No Odin você pode utilizá-lo para fazer deploy do seu site, minificar imagens, compilar Sass, dentre outras tarefas.

Caso você queira conhecer um pouco mais sobre o Grunt, veja este artigo da [Volts](http://www.voltsdigital.com.br/labs/gruntjs-por-onde-comecar/), ou veja o [site do projeto](http://gruntjs.com/)

### Instalando o Node

Antes de Iniciar o Grunt é necessário ter o [Node.js](http://nodejs.org/) instalado. Baixe o programa e instale-o em seu computador.

### Instalando o Grunt

---

1. Instale `grunt-cli` globalmente (disponível a partir de todos os diretórios de seu sistema operacional) com `npm install -g grunt-cli`.
2. Navegue até o diretório `wp-content/themes/odin-master/src`, e execute `npm install`. Esse comando irá instalar todas as dependências definidas no arquivo package.json, possibilitando a execução das tarefas do Grunt definidas no Odin.

Observe que foi instalado o grunt-cli e não o grunt. Isso permite que você tenha versões diferentes do Grunt rodando para vários projetos sem maiores problemas.

### Comandos disponíveis

---

### Compilando CSS e JS - `grunt`

O comando `grunt` vai compilar todos os arquivos Sass fazer o lint dos scritps, concatenar e minificar os mesmos.

#### Acompanhando as mudanças - `grunt w`

`grunt w` ficará observando os arquivos do Sass, e as tarefas do JShint e Ugilfy. Caso alguma alteração seja feita ela será recompilada automaticamente.

#### Minificando Imagens - `grunt o`

`grunt o` vai minificar todos os arquivos .JPG, .PNG e .GIF do tema.

#### Fazendo deploy via FTP - `grunt f`

`grunt f` vai subir os arquivos do Odin via ftp para o seu servidor, mas para isso é necessário configurar os dados no arquivo `Gruntfile.js` e `.ftppass`.

Crie um arquivo chamado .ftppass na pasta `wp-content/themes/odin-master/src` com a seguinte estrutura:

```
{
  "key_for_deploy": {
    "username": "username",
    "password": "password"
  }
}
```

Em seguida, procure a tarefa `ftp-deploy` no arquivo `Gruntfile.js` e edite as seguintes informações:

**host:** _informe o endereço ftp do seu host_  
**dest:** _informe o path da pasta onde está o Odin dentro de `wp-content/themes/`_

#### Fazendo deploy via RSYNC - `grunt r`

Também é possível fazer o deploy do tema com rsync para o seu servidor. Para isso será necessário configurar as informações do servidor.

No arquivo `Gruntfile.js` procure a task `rsync` e configure as informações abaixo:

**host:** _insira seu usuario@host.com_

Você poderá configurar os dados tanto para um servidor de testes quanto para o servidor de produção.

#### Compilando CSS, JS e criando arquivo .zip `grunt c`

Este comando executa as mesmas tarefas de `grunt` e cria um arquivo .zip na raiz do tema com os arquivos.
