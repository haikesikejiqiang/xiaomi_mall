## vue-swiper API文档
https://www.swiper.com.cn/api/index.html

## 跨域的几种实现方式

1. nginx代理
这种方式本地和线上的开发方式都比较简单；本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名

2. CORS解决跨域
这种方式不需要配置nginx；但是本地需要维护多套环境，根据process.env.NODE_DEV来切换开发和线上环境地址；config中做切换；

线上nginx配置：
location /api/ {
  proxy_pass http://mall-pre.springboot.cn/;
}
线上nginx配置的时候，代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api

3.在此，我是给大家配置好了，这个跨域这个文档，在发给大家文件里面，vue.config.js；大家直接复制到你们脚手架项目的跟目录，就行了。做完项目下来，大家可以看看这个知识点。

