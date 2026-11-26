# HTML Prototype — Yayasan Kasih Mulia

Delapan halaman HTML yang diberikan untuk pengembangan website:

- `index.html` — Beranda
- `tentang.html` — Tentang Kami & Transparansi
- `program.html` — Program Rawatan
- `keluarga.html` — Informasi untuk Keluarga
- `edukasi.html` — Edukasi Adiksi
- `pelatihan.html` — Pelatihan Konselor
- `konsultasi.html` — Konsultasi Rahasia & Kontak
- `donasi.html` — Donasi

## Dependensi yang dirujuk oleh HTML

Halaman menggunakan:
- Tailwind CSS melalui CDN.
- Google Fonts: Plus Jakarta Sans dan Poppins.
- `css/style.css` (belum disertakan dalam unggahan ini).
- `js/layout.js` (belum disertakan dalam unggahan ini, untuk header/footer bersama).

Agar halaman dapat berjalan konsisten saat dibuka sebagai satu situs, tambahkan file CSS dan JavaScript tersebut pada folder `website/css/` dan `website/js/`, atau sesuaikan referensi path di seluruh halaman.

## Catatan sebelum production

- Form konsultasi dan donasi pada file HTML perlu dihubungkan ke backend/payment gateway; jangan menganggap submit demo sebagai transaksi atau pengiriman data yang benar-benar tersimpan.
- Verifikasi nomor rekening, detail pembayaran, alamat, nomor telepon, klaim legalitas/akreditasi, serta seluruh informasi layanan sebelum dipublikasikan.
- Halaman ini belum diuji end-to-end sebagai satu website dan belum dipasang ke hosting.
