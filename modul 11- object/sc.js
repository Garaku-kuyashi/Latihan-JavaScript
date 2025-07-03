//=========================================================================================================================================
//object

//cara bikin object literal
let nama = {
    nama: "shira",
    bini: "hina"
}

console.log(nama)

//cara membuat obeject dengna contructer new
let bini = new Object()
bini.baik = "theresa"
bini.yande = "priestess"
console.log(bini)

//cara mengakses object
console.log(bini.baik)// menggunakan titik untuk mengakses value dengan menuliskan key nya

console.log(bini["yande"])// menggunakan kurung kotak untuk mengakses value dengan menuliskan key nya: kegunaan kurung kotak adalah untuk menampilkan hasil yang memiliki spasi

//menambah atau mengubah properti
bini.pink = "lin yuxia"
console.log(bini)// menambah

bini.pink = "eyjaffala"
console.log(bini)// mengubah

delete bini.pink
console.log(bini)// menghapus

//destructuring object: adalah fitur ES6 yang memungkinkan untuk mengambil nilai dari object dan menempatakan nya dalam variabel
let { baik, yande } = bini //caranya dengan menuliskan key dari object 
console.log(baik)
console.log(yande)

//nested object
let mc = {
    namak: "shira",
    binik: {
        kivotos: "hina yuuka shiroko",
        terra: "theresa priestess"
    }
    
}
console.log(mc.binik)
console.log(mc.binik.terra)

//=========================================================================================================================================================