# Formulários de contato

Você não precisa mais utilizar plugins para criar formulários de contato no Odin. Utilize a classe _Odin_Contact_Form_ que será capaz de gerar o formulário utilizando `wp_mail()` e ainda validar os campos por HTML5 e PHP antes deles serem enviados por e-mail.

## Instalação:

Adicione as seguintes linhas em seu `functions.php`:

```php
require_once get_template_directory() . '/core/classes/abstracts/abstract-front-end-form.php';
require_once get_template_directory() . '/core/classes/class-contact-form.php';
```

## Criando um formulário de contato:

Devemos instanciar a classe `Odin_Contact_Form` para criar o Formulário:

```php
function odin_contact_form() {
    $form = new Odin_Contact_Form(
        'form_id', // ID do formulário
        'eu@email.com', // E-mail do destinatário.
        array( 'vc@email.com', 'tu@email.com' ), // array com e-mails que receberão cópia.
        array( 'alguem@email.com' ) // array com e-mails que receberão cópia oculta.
        // array( 'class' => 'form' ) // array com atributos para o formulário.
        // 'file' // string com método que será enviado o anexo, no caso 'file' como anexo e 'url' para enviar links.
    );
    return $form;
}

add_action( 'init', array( odin_contact_form(), 'init' ), 1 );
```

Isso apenas cria a instância do formulário!
Você ainda precisa adicionar os campos e também exibir ele no tema.

## Adicionando campos ao formulário de contato:

Adicione os campos utilizando o método `set_fields()` como por exemplo:

```php
$form->set_fields(
    array(
        array(
            'fields' => array(
                array(
                    'id'          => 'sender_name', // Obrigatório
                    'label'       => array(
                        'text'  => __( 'Nome', 'odin' ), // Obrigatório
                        'class' => 'example-class example-class-2'
                    ),
                    'type'        => 'text', // Obrigatório
                    'required'    => true, // Opcional (bool)
                    'attributes'  => array( // Opcional (html input elements)
                        'placeholder' => __( 'Digite o seu nome' )
                    )
                ),
                array(
                    'id'          => 'sender_email', // Obrigatório
                    'label'       => array(
                        'text'  => __( 'E-mail', 'odin' ), // Obrigatório
                        'class' => 'example-class example-class-2'
                    ),
                    'type'        => 'email', // Obrigatório
                    'required'    => true, // Opcional (bool)
                    'attributes'  => array( // Opcional (html input elements)
                        'placeholder' => __( 'Digite o seu e-mail!' )
                    ),
                    'description' => __( 'Adicione um endereço de e-mail válido', 'odin' ) // Opcional
                ),
                array(
                    'id'          => 'sender_message', // Obrigatório
                    'label'       => array(
                        'text'  => __( 'Mensagem', 'odin' ), // Obrigatório
                        'class' => 'example-class example-class-2'
                    ),
                    'type'        => 'textarea', // Obrigatório
                    'required'    => true, // Opcional (bool)
                    'attributes'  => array( // Opcional (html input elements)
                        'placeholder' => __( 'Digite a sua mensagem' )
                    ),
                ),
            )
        )
    )
);
```

Como é possível ver no exemplo, é necessário criar um array que funcionará como fiedset e dentro dele outro array que terá campos do nosso formulário de contato.

## Grupos de campos/fieldset:

O fieldset poderá ter três parâmetros:

```php
$form->set_fields(
    array(
        array(
            'legend' => __( 'Legenda do grupo' ), // Opcional
            'attributes' => array( // Opcional (atributos que pode ter em um fieldset em html)
                'class' => 'some-css-class'
            ),
            'fields' => array( // Obrigatório
                // Aqui vão os campos do fieldset
            )
        )
    )
);
```

## Tipos de campo:

### text

Cria um campo comum de texto:

```php
array(
    'id'          => 'text_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Text Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'text', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### email

Cria um campo de e-mail.

```php
array(
    'id'          => 'email_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Email Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'email', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### file

Cria um campo de arquivo.

```php
array(
    'id'          => 'file_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'File Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'file', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### input

Cria um campo input em HTML que aceita os tipos do HTML5.

```php
array(
    'id'          => 'html5_input_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'HTML5 input Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'input', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'type'     => 'color',
        'required' => 'required',
        'class'    => 'regular-text',
        'styles'   => 'background: #444;'
    ),
    'default'     => '#ffffff', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### textarea

Cria um campo de múltiplas linhas de texto.

```php
array(
    'id'          => 'textarea_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Textarea Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'textarea', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    'attributes'  => array( // Opcional (atributos para input HTML/HTML5)
        'placeholder' => __( 'Some text here!' )
    ),
    'default'     => 'Default text', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### checkbox

Cria um campo de checkbox.

```php
array(
    'id'          => 'checkbox_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Checkbox Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'checkbox', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => '', // Opcional (utilize 1 para deixar marcado como padrão)
    'description' => __( 'Description Example', 'odin' ), // Opcional
)
```

### select

Cria um campo de select.

```php
array(
    'id'            => 'select_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Select Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'          => 'select', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'       => 'three', // Opcional
    'description'   => __( 'Description Example', 'odin' ), // Opcional
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
    'id'          => 'radio_example', // Obrigatório
    'label'       => array(
        'text'  => __( 'Radio Example', 'odin' ), // Obrigatório
        'class' => 'example-class example-class-2'
    ),
    'type'        => 'radio', // Obrigatório
    'required'    => true, // Campo obrigatório (true/false) Opcional
    // 'attributes' => array(), // Opcional (atributos para input HTML/HTML5)
    'default'     => 'three', // Opcional
    'description' => __( 'Description Example', 'odin' ), // Opcional
    'options'     => array( // Obrigatório (adicione aque os ids e títulos)
        'one'   => 'One',
        'two'   => 'Two',
        'three' => 'Three',
        'four'  => 'Four'
    ),
)
```

## Configurando o assunto do e-mail:

Personalize o assunto do e-mail utilizando o método `set_subject()`:

```php
$form->set_subject( __( 'Email enviado por [id_do_campo_nome] <[id_do_campo_email]>', 'odin' ) );
```

Para criar o assunto do e-mail é possível usar placeholders em forma de shortcodes que são os ids dos campos do formulário. Estão disponível também os shortcodes.

- `[form_id]` – ID do formulário
- `[sent_date]` – Data de envio
- `[sent_time]` – Hora de envio

## Configurando o tipo de conteúdo:

Os e-mails são enviados como texto puro, entretanto é possível configurar para serem enviados em HTML utilizando o método `set_content_type()`:

```php
$form->set_content_type( 'html' );
```

## Configurando e-mail de resposta:

Por padrão os e-mails são enviados pela `função wp_mail()` que utiliza o e-mail cadastrado nas configurações do site para enviar.
Esta é a melhor forma de enviar um e-mail, pois usando o e-mail de quem preenche o formulário o e-mail pode ser marcado como spam e bloqueado antes de chegar na sua caixa de mensagens.

Entretanto você pode configurar o e-mail que você irá responder utilizando o método `set_replay_to()`:

```php
$form->set_reply_to( 'id_do_campo_de_email' );
```

## Exibindo Formulário de Contato no tema:

Com tudo configurado você já poderá exibir o formulário de contato no seu tema utilizando o método `render()`.
Veja um exemplo com a função que chamamos de `odin_contact_form()`:

```php
echo odin_contact_form()->render();
```

## Filtros da classe:

Atualmente existe 3 actions que estão livres para uso nesta classe:

### odin_contact_form_message_header_SLUG

Este filtro é responsável pelo **começo** do corpo do e-mail enviado. Você pode utiliza-lo para adicionar HTML ou mensagem no seu e-mail.

```php
/**
 * Odin message template header example.
 */
function odin_contact_form_message_header_html( $html ) {
    $html = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd"><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>' . get_bloginfo( 'name', 'display' ) . '</title></head><body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0"><div style=" background-color: #eeeeee; width:100%; -webkit-text-size-adjust:none !important; margin:0; padding: 70px 0 70px 0;"><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="template_container" style="-webkit-box-shadow:0 0 0 3px rgba(0,0,0,0.025) !important; box-shadow:0 0 0 3px rgba(0,0,0,0.025) !important; -webkit-border-radius:6px !important; border-radius:6px !important; background-color: #fdfdfd; border: 1px solid #d6d6d6; -webkit-border-radius:6px !important; border-radius:6px !important;"><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="template_body"><tr><td valign="top" style=" background-color: #fdfdfd; -webkit-border-radius:6px !important; border-radius:6px !important;"><table border="0" cellpadding="20" cellspacing="0" width="100%"><tr><td valign="top"><div style=" color: #737373; font-family:Arial; font-size:14px; line-height:150%; text-align:left;">';

    return $html;
}

// Replace contact_form with your form id!
add_filter( 'odin_contact_form_message_header_contact_form', 'odin_contact_form_message_header_html' );
```

### odin_contact_form_message_footer

Este filtro é responsável pelo **final** do corpo do e-mail enviado. Você pode utiliza-lo para adicionar HTML ou mensagem no seu e-mail.

```php
/**
 * Odin message template footer example.
 */
function odin_contact_form_message_footer_html( $html ) {

    $html = '</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>';

    return $html;
}

// Replace contact_form with your form id!
add_filter( 'odin_contact_form_message_footer_contact_form', 'odin_contact_form_message_footer_html' );
```

### odin_contact_form_mail_headers

Utilize este filtro para personalizar o cabeçalho/headers do e-mail.

```php
/**
 * Custom contact form headers.
 */
function odin_contact_form_headers( $headers ) {
    $headers[] = 'From: vc@email.com';
}

// Replace contact_form with your form id!
add_filter( 'odin_contact_form_mail_headers_contact_form', 'odin_contact_form_headers' );
```

## Exemplo completo:

Formulário simples com os campos **Nome**, **E-Mail** e **Mensagem**:

```php
require_once get_template_directory() . '/core/classes/abstracts/abstract-front-end-form.php';
require_once get_template_directory() . '/core/classes/class-contact-form.php';

function odin_contact_form() {

    $form = new Odin_Contact_Form(
        'contact_form',
        'voce@email.com'
    );

    $form->set_fields(
        array(
            array(
                'fields' => array(
                    array(
                        'id'          => 'sender_name', // Required
                        'label'       => array(
                            'text'      => __( 'Nome', 'odin' ), // Required
                        ),
                        'type'        => 'text', // Required
                        'required'    => true, // Optional (bool)
                        'attributes'  => array( // Optional (html input elements)
                            'placeholder' => __( 'Digite o seu nome' )
                        )
                    ),
                )
            ),
            array(
                'fields' => array(
                    array(
                        'id'          => 'sender_email', // Required
                        'label'       => array(
                            'text'      => __( 'E-mail', 'odin' ), // Required
                        ),
                        'type'        => 'email', // Required
                        'required'    => true, // Optional (bool)
                        'attributes'  => array( // Optional (html input elements)
                            'placeholder' => __( 'Digite o seu e-mail!' )
                        ),
                        'description' => __( 'Precisa ser um endere&ccedil;o de e-mail v&aacute;lido', 'odin' ) // Optional
                    ),
                    array(
                        'id'          => 'sender_message', // Required
                        'label'       => array(
                            'text'      => __( 'Mensagem', 'odin' ), // Required
                        ),
                        'type'        => 'textarea', // Required
                        'required'    => true, // Optional (bool)
                        'attributes'  => array( // Optional (html input elements)
                            'placeholder' => __( 'Digite a sua mensagem' )
                        ),
                    ),
                    array(
                        'id'          => 'sender_file', // Required
                        'label'       => array(
                            'text'      => __( 'Arquivo', 'odin' ), // Required
                        ),
                        'type'        => 'file', // Required
                        'required'    => true, // Optional (bool)
                    )
                )
            )
        )
    );

    $form->set_subject( __( 'Email enviado por [sender_name] <[sender_email]>', 'odin' ) );

    $form->set_content_type( 'html' );

    $form->set_reply_to( 'sender_email' );

    return $form;
}

add_action( 'init', array( odin_contact_form(), 'init' ), 1 );
```

Depois no tema basta adicionar a seguinte linha para mostrar o formulário

```php
echo odin_contact_form()->render();
```

## Código fonte:

Odin_Contact_Form esta localizado em [`core/classes/class-contact-form.php`](https://github.com/wpbrasil/odin/blob/master/core/classes/class-contact-form.php).

[top](#)
