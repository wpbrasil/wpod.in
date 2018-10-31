(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{168:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("Devemos instanciar a classe para criar os Post Types:")]),s._v(" "),s._m(6),a("p",[s._v("Com apenas isso é possível criar um Post Type que irá ter os seguintes argumentos:")]),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),a("p",[s._v("São aceitos todos os $labels da função "),a("a",{attrs:{href:"http://codex.wordpress.org/Function_Reference/register_post_type#Arguments",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("register_post_type()")]),a("OutboundLink")],1),s._v(".")]),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),a("p",[s._v('No exemplo acima, os "supports" foram modificados para ter apenas "title", "editor" e "thumbnail". Você pode utilizar isso para adicionar ou alterar qualquer argumento do Post Type.')]),s._v(" "),a("p",[s._v("São aceitos todos os argumentos da função "),a("a",{attrs:{href:"http://codex.wordpress.org/Function_Reference/register_post_type#Arguments",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("register_post_type()")]),a("OutboundLink")],1),s._v(".")]),s._v(" "),s._m(14),s._v(" "),a("p",[s._v("O "),a("code",[s._v("set_arguments()")]),s._v(" permite utilizar qualquer um dos argumentos disponíveis para a função "),a("a",{attrs:{href:"http://codex.wordpress.org/Function_Reference/register_post_type#Arguments",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("register_post_type()")]),a("OutboundLink")],1),s._v(".")]),s._v(" "),s._m(15),s._v(" "),a("p",[s._v("Para isso, usamos uma url completa de algum ícone, ou qualquer um dos nomes dos "),a("a",{attrs:{href:"https://developer.wordpress.org/resource/dashicons",target:"_blank",rel:"noopener noreferrer"}},[s._v("WordPress DashIcons"),a("OutboundLink")],1),s._v(".")]),s._v(" "),s._m(16),a("p",[s._v("Adicionamos "),a("a",{attrs:{href:"https://developer.wordpress.org/resource/dashicons/#format-video",target:"_blank",rel:"noopener noreferrer"}},[s._v("este ícone"),a("OutboundLink")],1),s._v(", com nome "),a("code",[s._v("dashicons-format-video")]),s._v(", para o Post Type Vídeo.")]),s._v(" "),s._m(17),s._v(" "),a("p",[s._v("Exemplo de como utilizar e funcionar corretamente as traduções:")]),s._v(" "),s._m(18),s._m(19),s._v(" "),a("p",[s._v("Odin_Post_Type esta localizado em "),a("a",{attrs:{href:"https://github.com/wpbrasil/odin/blob/master/core/classes/class-post-type.php",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("core/classes/class-post-type.php")]),a("OutboundLink")],1),s._v(".")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"custom-post-types-tipos-de-conteudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-post-types-tipos-de-conteudo","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Post Types/Tipos de conteúdo")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Para facilitar a criação de "),t("strong",[this._v("tipos de conteúdo")]),this._v(" (Post Type) criamos a classe "),t("code",[this._v("Odin_Post_Type")]),this._v(" para auxiliar a construção.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"instalacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacao","aria-hidden":"true"}},[this._v("#")]),this._v(" Instalação")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Adicione a seguinte linha em seu "),t("code",[this._v("functions.php")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("require_once")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("get_template_directory")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'/core/classes/class-post-type.php'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"criando-um-post-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#criando-um-post-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Criando um Post Type")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$video")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Odin_Post_Type")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Video'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Nome (Singular) do Post Type.")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'video'")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Slug do Post Type.")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$args")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'hierarchical'")]),s._v("        "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'supports'")]),s._v("            "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'editor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'thumbnail'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'comments'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'revisions'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'public'")]),s._v("              "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'show_ui'")]),s._v("             "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'show_in_menu'")]),s._v("        "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'show_in_nav_menus'")]),s._v("   "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'publicly_queryable'")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'exclude_from_search'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'has_archive'")]),s._v("         "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'query_var'")]),s._v("           "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'can_export'")]),s._v("          "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'rewrite'")]),s._v("             "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'capability_type'")]),s._v("     "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'post'")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"configurando-os-titulos-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurando-os-titulos-labels","aria-hidden":"true"}},[this._v("#")]),this._v(" Configurando os títulos ($labels)")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("É possível alterar os $labels utilizando o método "),t("code",[this._v("set_labels()")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$video")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("set_labels")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'menu_name'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("__")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Meus Videos'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'odin'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"configurando-os-argumentos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurando-os-argumentos","aria-hidden":"true"}},[this._v("#")]),this._v(" Configurando os argumentos")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Também é possível modificar os argumentos ao seu gosto utilizando o método "),t("code",[this._v("set_arguments()")]),this._v(":")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$video")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("set_arguments")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'supports'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'editor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'thumbnail'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"adicionando-icones-para-o-post-type-no-wp-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adicionando-icones-para-o-post-type-no-wp-admin","aria-hidden":"true"}},[this._v("#")]),this._v(" Adicionando ícones para o Post Type no wp-admin")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Portanto, vamos utilizar o argumento "),t("code",[this._v("'menu_icon'")]),this._v(", para definir um ícone para o novo Post Type no menu do wp-admin.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$video")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("set_arguments")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'supports'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'editor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'thumbnail'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'menu_icon'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'dashicons-format-video'")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"exemplo-completo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-completo","aria-hidden":"true"}},[this._v("#")]),this._v(" Exemplo completo")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("odin_video_cpt")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$video")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Odin_Post_Type")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Video'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Nome (Singular) do Post Type.")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'video'")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Slug do Post Type.")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$video")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("set_labels")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'menu_name'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("__")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Meus Videos'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'odin'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$video")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("set_arguments")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'supports'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'editor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'thumbnail'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("add_action")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'init'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'odin_video_cpt'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"codigo-fonte"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#codigo-fonte","aria-hidden":"true"}},[this._v("#")]),this._v(" Código fonte")])}],!1,null,null,null);e.options.__file="Classe-Odin_Post_Type.md";t.default=e.exports}}]);