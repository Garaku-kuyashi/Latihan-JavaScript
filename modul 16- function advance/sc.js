//==========================================================================================================
//functon advance

//function expression: membuat fungsi dengan ekspresi

let kali = function (a,b){
    return a * b
}

console.log(kali(6 , 10))

//------------------------------------------------------------------------------------------------------------------

//arrow function(=>)  adalah cara singkat untuk menulis function expression dan diperkenalkan pada ES6\
 let tambah = (a , b) => {
    return a + b
 }
 console.log(tambah(6 , 10))

 
 //tanpa return
 let kurang = ( a, b) => (a - b)
 
 console.log(kurang(20 , 10))
// note: ini digunakan jika ada satu pernyataan pada satu fungsi

//contoh yang tidak bisa di menggunakan tanpa return
 let bagi = (a , b) => {
    console.log("ini adalah hasil bagi")
    return a / b
 }
 console.log(tambah(6 , 3))
//hal ini dikarenakan terdapat sebuah pernyataan sebelum return

//------------------------------------------------------------------------------------------------------------------

//IIFE (immediately invoked function expression): adalah fungsi yang dipanggil langsung setelah dibuat, ini berguna untuk mengisolasi variabel dan mencegahnya mengganggu kode lain

// (function(){
//     console.log = "halo";

    
// })()

const api = (function(){
    const apy = "1234";
    const ayp = "halo";

    return {
        getApy: function(){
            return apy;
        },
        getAyp: function(){
            return ayp;
        }
    };
})();

console.log(api.getApy());  // Output: 1234
console.log(api.getAyp());  // Output: halo


//--------------------------------------------------------------------------------------------------------------------------------

//high order dan callback function: adalah fungsi yange menerima fungsi lain sebagai argumen atau mengembalikan fungsi lain sebagai hasil

//high order function

function manipulasi (arr, panggil){
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        hasil.push(panggil(arr[i]))  
    }
    return hasil
}

function kali2(x){
    return x * 2
}

let angka = [1,2,3,4,5]
let hasil = manipulasi(angka, kali2)
console.log(hasil)

//callback function

function selesai (tugas, panggil){
    console.log("tugas selesai: ",  tugas)
    panggil()
}

function tugasselesai (){
    console.log("tugas terselesaikan")
}
selesai("belajar javasrcipt", tugasselesai)

//------------------------------------------------------------------------------------------------------------------------------

//recursion: terjadi ketika sebuah function memanggil dirinya sendirin secara langsung atau tidak langsung untuk menyelesaikan sebagian dari masalah yang diberikan

function faktor(n) {
    if(n===0){
        return 1;
    }
    
    return n * faktor (n-1)
}

console.log(faktor(5)) 

//------------------------------------------------------------------------------------------------------------------------------------
//=================================================================================================================================





