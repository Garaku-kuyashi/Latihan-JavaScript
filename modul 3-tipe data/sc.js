// tipe data
// tipe data primitif

//=============================================
//string
//number : int dan float 
//bool
//undefined
//null
//symbol (ES6+)
//Bigint (ES11+)
//==============================================

//Tipe data reference

//==================================================
// object
// array
// function
// ==================================================


// tp primitif
// =======================================================================================================================
//str
const nama = "shira"
const char = `${nama} mc`

//number
const tb = 170

//bool
const nikah = true

//undefined
let x;
console.log(x)

//null
const orang = null
console.log(orang)

//symbol
const simbol = Symbol("des 1")
const outputsym = simbol
console.log(outputsym, typeof outputsym)

//bigint
const angka = 78877878787878898898n
console.log(angka, typeof angka)

const output = nama
const outputnb = tb
const outputbol = nikah
console.log(output, typeof output, 'tinggi badan:', outputnb, typeof outputnb,'udah nikah', outputbol,typeof outputbol)
console.log("")

//=============================================================================================================================


//=============================================================================================================================
//tp reference

//object
const or = {
    nama: 'shira',
    tipe: 'mc',
    bini: 'hina'
}

const orangobj = or
console.log(orangobj, typeof orangobj)

//array
const hobi = ["karbit", "nambah bini", "gaming"]
console.log(hobi, typeof hobi)

//function
function ucap (){
    return "halo baby"
}
console.log(ucap())

//============================================================================================================================


console.log("")

let a = 10
let b = a

a = 20
b = a

console.log(b)

//====================================================================================================
console.log("")

let obj1 = {watak: "tsun"}
let obj2 = obj1

obj1.watak = "yandere"

console.log(obj2.watak)