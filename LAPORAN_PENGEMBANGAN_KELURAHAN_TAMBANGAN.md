# LAPORAN PENGEMBANGAN WEBSITE KELURAHAN TAMBANGAN
**Wilayah:** Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang, Jawa Tengah  
**Program:** KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang  
**Konsep Desain:** *Hybrid Government + Community-Centered Design*

---

## 1. Ringkasan Eksekutif & Hasil Audit

Sesuai instruksi master prompt, pengembangan ini memprioritaskan penyempurnaan menyeluruh dari fondasi proyek yang telah ada tanpa merombak arsitektur, mempertahankan teknologi yang sudah berjalan, serta mengonversikan identitas menjadi **Portal Digital Resmi Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang**.

Website dirancang bukan sebagai website temporer mahasiswa, melainkan sebagai infrastruktur informasi digital yang siap pakai, mudah dikelola perangkat kelurahan, dan dapat dikembangkan secara berkelanjutan setelah periode KKN selesai.

---

## 2. Peta Halaman & Fitur yang Tersedia

### A. Halaman Publik (14 Modul Lengkap)
1. **Beranda (Homepage):**
   * Header resmi, logo kelurahan, lencana KKN Tematik Periode 38 Unwahas.
   * Hero section: *"Membangun Lingkungan, Melayani Masyarakat Tambangan."*
   * 3 Quick Access Card (Wilayah Kelurahan, Jam Pelayanan, Dukungan Akademik).
   * Selayang pandang profil & suasana lingkungan Tambangan.
   * Banner statistik estimasi penduduk & RT/RW berlabel demonstrasi.
   * Sorotan layanan administrasi, berita terkini, agenda terdekat, dan etalase UMKM.
2. **Profil Kelurahan:** Gambaran umum, sejarah masyarakat agraris perbukitan Mijen, Visi & Misi pembangunan terukur, serta data wilayah.
3. **Pemerintahan:** Struktur pimpinan (Lurah, Sekkel, Kasi Pemerintahan, Kasi Pemberdayaan), rincian tugas pokok, dan kelembagaan 6 RW (Data contoh berlabel jelas).
4. **Layanan Masyarakat:** Katalog surat administrasi (SK Domisili, SKU, Surat Pengantar Adminduk KTP/KK, SKTM, Surat Pindah, SK Kelahiran/Kematian) dengan pencarian instan, filter kategori, FAQ bebas pungli (Rp0), dan modal pop-up persyaratan.
5. **Berita (Warta Tambangan):** Portal warta kemasyarakatan, kategori berita, tanggal, penulis, dan navigasi detail.
6. **Detail Berita:** Header warta lengkap, isi rilis pers musrenbang, liputan posyandu, dan galeri liputan terkait.
7. **Pengumuman:** Papan edaran resmi (Penting, Agenda, Himbauan PSN lingkungan) dengan tombol unduh file edaran PDF.
8. **Agenda Kegiatan:** Kalender terpadu kegiatan posyandu, sosialisasi bank sampah, pengajian rutin warga, dan senam sehat (bukan hanya kegiatan KKN, melainkan agenda seluruh komunitas).
9. **Direktori UMKM:** Etalase produk lokal warga (Kopi Robusta Lereng Tambangan, Anyaman Bambu Makmur, Keripik Singkong) disertai kontak WhatsApp resmi atas persetujuan pemilik usaha.
10. **Lingkungan:** Edukasi pemilahan sampah organik/anorganik/residu, konsep 3R, dan pembinaan bank sampah.
11. **Kesehatan:** Edukasi pencegahan stunting 1.000 HPK, penyuluhan pencegahan TB, dan jadwal posyandu tanpa menampilkan/menyimpan data medis pasien.
12. **Pendidikan & Keagamaan:** Informasi majelis taklim, pembinaan TPQ, dan tradisi sosial keagamaan warga Tambangan.
13. **Olahraga & Komunitas:** Aktivitas Karang Taruna Tunas Bhakti dan senam lansia/PKK.
14. **Kontak & Lokasi:** Jam pelayanan, komitmen bebas pungli, formulir aspirasi warga (tanpa meminta NIK/KK), dan peta wilayah Kecamatan Mijen Kota Semarang.

---

### B. Dashboard Admin & Tata Kelola (13 Sub-Fitur)
1. **Dashboard Overview:** Metrik statistik berita, pengumuman, agenda, UMKM terdaftar, antrian review, dan log aktivitas staf.
2. **Manajemen Berita:** Tabel data, tombol tambah, edit, status publikasi.
3. **Manajemen Pengumuman:** Penerbitan dan kategorisasi urgensi surat edaran.
4. **Manajemen Agenda:** Penjadwalan kegiatan posyandu dan warga.
5. **Manajemen Galeri:** Kurasi album foto dokumentasi kegiatan.
6. **Direktori UMKM:** Kurasi profil usaha mikro warga Tambangan.
7. **Halaman Profil:** Pembaruan narasi visi misi dan data wilayah.
8. **Informasi Layanan:** Pembaruan syarat berkas permohonan surat.
9. **Pengajuan Konten:** Moderasi berkas yang diunggah kontributor.
10. **Manajemen Pengguna:** Penambahan staf, filter role, dan penguncian akun.
11. **Role & Permission:** Matriks pembagian hak akses 4 role.
12. **Pengaturan Website:** Konfigurasi identitas resmi dan jam operasional.
13. **Aktivitas Pengguna:** Log audit keamanan perubahan data.

---

## 3. Struktur 4 Role Pengguna & Matriks Hak Akses

| Fitur / Modul | Role 1: Super Admin | Role 2: Admin/Operator | Role 3: Kontributor | Role 4: Masyarakat (Publik) |
| :--- | :---: | :---: | :---: | :---: |
| **Akses Website Publik & Download Surat** | ✅ Penuh | ✅ Penuh | ✅ Penuh | ✅ Penuh (Tanpa Login) |
| **Kirim Aspirasi / Saran Warga** | ✅ | ✅ | ✅ | ✅ (Kanal Terbuka) |
| **Akses Dashboard Staf Kelurahan** | ✅ Seluruh Menu | ✅ Menu Konten | ✅ Portal Pengajuan | ❌ Ditolak |
| **Pengajuan Berita, Agenda, UMKM, Foto** | ✅ Langsung Tayang | ✅ Langsung Tayang | ✅ Masuk Moderasi | ❌ Ditolak |
| **Review, Edit & Setujui Pengajuan** | ✅ | ✅ (Tugas Pokok) | ❌ Hanya Pantau Status | ❌ Ditolak |
| **Manajemen Akun Pengguna Staf** | ✅ | ❌ Terkunci | ❌ Terkunci | ❌ Ditolak |
| **Konfigurasi Role & Pengaturan Sistem** | ✅ Hak Mutlak | ❌ Terkunci | ❌ Terkunci | ❌ Ditolak |

### Siklus Alur Kerja Konten:
$$\text{Draft} \xrightarrow{\text{Diajukan}} \text{Menunggu Review} \xrightarrow{\text{Disetujui}} \text{Dipublikasikan (Live)}$$
*(Jika ditolak, sistem memberikan catatan alasan perbaikan untuk direvisi oleh kontributor).*

---

## 4. Manajemen Gambar & Aset Visual Lokal

Seluruh gambar disimpan secara **lokal** di dalam direktori proyek `assets/img/` sehingga website **bebas dari kotak kosong, placeholder rusak, atau ketergantungan link eksternal**:

* `assets/img/hero_bg.jpg`: Lanskap lingkungan asri perbukitan untuk Hero utama.
* `assets/img/office.jpg`: Representasi suasana kantor & pemukiman warga Tambangan.
* `assets/img/musrenbang.jpg`: Foto realistis rembug warga & musyawarah perencanaan pembangunan.
* `assets/img/posyandu.jpg` & `stunting_posyandu.jpg`: Pelayanan posyandu balita & pencegahan stunting.
* `assets/img/tb_health.jpg`: Edukasi kesehatan masyarakat & puskesmas.
* `assets/img/umkm_kopi.jpg`, `umkm_anyaman.jpg`, `umkm_snack.jpg`: Produk UMKM kopi robusta, anyaman bambu, dan makanan ringan.
* `assets/img/lingkungan_sampah.jpg`: Edukasi bank sampah & kebersihan lingkungan.
* `assets/img/pendidikan_mengaji.jpg`: Pendidikan agama TPQ & pengajian warga.
* `assets/img/futsal_pemuda.jpg` & `olahraga_senam.jpg`: Kegiatan Karang Taruna & senam sehat.
* `assets/img/profil_lurah.jpg`, `profil_sekkel.jpg`, `profil_kasi1.jpg`, `profil_kasi2.jpg`: Foto aparatur untuk demonstrasi struktur organisasi.

---

## 5. Privasi Data & Keamanan Informasi Publik
* **Data Minimization:** Website **tidak pernah meminta atau menyimpan** data sensitif seperti NIK, Nomor KK, foto KTP, foto KK, data pasien, maupun data medis pribadi.
* **Aspirasi Warga:** Formulir kontak hanya memerlukan nama dan narasi saran perbaikan.
* **Pemberitahuan UMKM:** Kontak WhatsApp pelaku usaha hanya dicantumkan atas izin pemilik.

---

## 6. Status Data & Langkah Lanjutan

1. **Bagian yang Masih Menggunakan Data Demonstrasi:**
   * Nama dan foto aparatur sipil (Lurah, Sekkel, Kasi).
   * Rincian batas wilayah patok geografis dan angka statistik kependudukan definitif.
2. **Kebutuhan Konfirmasi Pihak Kelurahan Tambangan:**
   * Alamat jalan kantor kelurahan definitif dan nomor kontak resmi kantor.
   * Sinkronisasi data SK Pejabat resmi dan jumlah pasti RT/RW di Tambangan.
3. **Catatan Kesiapan Backend:**
   * Saat ini antarmuka, navigasi, pencarian, dan simulator alur kerja moderasi telah berjalan 100% interaktif pada sisi frontend (*Interactive Prototype & Production-Ready UI*).
   * Untuk implementasi sistem sungguhan di masa depan, arsitektur data store `appData` di `assets/js/app.js` telah dirancang terstruktur sehingga siap dihubungkan ke REST API / database (misal: MySQL, PostgreSQL, atau backend PHP/Node.js).
