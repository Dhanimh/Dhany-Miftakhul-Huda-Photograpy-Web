// Function untuk menangani semua fungsionalitas JavaScript pada website
function initializeWebsite() {
    
    // 1. Fungsionalitas Menu Mobile (Hamburger Icon)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinksMobile = document.querySelectorAll('.navbar a');

    if (menuIcon) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    }

    // Sembunyikan menu setelah link diklik (di tampilan mobile)
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            // Periksa apakah menu icon sedang tampil (artinya di mobile view)
            if (window.getComputedStyle(menuIcon).display === 'block') {
                navbar.classList.remove('active');
            }
        });
    });

    // 2. Tanda Aktif pada Navigasi (Untuk Multi-Page)
    const navLinks = document.querySelectorAll('.navbar a');
    // Ambil nama file saat ini (e.g., index.html) atau default ke 'index.html'
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; 

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();

        // Hapus kelas 'active' dari semua link
        link.classList.remove('active');

        // Tambahkan kelas 'active' jika nama file link cocok dengan nama file saat ini
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
}

// Jalankan fungsi setelah dokumen dimuat
document.addEventListener('DOMContentLoaded', initializeWebsite);