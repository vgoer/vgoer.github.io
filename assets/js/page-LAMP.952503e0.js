(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{618:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("center",[s._v("LAMP")]),s._v(" "),n("p",[s._v("[toc]")]),s._v(" "),n("h2",{attrs:{id:"搭建环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境"}},[s._v("#")]),s._v(" 搭建环境")]),s._v(" "),n("blockquote",[n("p",[s._v("Linux   Apache/Nginx  Mysql  PHP")])]),s._v(" "),n("h3",{attrs:{id:"_1-nginx-web服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx-web服务器"}},[s._v("#")]),s._v(" 1. Nginx web服务器")]),s._v(" "),n("blockquote",[n("p",[s._v("提供web服务  apache也类似 （httpd）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("重要目录")]),s._v(" "),n("blockquote",[n("p",[s._v("配置文件： (包管理工具安装的) "),n("code",[s._v("/etc/nginx/conf.d/default.conf")])])]),s._v(" "),n("blockquote",[n("p",[s._v("web目录："),n("code",[s._v("/usr/share/nginx/html")])])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      //监听端口\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen       [::]:80 default_server;")]),s._v("\n    server_name  _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root         /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   //web目录\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load configuration files for the default server block.")]),s._v("\n    include /etc/nginx/default.d/*.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    error_page "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /404.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /40x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    error_page "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("blockquote",[n("p",[s._v("启动和开机自起")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("nginx  //启动\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" nginx on  //开机自启\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_2-mysql-数据库服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql-数据库服务器"}},[s._v("#")]),s._v(" 2. mysql 数据库服务器")]),s._v(" "),n("blockquote",[n("p",[s._v("存放数据的表")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("启动mysql服务 (mysqld)")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart   systemctl mysqld status//查看服务进程\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("设置root密码 "),n("code",[s._v("/usr/bin/mysqladmin")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/usr/bin/mysqladmin -u root password "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yourpassword"')]),s._v("  //设置密码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("设置开机自启动")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on  //启动\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_3-php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-php"}},[s._v("#")]),s._v(" 3. PHP")]),s._v(" "),n("blockquote",[n("p",[s._v("php预格式化处理器，开源的后端语言")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php php-fpm php-mysql -y   //安装\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("启动php-frm 进程")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php-fpm start   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("查看HP-FPM 进程监听哪个端口")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -nlpt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" php-fpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("开机自动启动：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("chkconfig php-fpm on\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("h4",{attrs:{id:"配置nginx-加-php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx-加-php"}},[s._v("#")]),s._v(" 配置nginx 加 php")]),s._v(" "),n("blockquote",[n("p",[s._v("在 "),n("code",[s._v("/etc/nginx/conf.d")]),s._v("目录中新建一个名为 php.conf 的文件，并配置 Nginx 端口")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  //端口\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n    location ~ .php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root           /usr/share/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  //php路径\n        fastcgi_pass   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_index  index.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_param  SCRIPT_FILENAME  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        include        fastcgi_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("blockquote",[n("p",[s._v("重启 nginx 服务")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx restart \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("检查是否成功  在"),n("code",[s._v("/usr/share/php")]),s._v("目录下新建一个 info.php 文件来检查 php 是否安装成功了")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("// info.php\n"),n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("code",[s._v("http://地址/info.php")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);