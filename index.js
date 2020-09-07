function twoSum (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    let cur = map[target - nums[i]]
    if (cur && cur !== i) {
      return [i, map[target - nums[i]]]
    }
  }
}

console.log('------>', twoSum([2, 7, 11, 15], 9))