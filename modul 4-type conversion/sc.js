//type conversion

//=================================================================

//implicit conversion
let o = 15
let t= "20"


hasil1 = o + t
hasil2 = o - t
hasil3 = o * t
hasil4 = o / t
console.log(hasil1, typeof hasil1)
console.log(hasil2, typeof hasil2)
console.log(hasil3, typeof hasil3)
console.log(hasil4, typeof hasil4)

//falsy value: 0, null, undifend, ""

let bool = !null
console.log("")
console.log(bool, typeof bool)


//========================================================================

//eksplisit coonversion


// mengubah number menjadi str
let num = 100
let str = num.toString()
console.log(str, typeof str)

console.log("")
// mengubah str menjadi num
let num2 = "100"
let number = parseInt(num2)
console.log(number, typeof number)

console.log("")
// mengubah float menjadi num
let num3 = "100.87"
let float = parseFloat(num3)
console.log(float, typeof float)

// // mengubah float menjadi str
// let num4 = 100.87
// let float1 = parseInt(num4)
// console.log(float1, typeof float1)


console.log("")
//mengubah menjadi bool
let bool1 = Boolean(0)
console.log(bool1, typeof bool1)

console.log("")
//========================================================================================================
// NaN number: not a number
let hasil = "abc" - 10
console.log(hasil, typeof hasil)



