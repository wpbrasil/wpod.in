# Custom Post Status/Status de posts personalizados

Para facilitar a criação de novos status de posts, criamos a classe `Odin_Post_Status`.

## Instalação

Adicione a seguinte linha em seu `functions.php`:

```php
require_once get_template_directory() . '/core/classes/class-post-status.php';
```

## Criando um Post Status

Devemos instanciar a classe para criar os Post Status:

```php
$args = array(
    'applied_label' => 'Archive',
    'label' => 'Archive',
    'public' => true,
    'exclude_from_search' => false,
    'show_in_admin_all_list'  => true,
    'show_in_admin_status_list' => true,
);

$archive_status = new Odin_Post_Status(
    'archive', // Slug do Post Status (obrigatório)
    array('post'), // Slug do Post Type, sendo possível enviar apenas um valor ou um array com vários (obrigatório)
    $args // Argumentos do register_post_status (obrigatório)
);
```

Com só isso é possível registrar um novo Post Status.

## Código Fonte

Odin_Post_Type esta localizado em [`core/classes/class-post-status.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-post-status.php).
