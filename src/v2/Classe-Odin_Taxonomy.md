# Taxonomias personalizada

Criar **taxonomias** personalizadas no Odin é bem simples ao utilizar a class `Odin_Taxonomy`.

## Instalação

Adicione a seguinte linha no `functions.php` de seu tema:

```php
require_once get_template_directory() . '/core/classes/class-taxonomy.php';
```

## Criando Custom Taxonomies

```php
$video = new Odin_Taxonomy(
    'Categoria', // Nome (Singular) da nova Taxonomia.
    'categoria', // Slug do Taxonomia.
    'post' // Nome do tipo de conteúdo que a taxonomia irá fazer parte.
);
```

Com apenas isso é possível criar um Taxonomia do tipo "categoria" que ira ter os seguintes argumentos:

```php
$args = array(
    'labels'            => $labels,
    'hierarchical'      => true,
    'public'            => true,
    'show_ui'           => true,
    'show_admin_column' => true,
    'show_in_nav_menus' => true,
    'show_tagcloud'     => true,
);
```

## Configurando os títulos ($labels)

É possível alterar os `$labels` utilizando o método `set_labels()`:

```php
$video->set_labels(
    array(
        'menu_name' => __( 'Tipos de vídeo', 'odin' )
    )
);
```

São aceitos todos os `$labels` da função [`register_taxonomy()`](http://codex.wordpress.org/Function_Reference/register_taxonomy#Arguments).

## Configurando os argumentos

Configure os argumentos utilizando método `set_arguments()`:

```php
$video->set_arguments(
    array(
        'hierarchical' => false
    )
);
```

No exemplo acima o "hierarchical" foi alterado para `false`, desta forma a nossa taxonomia terá o formato de "tags".
Você pode utilizar isso para adicionar ou alterar qualquer argumento do Taxonomia.

São aceitos todos os argumentos da função [`register_taxonomy()`](http://codex.wordpress.org/Function_Reference/register_taxonomy#Arguments).

## Exemplo completo

Exemplo de como utilizar e funcionar corretamente as traduções:

```php
function odin_video_taxonomy() {
    $video = new Odin_Taxonomy(
        'Categoria', // Nome (Singular) da nova Taxonomia.
        'categoria', // Slug do Taxonomia.
        'post' // Nome do tipo de conteúdo que a taxonomia irá fazer parte.
    );

    $video->set_labels(
        array(
            'menu_name' => __( 'Tipos de vídeo', 'odin' )
        )
    );

    $video->set_arguments(
        array(
            'hierarchical' => false
        )
    );
}

add_action( 'init', 'odin_video_taxonomy', 1 );
```

## Código fonte

`Odin_Taxonomy` esta localizado em [`core/classes/class-taxonomy.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-taxonomy.php).
