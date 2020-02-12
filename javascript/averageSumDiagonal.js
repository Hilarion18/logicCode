function diagonalDifference(arr) {
    // Write your code here
    let count1 = 0
    let count2 = 0
    let result = 0
    let indexPlus = 0
    for (let i = 0; i < arr.length; ++i) {
      for (let j = 0; j < arr[i].length; ++j) {
        if (i === indexPlus && j === indexPlus) {
          count1 += arr[i][j]
          indexPlus++
        }
      }
    }
    let index = 0
    let indexMinus = arr[0].length-1
    for (let i = 0; i < arr.length; ++i) {
      for (let j = arr[i].length-1; j >= 0; --j) {
        if (i === index && j === indexMinus) {
          count2 += arr[i][j]
          index++
          indexMinus--
        }
      }
    }
    result = count1 - count2
    if (result < 0) {
      result *= -1
    }
    return result
}

console.log(diagonalDifference([[0, 2, 3], [2,8,-1], [-3,9,10]]))