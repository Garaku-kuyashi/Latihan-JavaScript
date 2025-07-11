//===============================================================================================
// DOM

//DOM ADALAH REPRSESENTASI STRUKTUR DOKUMEN HTM ATAU XML DALAM BENTUK TREE ATAU POHON YANG MEMUNGKINKAN PROGRAM UNTUK MENGAKSES DAN MEMANIPULASI KONTEN,STRUKTUR, DAN GAYA HALAMAN WEB SECAR DINAMSI

//NODE : SETIAP ELEMEN DALAM TREE DOM DISEBUT NODE. ADA BEBERAPA JENIS NODE, TERMASUK ELEMEN TEKS DAN ATRIBUT

//ROOT NODE: DOKUMNE HTML DIMULAI DARI NODE AKAR (DOCUMENT), YANG MERUPAKAN ENTRY POINT UNTUK MENGAKSES ELEMEN LAIN DALA HALAMAN

//======================================================================================================

// mengakses dom

//getElemenById: mengakses elemen berdasarkan id

//getElemenByClassName: mengakses elemen berdasarkan class

//getElemenByTagName: mengakses elemen berdasarkan tag

//querySelector: Mengakses elemen menggunakan selector css

//querySelectorAll: Mengakses semua elemen yang sesuai dengan selector css

//===================================================================================================

//memanipulasi elemen 

// mengubah konten: element.textContent atau element.innerHTML

// mengubah atribut: element.setAttribute(attribute, value)

//mengubah gaya: element.style.property = value

//======================================================================================================

// menambah dan menghapus elemen dalam DOM

//menambah
//createElement(tagname): membuat elemen baru

//appenChild(childnode): menambahkan elemen sebagai anak dari elemen lain

//insertBefore(newNode, referenceNode): menyisipkan elemen sebeleum elemen refrensi

//menghapus
// removeChild(childNode): menghapus elemen anak

//remove(): menghapus elemen secara langsung

//=======================================================================================================

//DOM Traversal
// dom ini adalah proses untuk menjelajahi nodedi dom tree untuk menemukan elemen tertentu. dapat berpindah ke elemen anak, parent, atau siblings menggunakan berbagai properti dan metode

//properti

//parentNode: mendapatakan elemen orang tua

//childNode: mendapatkan nodelist dari semua anak elemen

//firstChild/lastChild: menapatkan anak pertama/terakhir

//nextSibiling/previousSibling: mendapatkan elemen saudara berikutnya/ sebelumnya

//===============================================================================================