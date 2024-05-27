const button = document.getElementById('alertButton');
const button2 = document.getElementById('profil');

button.addEventListener('click',function(){
    alert('Profil\nPerkenalkan Nama saya Lukmanul hakim asal dari kuningan umur saya 19th.Saya lulusan dari SMK Swadaya PUI kuningan jurusan Teknik informatika Jaringan (TKJ) dan saat ini saya sedang berkuliah di STIKOM Poltek Cirebon semester 2 jurusan Teknik Informatika.Saya memiliki ketertarikan yang besar dalam bidang it, khususnya dalam bidang front-end');
});
button2.addEventListener('click',function(){
    alert('Profil\nPerkenalkan Nama saya Lukmanul hakim asal dari kuningan umur saya 19th.Saya lulusan dari SMK Swadaya PUI kuningan jurusan Teknik informatika Jaringan (TKJ) dan saat ini saya sedang berkuliah di STIKOM Poltek Cirebon semester 2 jurusan Teknik Informatika.Saya memiliki ketertarikan yang besar dalam bidang it, khususnya dalam bidang front-end');
});


// penjelasan codingan diatas
// "document.getElementById" untuk memilih elemen id dan "event listener'click'"untuk merspon klik ketika tombol diklik muncul pesan alert

function navigate(url){
    window.location.href = url;
}