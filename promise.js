function Promise (EQ) {
  this.status = 'pending'
  this.resolveList = []
  this.rejectList = []

  onResolve = function (data) {
    if (this.status === 'pending') {
      this.status = 'fulling'
      this.data = data
      for (let i = 0, len = this.rejectList.length; i < len; i++) {
        this.resolveList(data)
      }
    }
  }

  onReject = function () {
    if (this.status === 'pending') {
      this.status = 'reject'
      this.data = data
      for (let i = 0, len = this.rejectList.length; i < len; i++) {
        this.rejectList(data)
      }
    }
  }

  try {
    EQ(onResolve, onReject)
  } catch (error) {
    onReject(error)
  }
}

Promise.prototype.then = function (resolve, reject) {
  resolve && this.resolveList.push(resolve)
  reject && this.rejectList.push(reject)
}

Promise.prototype.catch = function (reject) {
  this.rejectList.push(reject)
}