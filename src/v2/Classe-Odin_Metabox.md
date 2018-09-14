# Metaxboxes/Opções para posts/páginas

Criar **metaboxes** sempre foi uma tarefa demorada e chata, entretanto no Odin é possível criar de forma bem simples utilizando a classe `Odin_Metabox`.

## Instalação

Adicione a seguinte linha no functions.php do seu tema:

```php
require_once get_template_directory() . '/core/classes/class-metabox.php';
```

## Criando um Metabox

Você deve instanciar a classe para criar o _metabox_ da seguinte forma:

```php
$videos_metabox = new Odin_Metabox(
    'videos', // Slug/ID do Metabox (obrigatório)
    'Videos Configurações', // Nome do Metabox  (obrigatório)
    'post', // Slug do Post Type, sendo possível enviar apenas um valor ou um array com vários (opcional)
    'normal', // Contexto (opções: normal, advanced, ou side) (opcional)
    'high' // Prioridade (opções: high, core, default ou low) (opcional)
);
```

## Adicionando campos no Metabox

Adicione os campos utilizando o método `set_fields()` como por exemplo:

```php
$videos_metabox->set_fields(
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

Como é possível ver no exemplo, é necessário criar um _array_ que irá conter os campos do nosso _Metabox_.  
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
    'type'        => 'input', // Obrigatório
    'default'     => 'Default text', // Opcional
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'type'     => 'email',
        'required' => 'required',
        'class'    => 'regular-text',
        'style'   => 'background: #444;'
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
    'default'     => 'no', // Opcional (utilize 'yes' para deixar marcado como padrão)
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
<?php echo wpautop( do_shortcode( get_post_meta( $post->ID,'your_id_name', true ); ) ); ?>
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

Cria um campo vazio que possui apenas título (serve para criar uma espécie de seção dentro do Metabox).

```php
array(
    'id'   => 'your_id_name', // Obrigatório
    'label'=> __( 'Text Example', 'odin' ), // Obrigatório
    'type' => 'title', // Obrigatório
)
```

#### separator

Cria um separador entre os campos (ajuda com a criação de sessões dentro do Metabox).

```php
array(
    'id'   => 'separator1', // Obrigatório
    'type' => 'separator' // Obrigatório
)
```

## Utilizando os campos do Metabox no seu tema

Para recuperar a informação de um campo do _Metabox_ use a função [`get_post_meta()`](http://codex.wordpress.org/Function_Reference/get_post_meta);

Exemplo para pegar o valor do _Metabox_ `your_id_name` dentro de um loop:

```php
<?php get_post_meta( $post->ID,'your_id_name', true ); ?>
```

## Adicionando um campo como uma coluna no post type

É possível transformar um campo numa coluna do post type utilizando o atributo **add_column**, veja um exemplo abaixo:

```php
array(
    'id'          => 'test_text', // Obrigatório
    'label'       => __( 'Test Text', 'odin' ), // Obrigatório
    'type'        => 'text', // Obrigatório
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
    'add_column'  => true,
)
```

Esse exemplo acima vai gerar a seguinte coluna:

![image](https://user-images.githubusercontent.com/1139893/45570827-81cb5300-b83a-11e8-8225-e8ef08051fcf.png)

## Actions da classe

Nesta classe temos 7 actions que são:

- odin_metabox_container_before_SLUG
- [odin_metabox_wrap_before_SLUG](#wiki-odin_metabox_wrap_before_slug)
- odin_metabox_field_title_SLUG
- odin_metabox_field_before_SLUG
- odin_metabox_field_after\_\_SLUG
- [odin_metabox_wrap_after_SLUG](#wiki-odin_metabox_wrap_after_slug)
- odin*metabox_container_after*

### odin_metabox_wrap_before_SLUG

Este action funciona antes da tabela que exibe os campos que foram configurados para o Metabox.
Você deve trocar o SLUG pelo Slug/ID do Metabox.

Exemplo:

```php
/**
 * Exemplo do action odin_metabox_wrap_before_SLUG
 *
 * @param  int    $post_id ID do post.
 *
 * @return string          Mensagem.
 */
function odin_metabox_wrap_before_video( $post_id ) {
    echo '<p>' . __( 'Olá mundo, aqui é o começo da tabela', 'odin' ) . '</p>';
}

add_action( 'odin_metabox_wrap_before_video', 'odin_custom_metabox_wrap_before_video' );
```

#### odin_metabox_wrap_after_SLUG

Este action funciona depois da tabela que exibe os campos que foram configurados para o Metabox.
Você deve trocar o SLUG pelo Slug/ID do Metabox.

Exemplo:

```php
/**
 * Exemplo do action odin_metabox_wrap_after_SLUG
 *
 * @param  int    $post_id ID do post.
 *
 * @return string          Mensagem.
 */
function odin_custom_metabox_wrap_after_video( $post_id ) {
    echo '<p>' . __( 'Olá mundo, aqui é o final da tabela', 'odin' ) . '</p>';
}

add_action( 'odin_metabox_wrap_after_video', 'odin_custom_metabox_wrap_after_video' );
```

#### odin_metabox_field_SLUG

Utilize este action para adicionar campos personalizados.  
Você deve trocar o SLUG pelo Slug/ID do Metabox.

Exemplo de como funciona o hook:

```php
/**
 * Exemplo de campo personalizado no Odin.
 *
 * @param  string $type    Nome do tipo de campo.
 * @param  string $id      ID do campo.
 * @param  string $current Valor salvo
 * @param  string $options Opções (opcional)
 *
 * @return string          HTML do campo.
 */
function odin_custom_metabox_fields( $type, $id, $current, $options ) {
    // Exemplo HTML5 email:
    if ( 'email' == $type ) {
        echo sprintf( '<input type="email" id="%1$s" name="%1$s" value="%2$s" />', $id, esc_attr( $current ) );
    }
}

// Observe como deve ser o hook para o metabox com id "videos":
add_action( 'odin_metabox_field_videos', 'odin_custom_metabox_fields', 1, 4 );
// "1" marca a prioridade do Metaboxs e o valor "4" a quantidade de argumentos do metaboxs.
// Observe que pegamos 4 argumentos: $type, $id, $current e $options.
```

## Exemplo

Veja exatamente como criar um metabox em seu tema (bónus campos do HTML5).

```php
// Include the Odin_Metabox class.
require_once get_template_directory() . '/core/classes/class-metabox.php';

function video_metabox_example() {

    $videos_metabox = new Odin_Metabox(
        'videos', // Slug/ID of the Metabox (Required)
        'Videos Configuration', // Metabox name (Required)
        'post', // Slug of Post Type (Optional)
        'normal', // Context (options: normal, advanced, or side) (Optional)
        'high' // Priority (options: high, core, default or low) (Optional)
    );

    $videos_metabox->set_fields(
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
                // 'default'    => 'no', // Optional ('yes' for checked)
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
                'id'          => 'test_input_generic', // Required
                'label'       => __( 'Test Input', 'odin' ), // Required
                'type'        => 'some_type_input', // Required
                // 'default'  => 'Default text', // Optional
                'description' => __( 'Textaera field description', 'odin' ), // Optional
                'attributes'  => array( // Optional (html input elements)

                )
            ),
            // Separator.
            array(
                'id'   => 'separator1', // Obrigatório
                'type' => 'separator' // Obrigatório
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

add_action( 'init', 'video_metabox_example', 1 );
```

## Screenshot

![odin_metabox](https://cloud.githubusercontent.com/assets/1139893/4895898/a37701da-63f1-11e4-8fde-aa80b2df424e.png)

## Código fonte

`Odin_Metabox` esta localizado em [`core/classes/class-metabox.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-metabox.php).
