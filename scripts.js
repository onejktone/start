// Menambahkan fungsi klik untuk submenu
document.getElementById('toggleButton').addEventListener('click', function() {
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');

    if (menuIcon.style.display === 'none') {
        // Jika ikon menu disembunyikan, tampilkan ikon menu dan sembunyikan ikon tutup
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        // Jika ikon menu ditampilkan, sembunyikan ikon menu dan tampilkan ikon tutup
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
});

