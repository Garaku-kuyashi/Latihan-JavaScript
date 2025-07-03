//latihan string
let nama = "Shira Futura"
//1.panjang huruf
console.log(nama.length)

//2. hrurf besar semua
console.log(nama.toUpperCase())

//3. melihat apakah kata negnadung fu
console.log(nama.includes("Fu"))

//4. potong kata pertama
console.log(nama.replace("Shira", ""))

//latihan number
let number = "3.14159"

//1.Konversi jadi angka.
console.log(parseInt(number))

//2.Bulatkan 2 angka di belakang koma
let number1 = 3.14159
console.log(number1.toFixed(2))

//3.Cek apakah nilainya NaN.
console.log(isNaN(number))


//latihan math object

//1.Hitung akar dari 49.
console.log(Math.sqrt(49))

//2.Dapatkan nilai maksimum dari 8, 19, 3, 12.
console.log(Math.max(8, 19, 3, 12))

//3.Buat angka acak antara 1–10.
console.log(Math.random()*10)+1

// latihan date object
//1.Tampilkan tanggal hari ini dalam format: DD/MM/YYYY
let tanggal = new Date()
console.log(tanggal)

//2.Tampilkan nama hari saat ini (Senin, Selasa, ...)
let tanggal1 = new Date()
console.log(tanggal1.getDay())


//latihan array
//1. tambah pisang
let array = ["apel", "jeruk", "mangga"]
let push = array.push("pisang")
console.log(push)

//2.Hapus "jeruk".
let array1 = ["apel", "jeruk", "mangga"]
array1.splice(1,1)
console.log(array1)

//3.Tampilkan jumlah buah.
let array2 = ["apel", "jeruk", "mangga"]
console.log(array2.length)

//4.Gabungkan semua buah jadi satu string dipisahkan koma.
let array3 = ["apel", "jeruk", "mangga"]
console.log(array3.join(","))


