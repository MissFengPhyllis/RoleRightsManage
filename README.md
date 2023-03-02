# vue3_01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 接口地址
地址： [https://www.showdoc.com.cn/jinducasey/8321036098744323]
密码： jinduVIP
登录的用户名和密码符合校验规则即可
用微软自带的浏览器访问

### Nginx 部署项目
1 使用 npm run build 打包Vue项目
2 打开Nginx安装程序包下面的 nginx.conf文件，配置对应的信息
 location / {
            root   D:\天府机场\项目\大前端\vue_basic\vue3_01\dist;  要打包的程序
            index  index.html index.htm;
            try_files $uri $uri/ @router; #找指定路径下的文件，如果不存在，则转给那个文件执行  解决页面刷新404
        }

        location @router{
            rewrite ^.*$ /index.html last;  # 解决500的问题
        }
3 检查配置文件时候成功
 nginx -t -c D:\nginx-1.22.1\conf\nginx.conf

4 start nginx  运行nginx项目
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
