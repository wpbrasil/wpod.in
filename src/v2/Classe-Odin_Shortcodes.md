# Shortcodes integrados

## Instalação:

Adicione a seguinte linha em seu `functions.php`

```php
require_once get_template_directory() . '/core/classes/class-shortcodes.php';
```

## Bootstrap Shortcodes:

O Odin possui o [Bootstrap 3](http://getbootstrap.com) implementado. Preparamos shortcodes com os principais componentes do bootstrap para facilitar o desenvolvimento.

Caso não conheça os componentes em questão, visite a [documentação do Bootstrap](http://getbootstrap.com/getting-started/) para ter uma explicação detalhada sobre cada um deles.

Também é possível utilizar os shortcodes sem o bootsrap, mas lembre-se que neste caso **você precisará implementar as classes do CSS** manualmente.

### Botões

```
[button]Text[/button]
```

**Parametros:**

- `type` tipo do botão, aceita os valores: `default`, `primary`, `success`, `info`, `warning`, `danger` e `link`.
- `size` define o tamanho, aceita os valores: `lg`, `sm` e `xs`.
- `link` aceita a entrada de uma URL/Link.
- `class` permite que adicione classes no botão.
- `tooltip` permite adicionar um texto que irá aparecer como tooltip.
- `direction` funciona apenas com tooltip e serve para definir a posição que irá aparecer, aceita os valores: `top`, `right`, `left`, `bottom`.

**Exemplo:**

### Grupo de botões

```
[button_group][button]Text[/button][button]Text[/button][/button_group]
```

**Parametros:**

- `type` tipo do grupo, aceita os valores: `group` e `vertical`.
- `size` define o tamanho dos botões, aceita os valores: `lg`, `sm` e `xs`.
- `justified` faz com que o tamanho dos botões ocupem toda a área na horizontal, é booleano, aceita `true`.

### Alertas:

```
[alert]Message[/alert]
```

**Parametros:**

- `type` tipo do alerta, aceita os valores: `success`, `info`, `warning` e `danger`.
- `close` adiciona um botão para fechar o alerta, é booleano, aceita `true`.

### Etiquetas:

```
[label]Message[/label]
```

**Parametros:**

- `type` tipo do label, aceita os valores: `default`, `primary`, `success`, `info`, `warning` e `danger`.

### Badges:

```
[badge]123[/badge]
```

### Icons:

```
[icon type="adjust"]
```

**Parametros:**

- type tipo do ícone, aceita os valores:
- `adjust`
- `align-center`
- `align-justify`
- `align-left`
- `align-right`
- `arrow-down`
- `arrow-left`
- `arrow-right`
- `arrow-up`
- `asterisk`
- `backward`
- `ban-circle`
- `barcode`
- `bell`
- `bold`
- `book`
- `bookmark`
- `briefcase`
- `bullhorn`
- `calendar`
- `camera`
- `certificate`
- `check`
- `chevron-down`
- `chevron-left`
- `chevron-right`
- `chevron-up`
- `circle-arrow-down`
- `circle-arrow-left`
- `circle-arrow-right`
- `circle-arrow-up`
- `cloud`
- `cloud-download`
- `cloud-upload`
- `cog`
- `collapse-down`
- `collapse-up`
- `comment`
- `compressed`
- `copyright-mark`
- `credit-card`
- `cutlery`
- `dashboard`
- `download`
- `download-alt`
- `earphone`
- `edit`
- `eject`
- `envelope`
- `euro`
- `exclamation-sign`
- `expand`
- `export`
- `eye-close`
- `eye-open`
- `facetime-video`
- `fast-backward`
- `fast-forward`
- `file`
- `film`
- `filter`
- `fire`
- `flag`
- `flash`
- `floppy-disk`
- `floppy-open`
- `floppy-remove`
- `floppy-save`
- `floppy-saved`
- `folder-close`
- `folder-open`
- `font`
- `forward`
- `fullscreen`
- `gbp`
- `gift`
- `glass`
- `globe`
- `hand-down`
- `hand-left`
- `hand-right`
- `hand-up`
- `hd-video`
- `hdd`
- `header`
- `headphones`
- `heart`
- `heart-empty`
- `home`
- `import`
- `inbox`
- `indent-left`
- `indent-right`
- `info-sign`
- `italic`
- `leaf`
- `link`
- `list`
- `list-alt`
- `lock`
- `log-in`
- `log-out`
- `magnet`
- `map-marker`
- `minus`
- `minus-sign`
- `move`
- `music`
- `new-window`
- `off`
- `ok`
- `ok-circle`
- `ok-sign`
- `open`
- `paperclip`
- `pause`
- `pencil`
- `phone`
- `phone-alt`
- `picture`
- `plane`
- `play`
- `play-circle`
- `plus`
- `plus-sign`
- `print`
- `pushpin`
- `qrcode`
- `question-sign`
- `random`
- `record`
- `refresh`
- `registration-mark`
- `remove`
- `remove-circle`
- `remove-sign`
- `repeat`
- `resize-full`
- `resize-horizontal`
- `resize-small`
- `resize-vertical`
- `retweet`
- `road`
- `save`
- `saved`
- `screenshot`
- `sd-video`
- `search`
- `send`
- `share`
- `share-alt`
- `shopping-cart`
- `signal`
- `sort`
- `sort-by-alphabet`
- `sort-by-alphabet-alt`
- `sort-by-attributes`
- `sort-by-attributes-alt`
- `sort-by-order`
- `sort-by-order-alt`
- `sound-5-1`
- `sound-6-1`
- `sound-7-1`
- `sound-dolby`
- `sound-stereo`
- `star`
- `star-empty`
- `stats`
- `step-backward`
- `step-forward`
- `stop`
- `subtitles`
- `tag`
- `tags`
- `tasks`
- `text-height`
- `text-width`
- `th`
- `th-large`
- `th-list`
- `thumbs-down`
- `thumbs-up`
- `time`
- `tint`
- `tower`
- `transfer`
- `trash`
- `tree-conifer`
- `tree-deciduous`
- `unchecked`
- `upload`
- `usd`
- `user`
- `volume-down`
- `volume-off`
- `volume-up`
- `warning-sign`
- `wrench`
- `zoom-in`
- `zoom-out`

### Wells:

```
[well]Content[/well]
```

**Parametros:**

- `size` define o tamanho dos botões, aceita os valores: `lg` e `sm`.

### Tabelas:

```
[table cols="#,Table heading" rows="1,Table cell"]
```

**Parametros:**

- `type` define o tipo de tabela, aceita os valores: `striped`, `hover`, `condensed` e `responsive`.
- `border` adiciona borda na tabela, é booleano aceitando `border`
- `cols` lista dos títulos das colunas separados por `,` (virgula)
- `rows` lista de linhas de cada coluna separado por `|` (pipe) e cada item de lista separado por `,` (virgula)

### Grids:

```
[row]
[col class="col-md-6"]Content left[/col]
[col class="col-md-6"]Content right[/col]
[/row]
```

**Parametros:**

- row **_não recebe parametros_**
- col
- `class` recebe classes de grids do Twitter Bootstrap

### Progress Bar:

```
[progress]
```

**Parametros:**

- `type` define o tipo de barra, aceita os valores: `success`, `info`, `warning` e `danger`.
- `class` permite adicionar classes na barra, por exemplo: `progress-striped` e `active`.
- `value` define o valor em qual a barra deve estar preenchida em porcentagem, o padrão é `50` para 50%.
- `max` define o valor máximo de preenchimento da barra, o padrão é `100`.
- `min` define o valor mínimo de preenchimento da barra, o padrão é `0`.

### Painéis:

```
[panel][panel_body]Content[/panel_body][/panel]
```

**Parametros:**

- panel:
- `type` define o tipo de painel, aceita os valores: `default`, `primary`, `success`, `info`, `warning` e `danger`.

### Abas:

```
[tabs]
[tab id="id" active="true"]Title[/tab]
[/tabs]
[tab_contents]
[tab_content id="id" active="true"]
Content
[/tab_content]
[/tab_contents]
```

**Parametros:**

- tabs **_não recebe parametros_**
- tab
- `title` define o nome do conjunto de abas.
- tab*contents \*\*\_não recebe parametros*\*\*
- tab_content
- `id` define o ID do conteúdo da aba (precisa ser o mesmo adicionado na aba).
- `active` campo booleano que define qual conteúdo de aba será marcada como ativo.

### Accordion:

```
[accordions id="my-accordion"]
[accordion id="my-accordion" title="title"]
Content
[/accordion]
[accordion id="my-accordion" title="title"]
Content
[/accordion]
[/accordions]
```

**Parametros:**

- accordions
- `id` define ID da sanfona, o padrão é `odin-accordion`.
- accordion
- `id` deve ser o mesmo ID da sanfona, o padrão é `odin-accordion`.
- `title` define o título da sanfona.
- `type` define o tipo de sanfona, aceita os valores: `default`, `primary`, `success`, `info`, `warning` e `danger`.
- `active` campo booleano que define qual aba será marcada como ativa

### Tooltips:

```
[tooltip title="Text"]Content[/tooltip]
```

**Parametros:**

- `title` define o conteúdo que será usado no tooltip.
- `link` define o link/URL do tooltip, o padrão é `#`.
- `direction` define a posição que o tooltip irá aparecer, aceita os valores: `top`, `right`, `left` e `bottom`, o `padrão` e `top`.

## Google Shortcodes

### Mapas:

```
[map]
```

**Parametros:**

- id configura o ID do mapa (útil apenas quando é necessário mais de um mapa na mesma página), o padrão é `odin_gmap`.
- `latitude` define a latitude da localização no mapa, o padrão é `0`.
- `longitude` define a longitude da localização no mapa, o padrão é `0`.
- `zoom` define o zoom do mapa, o padrão é `10`.
- `width` define a largura do mapa, o padrão é `600`.
- `height` define a altura do mapa, o padrão é `400`.
- `maptype` define o tipo de mapa, aceita os valores `ROADMAP`, `SATELLITE`, `HYBRID` e `TERRAIN`, o padrão é `ROADMAP`.
- `address` utilizado no lugar de latitude e longitude, define o endereço no formato de texto.
- `kml` aceita o link/URL de um arquivo em KML.
- `kmlautofit` campo booleano que força o zoom sobrescrever o zoom do arquivo KML.
- `marker` campo booleano que ativa o marcador da posição do mapa, o padrão é `false`.
- `markerimage` usado para definir um link/URL de imagem para ser utilizado como `marcador, funciona apenas com o marker como true.
- `traffic` campo booleano que pode exibir o tráfego no mapa, o padrão é `false`.
- `bike` campo booleano que pode exibir as rodas para bicicletas no mapa, o padrão é `false`.
- `fusion` define um ID de um “Fusion Table Layer“, o padrão é `vazio(null)`.
- `infowindow` define um texto que aparece ao clicar no marcador, funciona apenas com o marker como true.
- `infowindowdefault` campo booleano que abre a caixa de texto de infowindow ao carregar o mapa (sem precisar de clique), o padrão é false, funciona apenas com o marker como true e com o infowindow.
- `hidecontrols` campo booleano que desativa os controles do mapa, o padrão é `false`.
- `scale` campo booleano que desativa a escala do mapa, o padrão é `false`.
- `scrollwheel` opção booleana que ativa ou desativa o scroll do mouse para dar zoom no mata, o padrão é `true`.

## Helpers

### Clear:

Adiciona um `<br class="clear" />` no conteúdo para limpar o efeito do CSS float.

```
[clear]
```

### QR Code:

Cria um QR Code utilizando o [goqr.me](http://goqr.me/).

```
[qrcode data="Text"]
```

**Parametros:**

- `data` define o conteúdo que será usado para criar o QR Code, podendo ser um texto ou até mesmo um link.
- `size` define o tamanho do QR Code, o padrão é `150x150`.
- `title` configura um título para a imagem do QR Code.

## Código fonte:

`Odin_Shortcodes` esta localizado em [core/classes/class-shortcodes.php.](https://github.com/wpbrasil/odin/blob/master/core/classes/class-shortcodes.php)
