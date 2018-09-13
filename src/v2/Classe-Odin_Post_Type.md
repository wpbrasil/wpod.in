# Custom Post Types/Tipos de conteúdo

Para facilitar a criação de **tipos de conteúdo** (Post Type) criamos a classe `Odin_Post_Type` para auxiliar a construção.

## Instalação:

Adicione a seguinte linha em seu `functions.php`:

```php
require_once get_template_directory() . '/core/classes/class-post-type.php';
```

## Criando um Post Type

Devemos instanciar a classe para criar os Post Types:

```php
$video = new Odin_Post_Type(
    'Video', // Nome (Singular) do Post Type.
    'video' // Slug do Post Type.
);
```

Com apenas isso é possível criar um Post Type que irá ter os seguintes argumentos:

```php
$args = array(
    'hierarchical'        => false,
    'supports'            => array( 'title', 'editor', 'thumbnail', 'comments', 'revisions' ),
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => false,
    'publicly_queryable'  => true,
    'exclude_from_search' => false,
    'has_archive'         => true,
    'query_var'           => true,
    'can_export'          => true,
    'rewrite'             => true,
    'capability_type'     => 'post'
);
```

## Configurando os títulos ($labels):

É possível alterar os $labels utilizando o método `set_labels()`:

```php
$video->set_labels(
    array(
        'menu_name' => __( 'Meus Videos', 'odin' )
    )
);
```

São aceitos todos os $labels da função [`register_post_type()`](http://codex.wordpress.org/Function_Reference/register_post_type#Arguments).

## Configurando os argumentos:

Também é possível modificar os argumentos ao seu gosto utilizando o método `set_arguments()`:

```php
$video->set_arguments(
    array(
        'supports' => array( 'title', 'editor', 'thumbnail' )
    )
);
```

No exemplo acima, os "supports" foram modificados para ter apenas "title", "editor" e "thumbnail". Você pode utilizar isso para adicionar ou alterar qualquer argumento do Post Type.

São aceitos todos os argumentos da função [`register_post_type()`](http://codex.wordpress.org/Function_Reference/register_post_type#Arguments).

#### Adicionando ícones para o Post Type no wp-admin:

O `set_arguments()` permite utilizar qualquer um dos argumentos disponíveis para a função [`register_post_type()`](http://codex.wordpress.org/Function_Reference/register_post_type#Arguments).

Portanto, vamos utilizar o argumento `'menu_icon'`, para definir um ícone para o novo Post Type no menu do wp-admin.

Para isso, usamos uma url completa de algum ícone, ou qualquer um dos nomes dos [WordPress DashIcons](https://developer.wordpress.org/resource/dashicons).

```php
$video->set_arguments(
    array(
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'menu_icon' => 'dashicons-format-video'
    )
);
```

Adicionamos [este ícone](https://developer.wordpress.org/resource/dashicons/#format-video), com nome `dashicons-format-video`, para o Post Type Vídeo.

## Exemplo completo

Exemplo de como utilizar e funcionar corretamente as traduções:

```php
function odin_video_cpt() {
    $video = new Odin_Post_Type(
        'Video', // Nome (Singular) do Post Type.
        'video' // Slug do Post Type.
    );

    $video->set_labels(
        array(
            'menu_name' => __( 'Meus Videos', 'odin' )
        )
    );

    $video->set_arguments(
        array(
            'supports' => array( 'title', 'editor', 'thumbnail' )
        )
    );
}

add_action( 'init', 'odin_video_cpt', 1 );
```

## Código fonte:

Odin_Post_Type esta localizado em [`core/classes/class-post-type.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-post-type.php).
