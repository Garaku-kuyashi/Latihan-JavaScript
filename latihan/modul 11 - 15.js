//latihan object

// let buku = {
//     judul: "Boochi The Rock",
//     penulis: "Aki Hamazi",
//     tahunterbit: "2020",
//     tersedia: true
// }

// //1. menampilkan semua isi object
// console.log("menampilkan seluruh object")
// console.log(buku)

// //2.mengubah tersedia menjadi false
// console.log("mengubah tersedia menjadi false")
// buku.tersedia = false
// console.log(buku)

// //3. menambahkan properti penerbit
// console.log("menambahkan properti penerbit")
// buku.penerbit = "m&c"
// console.log(buku)

// //4.menampilkan seluruh hasil
// console.log("enampilkan seluruh hasil")
// console.table(buku)


//latihan if else
// let nilai = 75

// if (nilai >= 90) {
//     console.log("nilai anda A")
    

// }else if (nilai >= 70) {
//     console.log("nilai anda B")
    
// }else if (nilai >= 55) {
//     console.log("nilai anda C")
    
// }else if (nilai < 55) {
//     console.log("nilai anda D")
    
// }else{
//     console.log("nilai anda E")
// }


//latihan switch case

// let hari = 7
// let aktivitas;

// switch (hari) {
//     case 1:
//         aktivitas = ("senin: hari kerja")
//         break;

//     case 2:
//         aktivitas = ("selasa: hari kerja")
//         break;

//     case 3:
//         aktivitas = ("rabu: hari kerja")
//         break;

//     case 4:
//         aktivitas = ("kamis: hari kerja")
//         break;

//     case 5:
//         aktivitas = ("jumat:hari kerja")
//         break;

//     case 6:
//         aktivitas = ("sabtu: santai")
//         break;

//     case 7:
//         aktivitas = ("minggu: istirahat")
//         break;

//     default:
//         console.log("tidak ada kegiatan")
//     }
// console.log(aktivitas)
    
    

//latihan loop

// //for
// console.log("for loop")

// for (let i = 1; i <= 10; i++) {
//     console.log(`iterasi ke-${i}`)
// }

// // while loop
// console.log("")
// console.log("while loop")
// let a = 1

// while ( a <= 20) {
//     if (a % 2 !== 0) {
//         console.log(`hasil-${a}`)
//     }
//     a++
    
// }

// //do while
// console.log("")
// console.log("do while loop")
// let b = 5

// do {
//    console.log(`itersai ${b}`)
//    b-- 
// } while (b >= 1);



//latihan function

//1.luas persegi
console.log("menghitung luas persegi")

function persegi(x) {
    return x * x
    
}
console.log(persegi(4))

//2. kartu ucapan
console.log("")
console.log("kartu ucapan")

function ucapan(kartu = "Shira") {
    console.log(`Halo ${kartu} !`)
}
ucapan()


//3. hitung total harga
console.log("")
console.log("hitung total harga")

function total(a , b) {
    return a * b
}
console.log(total(3000, 10))


