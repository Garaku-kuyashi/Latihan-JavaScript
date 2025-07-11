//adalah konsep yang sangat penting dalam pengembangan web. ini memungkinkan anda untuk menangkap dan merespon interaksi pengguna, seperti klik tombol, gerakan mouse, input keyboard, dan banyak lagi

//apa itu event: adalah sebuah tindakan atau kejadian yang terjadi di halaman web. contohnya adalah klk pada tombol, pengisian formulir, atau penguliran halaman. event ini bisa ditangkap dan di tangani menggunakan javascript

//=====================================================================================================================================

//event listener
// mekanisme untuk menangkap event dan menjalan kan fungsi tertentu ketika event tersebut terjadi

//2 cara menambhakan event listener
//1. digunakan di html: menggunakan onclick

//2. menggunakan addEventListener: pada js

//jenis-jenis event
//1. mouse event
//click: ketika elemen di klik
//dblclik: ketika elemen dikllik 2 kali
//mouseover:ketika mouse berada di atas elemen
//mouseout: ketika mouse meninggalkan elemen

//2.keyboard event
//keydown: ketika sebuah tombol di tekan
//keyup: ketika sebuah tombol dilepaskan
//keypress: ketika sebuah tombol ditekan dan dilepaskan

//3. form event
//submit: ketika form dikirim
//change: ketika nilai elemen input berubah
//focus: ketika elemen form mendapatkan fokus
//blur: ketika elemen form kehilangan fokus

//4. window event
//load: ketika halaman selesai dimuat
//resize: ketika ukuran jendela berubah
//scroll: ketika halaman digulir

// const tombol = document.querySelector('button')
// tombol.addEventListener('click', () => {
//     alert('diklik')
// })

// const sub = document.getElementById('submit')
// // sub.addEventListener('click', () => {
// //     alert('halo')
// // })
// sub.addEventListener('dblclick', () => {
//     alert('hashire')
// })

const tek = document.getElementById('teks')
const tekan = document.getElementById('submit')
const balik = document.getElementById('balik')

tekan.addEventListener('click', () =>{
    tek.style.backgroundColor = 'red'
})
balik.addEventListener('click', () =>{
    tek.style.backgroundColor = 'white'
})
tek.addEventListener('mouseover', ()=> {
    tek.style.color= 'blue'
})
tek.addEventListener('mouseout', ()=> {
    tek.style.color= 'black'
})