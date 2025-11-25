// Simple interactive behavior: nav toggle, smooth scroll, contact form validation
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle && navToggle.addEventListener('click', function () {
    navList.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav
        if (navList.classList.contains('show')) navList.classList.remove('show');
      }
    });
  });

  // Simple contact form handling (client-side only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Mohon lengkapi semua kolom terlebih dahulu.';
        status.style.color = '#b33';
        return;
      }

      // Simulasi pengiriman — ganti dengan fetch ke endpoint server jika ada
      status.style.color = '#2a7a2a';
      status.textContent = 'Mengirim...';

      setTimeout(() => {
        status.textContent = 'Terima kasih! Pesan Anda telah terkirim (simulasi).';
        form.reset();
      }, 900);
    });
  }

  // Profile image fallback handling: jika tidak ada gambar, gunakan inisial
  const img = document.getElementById('profile-photo');
  if (img) {
    img.addEventListener('error', () => {
      // Jika foto tidak ditemukan, tampilkan placeholder sederhana
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
           <rect width="100%" height="100%" fill="${encodeURIComponent('#FFE1AF')}" />
           <text x="50%" y="55%" font-size="72" text-anchor="middle" fill="${encodeURIComponent('#B77466')}" font-family="Inter, sans-serif">FR</text>
         </svg>`
      );
    });
  }
});

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

// Ambil semua tombol demo
const demoButtons = document.querySelectorAll(".demo-btn");

demoButtons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
    popupImg.src = this.getAttribute("href");
  });
});

// Tutup popup
closeBtn.addEventListener("click", () => popup.style.display = "none");

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});
