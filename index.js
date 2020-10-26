const mapDate = new Map()

const a = {name: 34242}
mapDate.set(a, '132131')
mapDate.set('age', 18)
const b = a

console.log('------>', mapDate)

console.log('------>', mapDate.get(a) === mapDate.get(b))
console.log('------>', mapDate.keys())
console.log('------>', [...mapDate])