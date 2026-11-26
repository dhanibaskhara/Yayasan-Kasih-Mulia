# Rancangan Sitemap — Yayasan Kasih Mulia

- Domain acuan: https://www.yayasankasihmulia.org/
- Status: rekomendasi arsitektur informasi, bukan sitemap XML yang sudah dipasang.
- Dasar: crawl konten publik tanggal 26 November 2026.

## 1. Struktur navigasi yang disarankan

```text
Beranda /
|
+-- Tentang Yayasan
|   +-- Tentang Kami /tentang-kami/
|   +-- Sejarah YKM /sejarah-ykm/
|   +-- Visi & Misi /visi-misi/
|   +-- Sambutan Pimpinan /sambutan-pimpinan/
|   +-- Sambutan Presiden RI /sambutan-president-ri/ [arsip historis]
|
+-- Program Layanan
|   +-- Sekilas Program /sekilas-program/
|   +-- Primary Program /primary-program/
|   +-- Re-Entry Program /re-entry-program/
|   +-- Aftercare Service /aftercare-service/
|   +-- Family Program /family-program/
|   +-- Preventif Program /preventif-program/
|
+-- Edukasi & Asesmen
|   +-- Apa Itu Adiksi? /apa-itu-adiksi/
|   +-- Apakah Itu Adiksi? /apakah-itu-adiksi/ [audit duplikasi]
|   +-- Drug Abuse Screening Test /drug-abuse-screening-test-dast/
|   +-- Efektivitas Therapeutic Communities /apakah-therapeutic-communities-efektif/
|
+-- Pelatihan Profesional
|   +-- Learning Center TC /learning-center-therapeutic-community/
|   +-- Parahita Training Provider /parahita-training-provider/
|   +-- UTC Training /utc-training-parahita-education-provider/
|   +-- Bimtek Kurikulum 1 /bimbingan-teknis-bimtek-kurikulum-1/
|   +-- Bimtek Pekerja Sosial IPWL /bimbingan-teknis-pelaksanaan-tugas-pekerja-sosial-di-institusi-penerima-wajib-lapor/
|   +-- Refresher Training Konselor /refresher-training-dan-uji-kompetensi-untuk-konselor-adiksi/
|
+-- Berita & Kegiatan
|   +-- Artikel dan berita [arsip berita yang ditetapkan]
|   +-- Galeri Kegiatan /gallery-kegiatan/
|
+-- Donasi & Kolaborasi
|   +-- Donasi /donasi/
|   +-- Pendanaan Program /pendanaan-program-rehabilitasi-dan-pelatihan-yayasan-kasih-mulia/
|   +-- Donasi Sanur Sahabat /donasi-sanur-sahabat/
|
+-- Hubungi Kami /hubungi-kami/
```

## 2. Rekomendasi menu utama

1. Beranda
2. Tentang Kami
3. Program
4. Edukasi
5. Pelatihan
6. Berita & Kegiatan
7. Donasi
8. Hubungi Kami

Gunakan CTA yang jelas seperti **Konsultasi** dan **Donasi**. Tautkan CTA konsultasi ke kanal resmi yang sudah diverifikasi. Verifikasi ulang seluruh nomor rekening dan kontak sebelum dipublikasikan.

## 3. Struktur footer

- **Yayasan:** Tentang Kami, Sejarah, Visi & Misi, Sambutan Pimpinan.
- **Layanan:** Sekilas Program, Primary, Re-Entry, Aftercare, Family, Preventif.
- **Informasi:** Edukasi Adiksi, DAST, Learning Center, Pelatihan, Berita, Galeri.
- **Dukungan:** Donasi, Pendanaan Program, Hubungi Kami, media sosial resmi.

## 4. URL yang perlu diaudit sebelum migrasi

| Temuan | Tindakan yang disarankan |
|---|---|
| `/` dan `/beranda/` | Jadikan `/` sebagai homepage canonical; pertimbangkan redirect 301 dari `/beranda/` setelah verifikasi. |
| `/apa-itu-adiksi/` dan `/apakah-itu-adiksi/` | Bandingkan isi, gabungkan konten unik, pilih satu URL canonical, lalu redirect URL duplikat bila tepat. |
| `/gallery/` dan `/gallery-kegiatan/` | Tentukan apakah keduanya punya fungsi berbeda; gabungkan jika duplikat. |
| Halaman pelatihan lama | Tandai sebagai arsip dan tampilkan tanggal/status agar tidak disangka jadwal aktif. |
| Halaman testimoni | Verifikasi isi, konteks, dan persetujuan publikasi sebelum ditayangkan. |
| `/Hacked-by-IndoXploit/` | Jangan masukkan ke navigasi/sitemap. Investigasi WordPress, database, sitemap, akun admin, plugin/theme, dan Search Console. |

Catatan temuan crawl: ditemukan URL historis `/Hacked-by-IndoXploit/` serta teks “Hacked????” pada halaman testimoni. Temuan crawl ini tidak membuktikan situs sedang diretas sekarang; lakukan pemeriksaan keamanan sebelum menghapus atau mengubah URL.

## 5. Sitemap XML teknis

Sitemap XML hanya boleh berisi URL yang:
- Merespons HTTP 200.
- Dapat diakses publik dan layak diindeks.
- Menggunakan URL canonical.
- Tidak diberi `noindex` dan tidak diblokir oleh `robots.txt`.

Contoh sitemap index (sesuaikan dengan plugin SEO WordPress yang digunakan):

```text
https://www.yayasankasihmulia.org/sitemap_index.xml
    +-- page-sitemap.xml
    +-- post-sitemap.xml
    +-- category-sitemap.xml  [hanya jika arsip kategori bernilai]
    +-- gallery-sitemap.xml   [opsional, jika galeri memiliki detail yang layak diindeks]
```

Gunakan satu pengelola sitemap utama. Hindari sitemap manual dan plugin SEO ganda yang menghasilkan aturan bertentangan. Jangan sertakan URL duplikat, halaman uji coba, hasil peretasan, attachment tanpa nilai, atau URL yang sudah dialihkan.

## 6. Checklist implementasi

- [ ] Audit seluruh URL dan status HTTP.
- [ ] Tetapkan permalink canonical untuk setiap topik.
- [ ] Rancang landing page induk untuk Program, Edukasi, Pelatihan, dan Berita.
- [ ] Buat breadcrumb untuk halaman detail.
- [ ] Perbarui tautan internal setelah redirect.
- [ ] Pastikan konten testimoni dan foto memiliki izin publikasi yang sesuai.
- [ ] Periksa sitemap XML dan robots.txt.
- [ ] Periksa canonical, redirect, 404, dan status indeks di Google Search Console.

**Penting:** struktur ini merupakan rekomendasi berdasarkan crawl publik, bukan audit penuh WordPress admin. Verifikasi setiap URL, isi, dan statusnya sebelum menghapus, menggabungkan, atau mengalihkan halaman.
