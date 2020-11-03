Function.prototype.newCall = function (...arg) {
  let target = arg[0]
  if (!target) {
    if (typeof window !== 'undefined') {
      target = window
    }
    if (typeof global !== 'undefined') {
      target = global
    }
  }
  target.bindThis = this
  target.bindThis(...arg.slice(1))
  delete target.bindThis
}

Function.prototype.newApply = function (...arg) {
  let target = arg[0]
  if (!target) {
    if (typeof window !== 'undefined') {
      target = window
    }
    if (typeof global !== 'undefined') {
      target = global
    }
  }
  target.bindThis = this
  target.bindThis(arg.slice(1))
  delete target.bindThis
}

Function.prototype.newBind = function (...arg) {
  let _this = this
  let target = arg[0]
  if (!target) {
    if (typeof window !== 'undefined') {
      target = window
    }
    if (typeof global !== 'undefined') {
      target = global
    }
  }
  return function (...newArg) {
    return _this.apply(target, arg.slice(1).concat(newArg))
  }
}
