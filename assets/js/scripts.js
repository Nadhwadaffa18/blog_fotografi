// Menunggu dokumen (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Pilih tombol berdasarkan ID
    const menuToggle = document.getElementById('menu-toggle');
    // Pilih menu navigasi berdasarkan ID
    const navMenu = document.getElementById('nav-menu');

    // Tambahkan event listener 'click' pada tombol
    menuToggle.addEventListener('click', function() {
        // Toggle (tambah/hapus) class 'hidden' pada menu navigasi
        // Tailwind akan menangani sisanya (menampilkan/menyembunyikan)
        navMenu.classList.toggle('hidden');
    });

});