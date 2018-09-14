module.exports = {
    base: '/wpod.in/',
    title: 'Odin',
    description: 'Um Framework WordPress que chuta bundas.',
    host: 'localhost',
    themeConfig: {
        nav: [{
                text: 'Guia',
                link: '/guide/'
            },
            {
                text: 'Docs',
                link: '/v2/'
            },
            {
                text: 'Expo',
                link: 'http://expo.wpod.in/'
            },
            {
                text: 'MIV',
                link: 'https://github.com/wpbrasil/odin-miv'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/wpbrasil/odin'
            }
        ],
        sidebar: [
            ['/guide/', 'Guia'],
            {
                title: 'Versão 2.x',
                collapsable: false,
                children: [
                    ['/v2/', 'Introdução'],
                    ['/v2/Classe-Odin_Post_Type.html', 'Custom Post Types/Tipos de conteúdo'],
                    ['/v2/Classe-Odin_Taxonomy.html', 'Taxonomias personalizadas'],
                    ['/v2/Classe-Odin_Metabox.html', 'Metaboxes/Opções para posts/páginas'],
                    ['/v2/Classe-Odin_Post_Status.html', 'Custom Post Status/Status de posts personalizados'],
                    ['/v2/Classe-Odin_Contact_Form.html', 'Formulários de contato'],
                    ['/v2/Classe-Odin_User_Meta.html', 'Opções para perfis de usuários'],
                    ['/v2/Classe-Odin_Term_Meta.html', 'Opções para termos'],
                    ['/v2/Classe-Odin_Theme_Options.html', 'Opções para o Tema'],
                    ['/v2/Classe-Odin_Shortcodes.html', 'Shortcodes integrados'],
                    ['/v2/Usando-o-Grunt.html', 'Usando o Grunt'],
                    ['/v2/Usando-o-Sass.html', 'Usando o Sass'],
                    ['/v2/Customizando-o-Admin.html', 'Personalizando o Admin'],
                ]
            }
        ],
        displayAllHeaders: false
    },
    sidebar: 'auto',
    markdown: {
        lineNumbers: true
    }
}