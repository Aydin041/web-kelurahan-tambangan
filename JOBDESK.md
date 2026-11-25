# Jobdesk Tim Pengembang — Portal Digital Kelurahan Tambangan

**Proyek:** Website Portal Digital Kelurahan Tambangan, Kec. Mijen, Kota Semarang  
**Program:** KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang  

## Prinsip Pembagian

- **Satu orang satu komponen utama, plus satu kontribusi pendamping di komponen orang lain.** Semua anggota menyentuh lebih dari satu bagian, dan tidak ada komponen yang bergantung pada satu orang saja.
- **Beban Hussain dibuat ringan & ramah pemula:** memegang penyempurnaan Dashboard Admin (scaffold sudah berjalan), QA/Testing seluruh alur, serta dokumentasi & panduan operator Kelurahan, dengan pendampingan dari Aydin dan Dzihan.
- **Pekerjaan dibagi per tahap** agar progres terukur mulai dari tahap prototype hingga serah terima ke Kelurahan.

---

## Matriks Cakupan

| Topik / Komponen | Utama | Pendamping |
| :--- | :--- | :--- |
| **Arsitektur, Integrasi & Deployment** | Muhamad Aydin Alhafiz | Dzihan Zahril Musthofa |
| **Frontend Publik (14 Halaman) & UMKM (QR/Maps)** | Rasyid Rasidi | Muhamad Aydin Alhafiz |
| **Backend, Database (ERD) & Auth 4 Role** | Dzihan Zahril Musthofa | Muhamad Aydin Alhafiz |
| **Dashboard Admin (13 Menu) & Moderasi** | Hussain Abid | Muhamad Aydin Alhafiz |
| **QA/Testing, Dokumentasi & Serah Terima** | Hussain Abid | Semua Anggota |

---

## 1. Muhamad Aydin Alhafiz (Utama: Arsitektur & Integrasi, Pendamping: Frontend & Admin)

- **Tahap 1 (Persiapan & Paparan):** Memimpin paparan ke pihak Kelurahan, mengonfirmasi ketersediaan server/hosting Kelurahan (Opsi 1 PHP/MySQL vs Opsi 2 Supabase), dan menyiapkan repositori GitHub tim.
- **Tahap 2 (Integrasi Awal):** Menyambungkan frontend yang sudah ada ke database/API (mengganti `localStorage` pada data UMKM, Berita, Agenda, dan Pengumuman).
- **Tahap 3 (Keamanan & Role):** Mengintegrasikan sistem login 4 Role (Super Admin, Admin/Operator, Kontributor, Masyarakat) bersama Dzihan.
- **Tahap 4 (Deployment & Serah Terima):** Melakukan deployment ke hosting/cloud, pengujian akhir bersama Hussain, dan serah terima akses ke perangkat Kelurahan.

## 2. Rasyid Rasidi (Utama: Frontend Publik & UMKM, Pendamping: Backend/API)

- **Tahap 1 (Audit UI/UX):** Memeriksa seluruh 14 halaman publik pada tampilan Desktop, Tablet, dan Mobile agar tidak ada layout yang terpotong.
- **Tahap 2 (Fitur UMKM Digital):** Memastikan halaman Detail UMKM (Daftar Menu, QR Code otomatis, tautan Google Maps, dan tombol WhatsApp) berjalan mulus dengan data dinamis.
- **Tahap 3 (Konten & Aset):** Memastikan seluruh foto lokal di `assets/img/` teroptimasi, ringan, dan tidak ada gambar yang rusak.
- **Tahap 4 (Pendampingan Integrasi):** Membantu Dzihan dan Aydin menguji pemanggilan data dari API ke tampilan publik (Berita, Galeri filter, Layanan).

## 3. Dzihan Zahril Musthofa (Utama: Backend & Database, Pendamping: Integrasi)

- **Tahap 1 (Perancangan Database):** Mengimplementasikan skema tabel sesuai ERD (`users`, `umkm`, `umkm_products`, `news`, `announcements`, `agendas`, `gallery`, `aspirations`).
- **Tahap 2 (API CRUD):** Membangun endpoint/fungsi CRUD untuk UMKM, Berita, Pengumuman, Agenda, dan Galeri, serta fitur upload gambar.
- **Tahap 3 (Autentikasi & Hak Akses):** Menyiapkan sistem autentikasi dan pembatasan hak akses untuk 4 Role pengguna.
- **Tahap 4 (Keamanan & Backup):** Melakukan uji beban sederhana, validasi input form (mencegah data sensitif seperti NIK/KK), dan menyiapkan backup database.

## 4. Hussain Abid (Utama: Dashboard Admin, QA & Dokumentasi, Pendamping: Semua Anggota)

- **Tahap 1 (Notulen & Kebutuhan):** Mencatat hasil diskusi/revisi dari pihak Kelurahan saat paparan serta merapikan daftar kebutuhan konten resmi (alamat kantor, nama pejabat, daftar UMKM awal).
- **Tahap 2 (Dashboard Admin):** Memahami dan merapikan 13 menu Dashboard Admin yang sudah ada, memastikan alur moderasi konten (Draft → Review → Disetujui/Ditolak) berjalan sesuai skenario.
- **Tahap 3 (QA / Testing):** Menguji seluruh tombol, form input, filter kategori, QR Code, dan link Google Maps/WhatsApp, lalu mencatat jika ada bug untuk diperbaiki tim.
- **Tahap 4 (Dokumentasi & Panduan):** Menyusun buku panduan singkat penggunaan website bagi operator Kelurahan (cara input UMKM, berita, dan moderasi konten).

---

## Tanggung Jawab Bersama

- **Paparan & Pengambilan Keputusan:** Seluruh anggota ikut memahami alur website sebelum paparan ke Kelurahan.
- **Pengisian Data Awal:** Tim bersama-sama membantu menginput data UMKM warga Tambangan pertama kali agar saat diluncurkan website sudah berisi data nyata.
- **Review Akhir:** Sebelum serah terima, seluruh anggota melakukan pengecekan silang pada komponen masing-masing.

---

## Catatan Pemilihan Tech Stack & Biaya

1. **Jika Kelurahan SUDAH memiliki hosting/server sendiri (cPanel/PHP):** Gunakan **Opsi 1 (PHP/Laravel + MySQL)**. Biaya: **Gratis (Rp0)** karena menumpang di server milik Kelurahan.
2. **Jika Kelurahan BELUM memiliki server sendiri:** Gunakan **Opsi 2 (Frontend + Supabase + Vercel/Netlify)**. Biaya: **Gratis (Rp0)** menggunakan *free tier* Supabase dan Vercel/Netlify. Biaya hanya diperlukan jika Kelurahan ingin membeli domain resmi baru (misal `.id` / `.go.id`).
