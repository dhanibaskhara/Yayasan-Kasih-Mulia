# HTML Prototype — Yayasan Kasih Mulia

Delapan halaman HTML yang diberikan untuk pengembangan website:

- `index.html` — Beranda
- `tentang.html` — Tentang Kami & Transparansi
- `program.html` — Program Rawatan
- `keluarga.html` — Informasi untuk Keluarga
- `edukasi.html` — Edukasi Adiksi
- `adiksi.html` — Apa Itu Adiksi?
- `galeri.html` — Galeri Kegiatan dengan lightbox
- `pelatihan.html` — Pelatihan Konselor
- `konsultasi.html` — Konsultasi Rahasia & Kontak
- `donasi.html` — Donasi

## Dependensi yang dirujuk oleh HTML

Halaman menggunakan:
- Tailwind CSS melalui CDN.
- Google Fonts: Plus Jakarta Sans dan Poppins.
- `css/style.css` — stylesheet bersama.
- `js/layout.js` — render header/footer, navigasi mobile, dan accordion bersama.

Agar halaman dapat berjalan konsisten saat dibuka sebagai satu situs, tambahkan file CSS dan JavaScript tersebut pada folder `website/css/` dan `website/js/`, atau sesuaikan referensi path di seluruh halaman.

## Catatan sebelum production

- Form konsultasi dan donasi pada file HTML perlu dihubungkan ke backend/payment gateway; jangan menganggap submit demo sebagai transaksi atau pengiriman data yang benar-benar tersimpan.
- Verifikasi nomor rekening, detail pembayaran, alamat, nomor telepon, klaim legalitas/akreditasi, serta seluruh informasi layanan sebelum dipublikasikan.
- Halaman ini belum diuji end-to-end sebagai satu website dan belum dipasang ke hosting.


## Galeri Foto

Halaman `galeri.html` menampilkan foto fasilitas dan dokumentasi kegiatan yang ditautkan dari media publik resmi Yayasan Kasih Mulia. Navigasi utama dan footer sudah memuat tautan ke halaman galeri.


## Catatan pemeliharaan
- Header, footer, navigasi, dan tombol WhatsApp mobile dirender dari `js/layout.js`.
- Aturan redirect 301 dicatat pada `../REDIRECTS.md`; penerapan perlu dilakukan pada Cloudflare/hosting.
- Canonical, Open Graph, dan sitemap disesuaikan dengan URL GitHub Pages saat ini.
- Aset gambar lokal belum selesai karena server gambar lama menolak unduhan; lihat `assets/img/README.md`.
