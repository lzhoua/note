### http && https

https原理（握手过程）
http1和http2有什么区别，http2优势
http常见返回码及其含义
http缓存控制，协商缓存相关的几个头部的之间的优先级关系



##### Post 和 Get 的区别

- Get 请求能缓存，Post 不能
- Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏 览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。
- Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术
- URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
- Post 支持更多的编码类型且不对数据类型限制
