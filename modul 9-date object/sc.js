//=========================================================================================
//date object

//membuat date obejct
let sekarang = new Date()
console.log(sekarang)// menampilkan tanggal saat ini

//membuat tanggal spesifik 
let sepc = new Date("june 24, 2006 23:30:00")
console.log(sepc)

//menggunakan parameter(tahun,bulan,hari,jam,menit,detik,milidetik)
let costum = new Date(2024, 7, 24, 24, 56, 45)
console.log(costum)

//===============================================================================================

//mengambil informasi tggl dan waktu
let day = new Date()
console.log(day.getFullYear())
console.log(day.getMonth())
console.log(day.getHours())

//=================================================================================================

//mengatur tggl dan waktu: settfullyear/ atau gunakan set lainnya
let date = new Date()
date.setFullYear(6069)
date.setHours(12)
console.log(date)

//=============================================================================================

//melakaukan perhitungan waktu 
let go = new Date(2024, 7, 24, 24, 56, 45)
let end = new Date(2024, 9, 10, 24, 56, 45)
let diff = end - go
console.log(diff)//hasil output adalaha milisecond

//tetapi jikaingin mencari hari atau bulan atau tahun menggunakan car ini
let out = diff / (1000 * 3600 * 24)//contoh mencari hari
console.log("hari: ", out)
