# Opções para perfis de usuários

Criar **user metas** sempre foi uma tarefa demorada e chata, entretanto no Odin é possível criar de forma bem simples utilizando a classe `Odin_User_Meta`.

## Instalação

Adicione a seguinte linha no functions.php do seu tema:

```php
require_once get_template_directory() . '/core/classes/class-user-meta.php';
```

## Criando um User Meta

Você deve instanciar a classe para criar o _user meta_ da seguinte forma:

```php
$adicionais_user_meta = new Odin_User_Meta(
    'adicionais', // Slug/ID do User Meta (obrigatório)
    'Informações Adicionais' // Nome do User Meta  (obrigatório)
);
```

## Adicionando campos User Meta

Adicione os campos utilizando o método `set_fields()` como por exemplo:

```php
$adicionais_user_meta->set_fields(
    array(
        array(
            'id'          => 'test_text',
            'label'       => __( 'Test Text', 'odin' ),
            'type'        => 'text',
            'description' => __( 'Descrição do campo de text', 'odin' )
        )
    )
);
```

Como é possível ver no exemplo, é necessário criar um _array_ que irá conter os campos do nosso _User Meta_.  
Tipos de campo:

### Estão disponível os seguintes tipos de campo

- [text](#wiki-text)
- [textarea](#wiki-textarea)
- [input](#wiki-input)
- [checkbox](#wiki-checkbox)
- [select](#wiki-select)
- [radio](#wiki-radio)
- [editor](#wiki-editor)
- [image](#wiki-image)
- [image_plupload](#wiki-image_plupload)
- [upload](#wiki-upload)
- [color](#wiki-color)
- [title](#wiki-title)
- [separator](#wiki-separator)

#### text

Cria um campo comum de texto.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'text', // Obrigatório
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

#### textarea

Cria um campo de múltiplas linhas de texto.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'textarea', // Obrigatório
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

#### input

Cria um campo input em HTML que aceita os tipos do HTML5.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'field', // Obrigatório
    'default'     => 'Default text', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'type'     => 'email',
        'required' => 'required',
        'class'    => 'regular-text',
        'styles'   => 'background: #444;'
    )
)
```

#### checkbox

Cria um campo de checkbox.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'checkbox', // Obrigatório
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => '', // Opcional (utilize 1 para deixar marcado como padrão)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

#### select

Cria um campo de select.

```php
array(
    'id'            => 'your_id_name', // Obrigatório
    'label'         => __( 'Text Example', 'odin' ), // Obrigatório
    'type'          => 'select', // Obrigatório
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'       => 'three', // Opcional
    'description'   => __( 'Descrition Example', 'odin' ), // Opcional
    'options'       => array( // Obrigatório (adicione aque os ids e títulos)
        'one'   => 'One',
        'two'   => 'Two',
        'three' => 'Three',
        'four'  => 'Four'
    ),
)
```

#### radio

Cria um campo de radio.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'radio', // Obrigatório
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => 'three', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
    'options'     => array( // Obrigatório (adicione aque os ids e títulos)
        'one'   => 'One',
        'two'   => 'Two',
        'three' => 'Three',
        'four'  => 'Four'
    ),
)
```

#### editor

Cria um campo com editor de texto.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'editor', // Obrigatório
    'default'     => 'Default text', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
    'options'     => array( // Opcional (aceita argumentos do wp_editor)
        'textarea_rows' => 10
    ),
)
```

Veja a lista de argumentos aceitos em `'options'` em [`wp_editor`](http://codex.wordpress.org/Function_Reference/wp_editor#Arguments).

Para utilizar este campo no seu tema é necessário utilizar a seguinte função:

```php
<?php echo wpautop( do_shortcode( get_user_meta( $user->ID,'your_id_name', true ); ) ); ?>
```

Desta forma a formação irá aparecer corretamente e também será possível usar shortcodes no editor.

#### image

Cria um campo para upload de imagem.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'image', // Obrigatório
    'default'     => '', // Opcional (deve ser o id de uma imagem em mídia)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

Este campo salva apenas o ID da imagem e não o seu caminho completo. Sendo possível recuperar as informações das imagens utilizando as seguintes funções:

- [wp_get_attachment_image()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_image)
- [wp_get_attachment_image_src()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_image_src)
- [wp_get_attachment_metadata()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_metadata)

Entre outras funções nativas do WordPress.

#### image_plupload

Cria um campo para múltiplo upload de imagens.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'image_plupload', // Obrigatório
    'default'     => '', // Opcional (deve ser o id de uma imagem em mídias, separe os ids com virtula)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

Este campo salva os ids das imagens, separando cada um por virgula.

No seu tema é necessário converter essa informação para um _array_ e assim utilizar as funções mostradas no campo image.  
Veja um exemplo de como utilizar:

```php
foreach ( explode( ',', $gallery ) as $image_id ) {
    // Sua mágica aqui!
}
```

#### upload

Cria um campo de upload de arquivo.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'upload', // Obrigatório
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => '', // Opcional (url de um arquivo)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

Diferente dos campos de `image` e `image_plupload` este campo salva a url do arquivo.

#### color

Cria um campo de seleção de cor.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'color', // Obrigatório
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => '#ffffff', // Opcional (cor em hexadecimal)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

#### title

Cria um campo vazio que possui apenas título (serve para criar uma espécie de seção dentro dos User Metas).

```php
array(
    'id'   => 'your_id_name', // Obrigatório
    'label'=> __( 'Text Example', 'odin' ), // Obrigatório
    'type' => 'title', // Obrigatório
)
```

#### separator

Cria um separador entre os campos (ajuda com a criação de sessões dentro dos User Metas).

```php
array(
    'id'   => 'separator1', // Obrigatório
    'type' => 'separator' // Obrigatório
)
```

## Utilizando os campos de User Meta no seu tema

Para recuperar a informação de um campo do _User Meta_ use a função [`get_user_meta()`](https://codex.wordpress.org/Function_Reference/get_user_meta);

Exemplo para pegar o valor do _User Meta_ `your_id_name`:

```php
<?php get_user_meta( $user->ID,'your_id_name', true ); ?>
```

## Exemplo

Veja exatamente como criar um metabox em seu tema (bónus campos do HTML5).

```php
require_once get_template_directory() . '/core/classes/class-user-meta.php';

function user_meta_example() {
    $user_meta = new Odin_User_Meta(
        'aditional-info', // Slug/ID do User Meta (obrigatório)
        __( 'Aditional Information', 'odin' ) // Nome do User Meta (obrigatório)
    );

    $user_meta->set_fields(
        array(
            /**
             * Default input examples.
             */

            // Text Field.
            array(
                'id'         => 'test_text', // Required
                'label'      => __( 'Test Text', 'odin' ), // Required
                'type'       => 'text', // Required
                'attributes' => array( // Optional (html input elements)
                    'placeholder' => __( 'Some text here!' )
                ),
                // 'default'  => 'Default text', // Optional
                'description' => __( 'Text field description', 'odin' ) // Optional
            ),
            // Textarea Field.
            array(
                'id'          => 'test_textarea', // Required
                'label'       => __( 'Test Textarea', 'odin' ), // Required
                'type'        => 'textarea', // Required
                'attributes'  => array( // Optional (html input elements)
                    'placeholder' => __( 'Some text here!' )
                ),
                // 'default'  => 'Default text', // Optional
                'description' => __( 'Textaera field description', 'odin' ) // Optional
            ),
            // Checkbox field.
            array(
                'id'          => 'test_checkbox', // Required
                'label'       => __( 'Test Checkbox', 'odin' ), // Required
                'type'        => 'checkbox', // Required
                // 'attributes' => array(), // Optional (html input elements)
                // 'default'    => '', // Optional (1 for checked)
                'description' => __( 'Checkbox field description', 'odin' ), // Optional
            ),
            // Select field.
            array(
                'id'          => 'test_select', // Required
                'label'       => __( 'Test Select', 'odin' ), // Required
                'type'        => 'select', // Required
                // 'attributes' => array(), // Optional (html input elements)
                // 'default'    => 'three', // Optional
                'description' => __( 'Select field description', 'odin' ), // Optional
                'options' => array( // Required (id => title)
                    'one'   => 'One',
                    'two'   => 'Two',
                    'three' => 'Three',
                    'four'  => 'Four'
                ),
            ),
            // Radio field.
            array(
                'id'          => 'test_radio', // Required
                'label'       => __( 'Test Radio', 'odin' ), // Required
                'type'        => 'radio', // Required
                // 'attributes' => array(), // Optional (html input elements)
                // 'default'    => 'three', // Optional
                'description' => __( 'Radio field description', 'odin' ), // Optional
                'options' => array( // Required (id => title)
                    'one'   => 'One',
                    'two'   => 'Two',
                    'three' => 'Three',
                    'four'  => 'Four'
                ),
            ),
            // Editor field.
            array(
                'id'          => 'test_editor', // Required
                'label'       => __( 'Test Editor', 'odin' ), // Required
                'type'        => 'editor', // Required
                // 'default'     => 'Default text', // Optional
                'description' => __( 'Editor field description', 'odin' ), // Optional
                'options'     => array( // Optional
                    // Arguments of wp_editor().
                    // See more http://codex.wordpress.org/Function_Reference/wp_editor
                    'textarea_rows' => 10
                ),
            ),
            // Image field.
            array(
                'id'          => 'test_image', // Required
                'label'       => __( 'Test Image', 'odin' ), // Required
                'type'        => 'image', // Required
                // 'default'     => '', // Optional (image attachment id)
                'description' => __( 'Image field description', 'odin' ), // Optional
            ),
            // Image Plupload field.
            array(
                'id'          => 'test_image_plupload', // Required
                'label'       => __( 'Test Image Plupload', 'odin' ), // Required
                'type'        => 'image_plupload', // Required
                // 'default'     => '', // Optional (image attachment ids separated with comma)
                'description' => __( 'Image Plupload field description', 'odin' ), // Optional
            ),
            // Upload field.
            array(
                'id'          => 'test_upload', // Required
                'label'       => __( 'Test Upload', 'odin' ), // Required
                'type'        => 'upload', // Required
                // 'attributes' => array(), // Optional (html input elements)
                // 'default'    => '', // Optional (file url)
                'description' => __( 'Upload field description', 'odin' ), // Optional
            ),
            // Color field.
            array(
                'id'          => 'test_color', // Required
                'label'       => __( 'Test Color', 'odin' ), // Required
                'type'        => 'color', // Required
                // 'attributes' => array(), // Optional (html input elements)
                'default'     => '#ffffff', // Optional (color in hex)
                'description' => __( 'Color field description', 'odin' ), // Optional
            ),
            // Generic input field.
            array(
                'id'          => 'test_input', // Required
                'label'       => __( 'Test Input', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'Textaera field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)

                )
            ),
            // Title.
            array(
                'id'   => 'test_title', // Required
                'label'=> __( 'Test Title', 'odin' ), // Required
                'type' => 'title', // Required
            ),

            /**
             * HTML 5 examples
             */
            // HTML5 color field.
            array(
                'id'          => 'test_html5_color', // Required
                'label'       => __( 'Test HTML5 color', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 color field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'color'
                )
            ),
            // HTML5 date field.
            array(
                'id'          => 'test_html5_date', // Required
                'label'       => __( 'Test HTML5 date', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 date field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'date'
                )
            ),
            // HTML5 datetime field.
            array(
                'id'          => 'test_html5_datetime', // Required
                'label'       => __( 'Test HTML5 datetime', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 datetime field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'datetime'
                )
            ),
            // HTML5 datetime-local field.
            array(
                'id'          => 'test_html5_datetime_local', // Required
                'label'       => __( 'Test HTML5 datetime-local', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 datetime-local field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'datetime-local'
                )
            ),
            // HTML5 email field.
            array(
                'id'          => 'test_html5_email', // Required
                'label'       => __( 'Test HTML5 email', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 email field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'email'
                )
            ),
            // HTML5 month field.
            array(
                'id'          => 'test_html5_month', // Required
                'label'       => __( 'Test HTML5 month', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 month field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'month'
                )
            ),
            // HTML5 number field.
            array(
                'id'          => 'test_html5_number', // Required
                'label'       => __( 'Test HTML5 number', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 number field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'number',
                    'max'  => 6,
                    'min'  => 1
                )
            ),
            // HTML5 range field.
            array(
                'id'          => 'test_html5_range', // Required
                'label'       => __( 'Test HTML5 range', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 range field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'range',
                    'max'  => 6,
                    'min'  => 1
                )
            ),
            // HTML5 search field.
            array(
                'id'          => 'test_html5_search', // Required
                'label'       => __( 'Test HTML5 search', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 search field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'search'
                )
            ),
            // HTML5 tel field.
            array(
                'id'          => 'test_html5_tel', // Required
                'label'       => __( 'Test HTML5 tel', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 tel field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'tel'
                )
            ),
            // HTML5 time field.
            array(
                'id'          => 'test_html5_time', // Required
                'label'       => __( 'Test HTML5 time', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 time field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'time'
                )
            ),
            // HTML5 url field.
            array(
                'id'          => 'test_html5_url', // Required
                'label'       => __( 'Test HTML5 url', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 url field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'url'
                )
            ),
            // HTML5 week field.
            array(
                'id'          => 'test_html5_week', // Required
                'label'       => __( 'Test HTML5 week', 'odin' ), // Required
                'type'        => 'input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'HTML5 week field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)
                    'type' => 'week'
                )
            ),
        )
    );
}

add_action( 'init', 'user_meta_example', 1 );
```

## Código fonte

`Odin_User_Meta` está localizado em [`core/classes/class-user-meta.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-user-meta.php).
