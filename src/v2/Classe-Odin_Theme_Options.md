# Opções para o Tema

É possível construir uma página de _Opções do Tema_ utilizando a classe `Odin_Theme_Options` que pode ser encontrada em `core/classes/class-theme-options.php`.

## Instalação:

Adicione a seguinte linha em seu `functions.php`

```php
require_once get_template_directory() . '/core/classes/class-theme-options.php';
```

## Criando Página:

Devemos instanciar a classe `Odin_Theme_Options`

```php
$odin_theme_options = new Odin_Theme_Options(
    'slug-da-pagina', // Slug/ID da página (Obrigatório)
    __( 'Opções do tema', 'odin' ), // Titulo da página (Obrigatório)
    'manage_options' // Nível de permissão (Opcional) [padrão é manage_options]
);
```

## Criando Abas:

É possível criar quantas abas você quiser na página de opcões:

```php
$odin_theme_options->set_tabs(
    array(
        array(
            'id' => 'odin_general', // ID da aba e nome da entrada no banco de dados.
            'title' => __( 'Configurações', 'odin' ), // Título da aba.
        ),
        array(
            'id' => 'odin_adsense',
            'title' => __( 'Adsense', 'odin' )
        )
    )
);
```

## Criando campos na página:

Utilize do `$set->fields` para criar todos os campos da página.

Será necessário criar um array que irá conter as sessões de cada aba.

Cada sessão irá indicar qual é a sua aba utilizando `tab`, depois informar seu título com `title` e finalmente suas opções com `options`.

```php
$odin_theme_options->set_fields(
    array(
        'general_section' => array(
            'tab'   => 'odin_general', // Sessão da aba odin_general
            'title' => __( 'Section Example', 'odin' ),
            'fields' => array(
                array(
                    'id' => 'field1',
                    'label' => __( 'Field 1', 'odin' ),
                    'type' => 'text',
                    'default' => 'Hello world',
                    'description' => __( 'Descrition Example', 'odin' )
                ),
                array(
                    'id' => 'field2',
                    'label' => __( 'Field 2', 'odin' ),
                    'type' => 'text'
                )
            )
        ),
        'adsense_top_section' => array(
            'tab'   => 'odin_adsense', // Sessão da aba odin_adsense
            'title' => __( 'Blocos Adsense Homepage', 'odin' ),
            'fields' => array(
                array(
                    'id' => 'banner1',
                    'label' => __( 'Banner 1', 'odin' ),
                    'type' => 'textarea',
                    'default' => 'Default text',
                    'description' => __( 'Descrition Example', 'odin' )
                ),
                array(
                    'id' => 'banner2',
                    'label' => __( 'Banner 2', 'odin' ),
                    'type' => 'textarea'
                )
            )
        ),
        'adsense_bottom_section' => array( // Segunda sessão para a aba odin_adsense
            'tab'   => 'odin_adsense',
            'title' => __( 'Adsense Blocks Posts', 'odin' ),
            'fields' => array(
                array(
                    'id' => 'banner3',
                    'label' => __( 'Banner 1', 'odin' ),
                    'type' => 'textarea',
                ),
                array(
                    'id' => 'banner4',
                    'label' => __( 'Banner 2', 'odin' ),
                    'type' => 'textarea'
                )
            )
        ),
    )
);
```

## Tipos de Campo:

### text

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

### textarea

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

### input

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

### html

Permite utilizar livremente qualquer HTML dentro da página de Opções do Tema. **Este campo não é salvo no banco de dados**.

O HTML deve estar dentro do `description`.

```php
array(
    'id'    => 'your_id_name', // Obrigatório
    'label' => __( 'HTML Example', 'odin' ), // Obrigatório
    'type'  => 'HTML', // Obrigatório
    'description' => __( '<p>Paragraph Exemple</p>', 'odin' ) // Opcional
)
```

### checkbox

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

### select

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

### radio

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

### editor

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

O parâmetro `options` aceita todos os argumentos de [wp_editor](http://codex.wordpress.org/Function_Reference/wp_editor#Arguments)

Para utilizar o campo no tema, utilizar shortcodes no editor e não ter problemas na formatação utilize a seguinte função:

```php
echo wpautop( do_shortcode( $your_id_name ) );
```

### image

Cria um campo para upload de imagem.
Este campo salva apenas o ID da imagem e não o seu caminho completo.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'image', // Obrigatório
    'default'     => '', // Opcional (deve ser o id de uma imagem em mídia)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

Para recuperar as informações das imagens utilize as funções nativas do WordPress:

- [wp_get_attachment_image()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_image)
- [wp_get_attachment_image_src()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_image_src)
- [wp_get_attachment_metadata()](http://codex.wordpress.org/Function_Reference/wp_get_attachment_metadata)

### image_plupload

Cria um campo para múltiplo upload de imagens.

Este campo salva os ids das imagens, separando cada um por virgula.

```php
array(
    'id'          => 'your_id_name', // Obrigatório
    'label'       => __( 'Text Example', 'odin' ), // Obrigatório
    'type'        => 'image_plupload', // Obrigatório
    'default'     => '', // Opcional (deve ser o id de uma imagem em mídias, separe os ids com virtula)
    'description' => __( 'Descrition Example', 'odin' ), // Opcional
)
```

Para utilizar as imagens será necessário criar um array:

```php
foreach ( explode( ',', $gallery ) as $image_id ) {
    // Sua mágica aqui!
}
```

### upload

Cria um campo de upload de arquivo.

Diferente dos campos de [image](#wiki-image) e [image_plupload](#wiki-image_plupload) este campo salva a url do arquivo.

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

### color

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

## Utilizando os Campos:

Para utilizar as opções salvas em seu tema é necessário criar uma variável que irá armazenar todos os campos salvos na “aba”. Basta passar o id da aba da seguinte forma:

```php
$odin_general_opts = get_option( 'odin_general' );
```

Depois é só chamar a variável criada com o id do campo desejado:

```php
$odin_general_opts['your_id_name'];
```

**Dica**:
Para encontrar tanto o id da aba quanto do campo inspecione o input e observe a propriedade name. Em nosso exemplo o _name_ é: `name="odin_general[your_id_name]`

### Utilizando Odin_Options_Helper

Também é possível chamar as opções utilizando a classe `Odin_Options_Helper`, para isso basta adicionar no functions.php a seguinte linha:

```php
require_once get_template_directory() . '/core/classes/class-options-helper.php';
```

E depois chamar a opção usando:

```php
$odin_general_opts = new Odin_Options_Helper( 'odin_general', 'your_id_name' );
```

## Exemplo Completo

Veja exatamente como criar um metabox em seu tema (bônus campos do HTML5).

```php
// Include the Odin_Theme_Options class.
require_once get_template_directory() . '/core/classes/class-theme-options.php';

function odin_theme_settings_example() {

    $settings = new Odin_Theme_Options(
        'odin-settings', // Slug/ID of the Settings Page (Required)
        'Theme Settings', // Settings page name (Required)
        'manage_options' // Page capability (Optional) [default is manage_options]
    );

    $settings->set_tabs(
        array(
            array(
                'id' => 'odin_general', // Slug/ID of the Settings tab (Required)
                'title' => __( 'General Settings', 'odin' ), // Settings tab title (Required)
            ),
            array(
                'id' => 'odin_html5',
                'title' => __( 'HTML5 Fields', 'odin' )
            )
        )
    );

    $settings->set_fields(
        array(
            'odin_general_fields_section' => array( // Slug/ID of the section (Required)
                'tab'   => 'odin_general', // Tab ID/Slug (Required)
                'title' => __( 'Section Example', 'odin' ), // Section title (Required)
                'fields' => array( // Section fields (Required)

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
                    // HTML.
                    array(
                        'id'    => 'test_html', // Required
                        'label' => __( 'Test HTML', 'odin' ), // Required
                        'type'  => 'html', // Required
                        'description' => __( 'HTML field example' ) // Optional
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
                    )
                )
            ),
            'odin_html5_fields_section' => array( // Slug/ID of the section (Required)
                'tab'   => 'odin_html5', // Tab ID/Slug (Required)
                'title' => __( 'HTML5 Fields', 'odin' ), // Section title (Required)
                'fields' => array( // Section fields (Required)

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
                    )
                )
            )
        )
    );
}

add_action( 'init', 'odin_theme_settings_example', 1 );
```

**Resultado:**

![page-odin-settings](https://cloud.githubusercontent.com/assets/1139893/4895776/3b3b8de4-63f0-11e4-90ad-92e28eac36ca.png)

![page-odin-settings-2](https://cloud.githubusercontent.com/assets/1139893/4895777/3b5b019c-63f0-11e4-9a26-f0e8f6d9068f.png)

## Código Fonte:

`Odin_Theme_Options` esta localizado em [core/classes/class-theme-options.php](https://github.com/wpbrasil/odin/blob/master/core/classes/class-theme-options.php).
