function Promi (fn) {
  let _self = this
  _self.status = 'pending'
  _self.resolveList = []
  _self.rejectList = []
  _self.data = undefined

  function resolve (res) {
    setTimeout(() => {
      if (_self.status === 'pending') {
        _self.status = 'fulfilled'
        for(let i = 0; i < _self.resolveList.length; i++) {
          _self.resolveList[i](res)
        }
      }
    }, 0);
  }

  function reject (err) {
    setTimeout(() => {
      if (_self.status === 'pending') {
        _self.status = 'rejected'
        for(let i = 0; i < _self.rejectList.length; i++) {
          _self.rejectList[i](err)
        }
      }
    }, 0);
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promi.prototype.then = function (onResolve, onReject) {
  this.resolveList.push(onResolve)
  this.rejectList.push(onReject)
}

Promi.prototype.catch = function (onReject) {
  this.rejectList.push(onReject)
}
