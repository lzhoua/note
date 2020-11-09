[react 高频面试题 一](https://zhuanlan.zhihu.com/p/82840768)


setState是同步的还是异步的？
为什么有时连续多次 setState只有一次生效？
React如何实现自己的事件机制？
为何 React事件要自己绑定 this？
原生事件和 React事件的区别？
React的合成事件是什么？
React和原生事件的执行顺序是什么？可以混用吗？
虚拟Dom是什么？
虚拟Dom比 普通Dom更快吗？
虚拟Dom中的 $$typeof属性的作用是什么？
React组件的渲染流程是什么？
为什么代码中一定要引入 React？
为什么 React组件首字母必须大写？
React在渲染 真实Dom时做了哪些性能优化？
什么是高阶组件？如何实现？
HOC在业务场景中有哪些实际应用场景？
高阶组件( HOC)和 Mixin的异同点是什么？
Hook有哪些优势？

1. redux 中间件的原理是什么？

2. 你会把数据统一放到redux中管理，还是共享数据放在redux中管理？

3. compoentWillReceiveProps 的调用时机

4. 虚拟dom是什么？为什么虚拟dom会提升代码性能

5. react性能优化的最佳实践


6. 调用setState后，发生了什么

7. setState是异步的，这个点你在什么时候遇到过坑

8. refs的作用是什么。你在什么业务场景下使用过refs

9. ref是一个函数，有什么好处

11. SessionStorage和localStorage还有cookie

共同点：都是保存在浏览器端、且同源的
不同点：
    1. cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
    cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
    sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。
    2. 存储大小限制也不同，cookie数据不能超过4K，sessionStorage和localStorage可以达到5M
    3. sessionStorage：仅在当前浏览器窗口关闭之前有效；
    localStorage：始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据；
    cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
    4. 作用域不同
    sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；
    localstorage：在所有同源窗口中都是共享的；也就是说只要浏览器不关闭，数据仍然存在
    cookie: 也是在所有同源窗口中都是共享的.也就是说只要浏览器不关闭，数据仍然存在

dom树节点和渲染树节点一一对应吗，有什么是dom树会有，渲染树不会有的节点
CSS会阻塞dom解析吗？
requestIdleCallback是干什么用的
浏览器的渲染原理
浏览器的渲染过程
关键渲染路径详述
避免回流的方式
跨域的方式
前端的网络安全如何防御（xss，csrf）
cookies的保护方式
浏览器的缓存机制
什么文件用强缓存，什么文件用协商缓存
React-Native的原理，优缺点
react的虚拟dom和diff描述
react渲染优化（class，hook）
react的context的使用场景
首屏优化方案
在App中如何实现前端资源离线缓存（方案）

const arr = [101,19,12,51,32,7,103,8];
1.找出连续最大升序的数量
2.找出不连续最大升序的数量

浏览器的输入url后的过程
js异步方式
promise.resolve是干嘛的
promise.then如何实现链式调用
promise.then不返还一个promise还能用then吗
promise.finally的作用，如何自己实现finally
promise原理
webpack的异步加载如何实现
webpack的分包策略
跨域方式有什么
jsonp的原理
csrf防御手段
cookie的samesite属性作用
js对象循环引用会导致什么问题
react如何阻止原生默认事件
react的fiber节点树是什么数据结构，为什么要用这样的数据结构
react 异步渲染原理，优先级如何划分
react hook有自己做一些自定义的hook吗
react key的原理
react如何实现函数式调用组件，toast.show()
react新增了什么生命周和删除了什么生命周期，为什么要删除


node对于option请求如何处理
node如何处理cors跨域
ES modules和commonjs的区别
node的event loop和浏览器的区别
dns查询过程，dns用什么协议发起dns查询的
tcp和udp区别
tcp的三次握手和四次挥手
协商缓存和强缓存的区别
https协议握手大概过程
对称加密和非对称加密的区别
非对称加密，私钥和公钥的区别
https证书的作用
绑定事件有多少种方式
事件触发的流程，捕获和冒泡
捕获阶段能终止吗
终止冒泡阶段有哪些
如果实现one绑定事件
事件委托的原理
event.target和event.currtager的区别
浏览器显示一个图片有什么方式
如何获取url中的?后的参数
浏览器的内存回收机制 标记清除还是引用计数？
如何解决跨域
什么是简单请求什么复杂请求
const和let有什么区别
ES6常用的api有哪些
数组断引用的方式有什么
Base64图片有什么问题
Http强缓存和协商缓存用的是什么字段，整体流程是怎样
Https原理
Https第一次请求会携带什么
Ca证书的内容是什么
Https2.0的特性
xss攻击原理的防御方式
Csrf攻击原理和防御方式
二进制分帧的具体是什么
Keep alive和多路复用的区别
Option请求的作用
Node gc方式
新生代和老生代的区别
新生代内存地址移动到老生代内存地址的过程
长列表优化方案
首屏优化方案
Node如何保证第三方接口的稳定性
浏览器从写入url到加载完毕的流程
浏览器白屏原因
页面打开后cpu和内存快速增长，如何定位问题，可能有什么问题
长列表优化，以及长列表中，如果带搜索功能如何实现
有100匹马，场地只有4条跑道，得出最快的4只马需要多少轮 Lam：100匹马，4个赛道，找出跑最快的4匹马。
已知函数fn1会随机返回1-5的整数，要求基于fn1编写fn2，要随机生成1-7，fn2内不能使用系统的随机api，只能调用fn1获取随机数