

console.log(twoSum([3, 2, 2], 4))

var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let p = 1; p < nums.length; p++) {
            if (target == nums[i] + nums[p]) {
                arr.push(i)
                arr.push(p)
            }
        }
    }
    return arr;
}