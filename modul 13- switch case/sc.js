//==========================================================================================================
//switch case 

//contoh 1
let hari = 9
let hasil;

switch( hari ){
    case 1: 
    hasil = "75"
    break;// break digunakan untuk menghentikan eksekusi setelah satu kasus selesai

    case 2: 
    hasil = "85"
    break;

    default: hasil = "tidak ada"
    //default digunakan ketika tidak ada kasus yang cocok/ mirip seperti else
}
console.log(hasil)

//contoh 2
let nilai = 80

switch(true){
    case nilai > 80:
        console.log("lulus")
        break;
        
    case nilai > 70:
        console.log("remedi")
        break;
        
    default:
        console.log("gagal")
}
console.log(nilai)

//=================================================================================================================================