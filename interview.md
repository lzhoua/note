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