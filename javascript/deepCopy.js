const demo = {
  name: 'longzhou',
  color: ['red', 'blue'],
  obj: {
    foo: 123
  },
  fn: () => {},
  date: new Date(),
  reg: /^'long'/g
}

// function deepCopy (obj) {
//   // 如果是日期对象
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   if (typeof obj !== Object) {
//     return obj
//   }
//   let result = obj.constructor
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] !== "object") {
//         result[key] = obj[key]
//       } else {
//         result[key] = deepCopy(result[key])
//       }
//     }
//   }

//   return result
// }
function deepCopy (obj) {
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Array) {
    return new Array(...obj)
  }
  if (typeof obj !== 'object') {
    return obj
  }
  let result = {}
  for(key in obj) {
    if (obj[key] instanceof Object) {
      result[key] = deepCopy(obj[key])
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

const a = deepCopy(demo)
a.obj.foo = 131231
a.color[0] = 1231231231
console.log(`---------->`, demo)
console.log(`---------->`, a)