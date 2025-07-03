//⁡⁢⁣⁢========================================================================⁡
//⁡⁣⁢⁢string⁡

// let a = 'halo'
// let b = "apa"
// let c = `kabar`

// console.log(a)
// console.log(b)
// console.log(c)

//⁡⁢⁣⁢========================================================================⁡

// ⁡⁣⁢⁢mengakses str⁡
// let v = "theresa"
// console.log(v[6])

//⁡⁢⁣⁢========================================================================⁡
//⁡⁣⁢⁢propety dan method⁡

// let a ="theresa my bini my quen"

// console.log(a.length)// ⁡⁣⁢⁢melihat panjang str⁡
// console.log(a.toUpperCase())// ⁡⁣⁢⁢mengubah menjadi kapital⁡
// console.log(a.toLowerCase())// ⁡⁣⁢⁢mengecilkan str⁡

// console.log("")

// let b = "                 theresa my bini                                                "
// console.log(b.trim())// ⁡⁣⁢⁢mengilangkan spasi dari bagian kanan dan kiri str⁡

//⁡⁢⁣⁢===========================================================================================================⁡
// ⁡⁣⁢⁢manipulasi str⁡

// let a = "theresa"
// let b = "my bini"

//⁡⁣⁢⁢penggabungan str ⁡
// let gabung = `${a} ${b}`
// console.log(gabung)


//⁡⁣⁢⁢mengambil bagian str: slice atau substring⁡
// console.log(b.slice(0,6))
// console.log(b.substring(4,6))


//⁡⁣⁢⁢mengganti bagiann dari str: replace⁡
// console.log(a.replace('theresa', 'amiya'))//⁡⁢⁣⁣ cara 1⁡

// let ganti = a.replace("theresa", "priestess")// ⁡⁢⁣⁣cara 2⁡
// console.log(ganti)


// //⁡⁣⁢⁢array di str: join⁡
// let array = ["theresa", "my", "bini"]
// let arraygabung = array.join('=')// ⁡⁣⁢⁢di dalam kurung join bisa di isi apa aja⁡
// console.log(arraygabung)// ⁡⁣⁢⁢penggabungan array⁡

// //⁡⁣⁢⁢str menjadi array: split⁡
// let test = "Theresa=adalah=bini=saya"
// let hasil = test.split("=", 2)// ⁡⁣⁢⁢dengan menuliskan angka maka akan melimit hasil perubahan str menjadi array⁡
// console.log(hasil)

//⁡⁢⁣⁢========================================================================================================================⁡
//⁡⁣⁢⁢pencarian dalam str⁡

//⁡⁣⁢⁢indexof⁡
// let a = "Theresa adalah My Bini My Queen My Life"
// console.log(a.indexOf("Bini"))

// //⁡⁣⁢⁢lastindex⁡
// console.log(a.lastIndexOf("My"))// ⁡⁣⁢⁢mencari index terakahir⁡

// //inlclude
// console.log(a.includes("Queen"))// ⁡⁣⁢⁢melihat apakah kata ini ada di dalam str: true⁡
// console.log(a.includes("bini"))// ⁡⁣⁢⁢melihat apakah kata ini ada di dalam str: False⁡


//⁡⁣⁣⁢test⁡
// let a = 'javasrcipt'
// let b = a.replace("j", 'J')
// console.log(b)




