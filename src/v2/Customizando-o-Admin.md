# Personalizando o Admin

É possível fazer algumas personalizações na parte de administração do WordPress. O Odin traz algumas funções nativas que facilitam este trabalho.

## Admin CSS

É possível trocar o logo na tela de login do WordPress ou adicionar estilos CSS personalizados no admin do WordPress através do arquivo [`odin/inc/assets/css/custom-admin.css`](https://github.com/wpbrasil/odin/blob/master/inc/assets/css/custom-admin.css).

## Remover logo do WP

### Barra de Adm

Remove o logo do WordPress na barra do admin (Admin Bar).

`odin_admin_adminbar_remove_logo();`

### Rodapé

Remove o texto do rodapé do admin colocando no lugar o ano corrente e o nome do site.

`odin_admin_footer();`

## Tela do Admin

### Mudar logo

Adicionar o arquivo do **logo-login.png** na pasta `inc/assets/images/`. O tamanho padrão é 80 x 80 px. Caso sua logo possua tamanho diferente, basta editar o arquivo **custom-admin.css** localizado na pasta `inc/assets/css/`. Você deve editar as linhas 7, 8 e 9.

### Mudar URL da logo

Troca a URL do logo no login pelo URL do site.

`odin_admin_logo_url();`

### Mudar title da logo

Troca o title do logo no login pelo nome do site.

`odin_admin_logo_title()`

## Remover Widgets do Dashboard

Remove os seguintes widgets do Dashboard:

- QuickPress;
- Links de entrada;
- Plugins;
- Blog do WordPress;
- Outras notícias do WordPress;
- Rascunhos recentes;
- Yoast WordPress Seo;

`odin_admin_remove_dashboard_widgets();`

## Código fonte

É possível encontrar estas funções em [`inc/admin.php`](https://github.com/wpbrasil/odin/blob/master/inc/admin.php).
