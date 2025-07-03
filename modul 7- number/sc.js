//⁡⁢⁣⁢=======================================================================================================================⁡
// ⁡⁣⁢⁢Number⁡

// let bil = 12
// let bilfloat = 12.89
// let bilnega = -12
// let bilinfinity = Infinity
// let NaN = NaN

//⁡⁢⁣⁢========================================================================================================================⁡
//⁡⁣⁢⁢properti bawaaan⁡

//⁡⁣⁢⁢Max value⁡
console.log(Number.MAX_VALUE)

//⁡⁣⁢⁢min value⁡
console.log(Number.MIN_VALUE)

//⁡⁣⁢⁢positive infinity⁡
console.log(Number.POSITIVE_INFINITY)

//⁡⁣⁢⁢NEGATIVE INIFINITY⁡
console.log(Number.NEGATIVE_INFINITY)

//⁡⁣⁢⁢NaN⁡
console.log("abc"/0)

//⁡⁢⁣⁢============================================================================================================================⁡

//⁡⁣⁢⁢metode bawaan⁡

//⁡⁣⁢⁢tostring: mengubah angka menjadi str⁡
let num = 1234
let henshin = num.toString()
console.log(henshin, typeof henshin)

//⁡⁣⁢⁢tofixed: mengubah angka menjadi str dengan digit desimal yang ditentukan⁡
let float = 3.2145454756
console.log(float.toFixed(3))

//⁡⁣⁢⁢toprecision: mengubah angka menjadi str dengan panjang yang di tenatukan⁡
let fl = 3.145675
console.log(float.toPrecision(6))

//⁡⁣⁢⁢parseint dan parsefloat: mengubahn str menjadi angka atau float⁡
let str = "12789999"
console.log(parseInt(str))

let strf = "12344.89"
console.log(parseFloat(strf))



