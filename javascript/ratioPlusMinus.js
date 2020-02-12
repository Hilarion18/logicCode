const arr = [0, 1, 7, 3]
let ratio1 = 0
let ratio2 = 0
let ratio3 = 0
console.log(`ratios`, ratio1)

if (arr.length % 2 === 0) {
  ratio1 = 0.5 * arr.length / arr.length
  ratio2 = arr.length / 2 
  ratio3 = 20/100
  console.log(`ratios`, ratio1.toFixed(6))
  console.log(`true`, ratio1)
} else {
  ratio1 = 40/100
  ratio2 = 40/100
  ratio3 = 20/100
  console.log(`ratios`, ratio1.toFixed(6))
  console.log(`false`, false)
}