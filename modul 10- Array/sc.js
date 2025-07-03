//================================================================================================
//array

let array = ["priestess","my bini","my freedom"]
console.log(array) 

//===============================================================================================
//mengambil index array
let array1 = ["priestess","my bini","my freedom"]
console.log(array1[1]) 
console.log(array1[1]) 

//===============================================================================================
//mengubah array
let array2 = ["priestess","my bini","my freedom"]
array2[2] = "my reality"

//============================================================================================
//memanipulasi array
let array3 = ["priestess","my bini","my freedom"]

array3.push("my woman")// push untuk menambah array tetapi di tambah di akhir
console.log(array3) 

array3.pop()// pop untuk menghapus elemen terakhir array
console.log(array3) 

array3.shift()//shift untuk menghapus elemen pertama array
console.log(array3) 

array3.unshift()//unshift untuk mengembalikan elemen pertama di array
console.log(array3) 

//length untuk mendapatkan panjang array
console.log(array3.length) 

//concat untuk menggabungkan array
let arr = ["priestess","my bini","my freedom"]
let concat = arr.concat(["my beuty"])
console.log(concat) 

//slice untuk mengambil index tertentu dari array
let arr1 = ["priestess","my bini","my freedom","my beuty","my life","my home"]
let slice = arr1.slice(2, 5)
console.log(slice) 

//spice untuk menambah atay menghapus elemen dari array
let arr2 = ["priestess","my bini","my freedom","my beuty","my life","my home"]
let spice = arr2.splice(2, 1, "baby")
console.log(spice) 


//indexof untuk mencari index tertentu
let arr3 = ["priestess","my bini","my freedom","my beuty","my life","my home"]
console.log(arr3.indexOf(3)) 

//includes untuk mengecek apakah elemen itu ada didalam array
let arr4 = ["priestess","my bini","my freedom","my beuty","my life","my home"]
console.log(arr4.includes("my bini")) 

//================================================================================================
//multidimensi array
//or nested array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]  
]

console.log(matrix[2][1])// mengakses elemen pada baris dan kolom

//=====================================================================================================











