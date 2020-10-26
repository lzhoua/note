#### new操作符

```javascript
function Foo () {
  this.name = 'sanye'
  return this
}

Foo.prototype.setName = function (newName) {
  this.name = newName
}

const foo = new Foo()
```

上面的过程中，`new` 构造器实例化构造函数 `Foo`，给一个实例对象 `foo` 的过程中，做了下面几个步骤

1. 创建一个新的对象
  ```javascript
  let newObj = new Object()
  ```

2. 设置原型链（当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象）
  ```javascript
  newObj.__proto__ = Foo.prototype
  ```

3. 让 `Foo` 中的 `this` 指向 `newObj`，并执行 `Foo` 的函数体。（创建新的对象之后，将构造函数的作用域赋给新对象（因此 `this` 就指向了这个新对象））
  ```javascript
  const result = Foo.call(newObj)
  ```

4. 判断Func的返回值类型：如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象  **（这一步我觉得其实是区别构造函数中的return，当return一个引用类型的时候，返回这个引用类型）**
  ```javascript
  if (typeof result === 'object') {
    foo = result
  } else {
    foo = newObj
  }
  ```


#### 构造函数中return
```javascript
function Foo () {
  this.name = 'sanye'
  return {
    age: 18
  }
}

function Bar () {
  this.name = 'sanye'
  return 18
}

const foo = new Foo()
const bar = new Bar()

console.log(foo)  // {age: 18}
console.log(bar)  // {name: 'sanye'}

```

#### 实现new操作符

```javascript
function newFun (...arg) {
  const constructorFun = arg[0]
  let obj = new Object()
  obj.__proto__ = constructorFun.prototype
  const result = constructorFun.apply(obj, arg.slice(1))
  return result instanceof Object ? result : obj
}
```

