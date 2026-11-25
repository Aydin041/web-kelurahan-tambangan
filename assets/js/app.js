// Data Store & Controller for Website Kelurahan Tambangan
// Terintegrasi dengan Program KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang

// Helper untuk inisialisasi data UMKM dari LocalStorage jika ada
const initialUmkmData = [
  {
    id: 1,
    name: 'Kopi Robusta Lereng Tambangan',
    category: 'Kuliner & Minuman',
    owner: 'Pak Sukirno',
    phone: '081234567890',
    contact: '0812-3456-7890 (Telah Disetujui Pemilik)',
    image: 'assets/img/umkm_kopi.jpg',
    desc: 'Biji kopi robusta pilihan dari perkebunan rakyat Tambangan Mijen, diolah dengan sangrai tradisional menghasilkan aroma harum yang khas dan cita rasa pekat alami.',
    address: 'Jl. Tambangan Raya RT 01 / RW 01, Kelurahan Tambangan, Kec. Mijen, Kota Semarang',
    mapsUrl: 'https://maps.google.com/?q=Tambangan+Mijen+Semarang',
    operationalHours: 'Setiap Hari: 08.00 - 21.00 WIB',
    products: [
      { name: 'Kopi Robusta Bubuk Khas Tambangan (200gr)', price: 'Rp 28.000', desc: 'Biji kopi petik merah sangrai medium dark' },
      { name: 'Kopi Robusta Roasted Bean / Biji Sangrai (250gr)', price: 'Rp 35.000', desc: 'Aroma rempah alami, cocok untuk cafe dan manual brew' },
      { name: 'Es Kopi Susu Gula Aren Tambangan (Cup)', price: 'Rp 15.000', desc: 'Racikan espresso robusta lokal dengan gula aren segar' },
      { name: 'Cold Brew Botol 250ml', price: 'Rp 18.000', desc: 'Ekstraksi dingin 12 jam, rasa lembut dan rendah asam' }
    ]
  },
  {
    id: 2,
    name: 'Kerajinan Anyaman Bambu Makmur',
    category: 'Kriya & Kerajinan',
    owner: 'Kelompok Kriya Ibu-ibu RW 03',
    phone: '081398765432',
    contact: '0813-9876-5432 (Telah Disetujui Pemilik)',
    image: 'assets/img/umkm_anyaman.jpg',
    desc: 'Produk besek ramah lingkungan, wadah hampers, tas belanja, dan kap lampu artistik berbahan bambu lokal pilihan bernilai estetika tinggi karya kelompok warga.',
    address: 'Wilayah RW 03, Kelurahan Tambangan, Kec. Mijen, Kota Semarang',
    mapsUrl: 'https://maps.google.com/?q=Tambangan+Mijen+Semarang',
    operationalHours: 'Senin - Sabtu: 09.00 - 17.00 WIB',
    products: [
      { name: 'Paket Besek Hampers Tradisional (Isi 10 Pcs)', price: 'Rp 45.000', desc: 'Anyaman rapi, higienis, dan ramah lingkungan' },
      { name: 'Kap Lampu Gantung Bambu Estetik', price: 'Rp 75.000', desc: 'Cocok untuk dekorasi ruang tamu, cafe, dan gazebo' },
      { name: 'Tas Belanja Anyaman Bambu Eco-Friendly', price: 'Rp 35.000', desc: 'Kuat, awet, dan mengurangi penggunaan kantong plastik' }
    ]
  },
  {
    id: 3,
    name: 'Camilan Keripik Singkong & Pisang Renyah',
    category: 'Makanan Ringan',
    owner: 'Ibu Warsini',
    phone: '081922334455',
    contact: '0819-2233-4455 (Telah Disetujui Pemilik)',
    image: 'assets/img/umkm_snack.jpg',
    desc: 'Keripik gurih renyah tanpa bahan pengawet kimia, diolah dari hasil panen kebun Tambangan dengan berbagai varian rasa rempah rempah alami.',
    address: 'Wilayah RW 02, Kelurahan Tambangan, Kec. Mijen, Kota Semarang',
    mapsUrl: 'https://maps.google.com/?q=Tambangan+Mijen+Semarang',
    operationalHours: 'Setiap Hari: 07.30 - 18.00 WIB',
    products: [
      { name: 'Keripik Singkong Gurih Balado (250gr)', price: 'Rp 14.000', desc: 'Renyah resep bumbu balado rempah pedas manis' },
      { name: 'Keripik Singkong Rasa Bawang Original (250gr)', price: 'Rp 12.000', desc: 'Gurih asin klasik bawang putih alami' },
      { name: 'Keripik Pisang Tanduk Karamel (200gr)', price: 'Rp 16.000', desc: 'Irisan renyah pisang lokal dengan manis legit' }
    ]
  }
];

// Load dari localStorage jika sudah ada input sebelumnya, jika belum pakai default
function loadUmkmFromStorage() {
  const saved = localStorage.getItem('tambangan_umkm_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch(e) {
      return initialUmkmData;
    }
  }
  return initialUmkmData;
}

function saveUmkmToStorage(data) {
  localStorage.setItem('tambangan_umkm_data', JSON.stringify(data));
}

const appData = {
  activeView: 'home',
  activeRole: 'super_admin',
  activeViewport: 'desktop',
  selectedUmkmId: null,
  
  // Identitas Resmi Wilayah
  identity: {
    kelurahan: 'Tambangan',
    kecamatan: 'Mijen',
    kota: 'Semarang',
    provinsi: 'Jawa Tengah',
    kkn: 'KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang',
    alamat: 'Kelurahan Tambangan, Kec. Mijen, Kota Semarang, Jawa Tengah (Konfirmasi Alamat Kantor Definitif)',
    kodePos: '50215 (Estimasi Wilayah Mijen)',
    kontak: 'Hubungi Kantor Kelurahan Tambangan',
    jamLayanan: 'Senin - Kamis: 08.00 - 15.30 WIB | Jumat: 08.00 - 14.30 WIB'
  },

  // Layanan Administrasi Publik
  services: [
    { id: 1, title: 'Surat Keterangan Domisili', code: 'SKD-01', est: '15 Menit', cost: 'Gratis (Rp0)', category: 'Kependudukan', desc: 'Surat resmi keterangan domisili bagi warga yang bertempat tinggal di wilayah Kelurahan Tambangan.', requirements: ['KTP asli & fotokopi', 'Kartu Keluarga (KK) pemohon', 'Surat Pengantar dari Ketua RT dan RW setempat di Tambangan', 'Pas foto 3x4 (2 lembar)'] },
    { id: 2, title: 'Surat Keterangan Usaha (SKU)', code: 'SKU-02', est: '20 Menit', cost: 'Gratis (Rp0)', category: 'Perekonomian & UMKM', desc: 'Surat keterangan kepemilikan dan legalitas tempat usaha untuk pengajuan KUR, izin edar PIRT, maupun keperluan perbankan.', requirements: ['KTP & Kartu Keluarga pemohon', 'Surat Pengantar RT/RW Tambangan dengan keterangan jenis usaha', 'Foto tempat atau kegiatan usaha', 'Surat pernyataan keabsahan usaha'] },
    { id: 3, title: 'Surat Pengantar Administrasi Kependudukan', code: 'SPA-03', est: '15 Menit', cost: 'Gratis (Rp0)', category: 'Kependudukan', desc: 'Pengantar permohonan penerbitan KTP-el baru, perbaikan KK, atau surat kehilangan untuk Disdukcapil Kota Semarang.', requirements: ['Fotokopi KK lama', 'Surat kehilangan dari Kepolisian (jika hilang)', 'Surat Pengantar RT/RW setempat'] },
    { id: 4, title: 'Surat Keterangan Tidak Mampu (SKTM)', code: 'SKTM-04', est: '20 Menit', cost: 'Gratis (Rp0)', category: 'Sosial & Bantuan', desc: 'Keterangan kondisi sosial ekonomi warga guna keperluan beasiswa pendidikan, keringanan biaya kesehatan, dan rujukan sosial.', requirements: ['KTP & KK asli serta fotokopi', 'Surat Pengantar RT/RW Tambangan yang menerangkan kondisi sosial pemohon', 'Foto tampak depan tempat tinggal', 'Surat pernyataan bermaterai'] },
    { id: 5, title: 'Surat Pengantar Pindah Domisili', code: 'SPP-05', est: '25 Menit', cost: 'Gratis (Rp0)', category: 'Kependudukan', desc: 'Dokumen pengantar pindah datang atau pindah keluar antar-kelurahan di Kota Semarang maupun antar-provinsi.', requirements: ['KTP-el seluruh anggota keluarga yang pindah', 'KK asli', 'Surat Pengantar RT/RW Tambangan', 'Alamat tujuan kepindahan yang jelas'] },
    { id: 6, title: 'Surat Pengantar Pelaporan Kelahiran / Kematian', code: 'SPK-06', est: '20 Menit', cost: 'Gratis (Rp0)', category: 'Kependudukan', desc: 'Pengantar pencatatan peristiwa vital kelahiran baru atau pelaporan kematian ke Dinas Kependudukan dan Catatan Sipil.', requirements: ['Surat keterangan lahir/kematian dari dokter/RS/Bidan', 'KK & KTP asli orang tua / almarhum', 'KTP saksi 2 orang', 'Surat Pengantar RT/RW'] }
  ],

  // Berita & Publikasi Kegiatan
  news: [
    { id: 1, title: 'Rembug Warga Musrenbang Kelurahan Tambangan 2027: Prioritaskan Penguatan Drainase dan Ketahanan Pangan', category: 'Pemerintahan', date: '18 Nov 2026', author: 'Sekretariat Kelurahan', image: 'assets/img/musrenbang.jpg', excerpt: 'Pemerintah Kelurahan Tambangan bersama seluruh Ketua RW dan LPMK menyepakati 5 fokus pembangunan terpadu di Kecamatan Mijen.', content: 'Musyawarah Perencanaan Pembangunan (Musrenbang) tingkat Kelurahan Tambangan Kecamatan Mijen berlangsung khidmat. Bersama delegasi Bappeda Kota Semarang, tokoh masyarakat merumuskan program penataan drainase pencegahan genangan dan fasilitasi legalitas bagi pelaku UMKM lokal.' },
    { id: 2, title: 'Pemeriksaan Kesehatan Berkala & Penyuluhan Nutrisi Posyandu Balita Bersama Puskesmas Mijen', category: 'Kesehatan', date: '15 Nov 2026', author: 'Pokja IV PKK Tambangan', image: 'assets/img/posyandu.jpg', excerpt: 'Puluhan balita dan ibu hamil antusias mengikuti penimbangan berat badan, pengukuran tinggi badan, serta pemberian PMT bergizi.', content: 'Kader Posyandu di Kelurahan Tambangan secara konsisten menyelenggarakan pos pelayanan terpadu. Fokus utama kegiatan bulan ini adalah pemantauan kurva tumbuh kembang anak guna mencegah potensi stunting sedini mungkin.' },
    { id: 3, title: 'Workshop Pemasaran Digital & Sertifikasi PIRT bagi Pelaku Usaha Mikro Tambangan', category: 'Pemberdayaan UMKM', date: '12 Nov 2026', author: 'Tim KKN Unwahas & Karang Taruna', image: 'assets/img/umkm_pelatihan.jpg', excerpt: 'Pelatihan pembuatan kemasan menarik dan pemanfaatan media digital untuk memperluas jangkauan pemasaran produk khas Tambangan.', content: 'Kolaborasi mahasiswa KKN Tematik Periode 38 Universitas Wahid Hasyim bersama Karang Taruna memfasilitasi workshop digitalisasi UMKM. Peserta didampingi langsung mulai dari foto produk hingga pendaftaran sertifikasi halal.' }
  ],

  // Pengumuman Resmi
  announcements: [
    { id: 1, title: 'Jadwal Kerja Bakti Serentak & Pemberantasan Sarang Nyamuk (PSN) Tingkat RW se-Kelurahan Tambangan', category: 'Lingkungan', date: '19 Nov 2026', status: 'Himbauan', details: 'Menyambut musim penghujan, seluruh warga diimbau bergotong royong membersihkan saluran air, menutup tampungan air, dan mengubur barang bekas pada hari Minggu pagi serentak di lingkungan masing-masing.' },
    { id: 2, title: 'Layanan Rekam KTP Elektronik Jemput Bola bagi Pelajar Usia 17 Tahun di Aula Kelurahan', category: 'Pelayanan Kependudukan', date: '16 Nov 2026', status: 'Agenda', details: 'Dinas Kependudukan dan Catatan Sipil Kota Semarang bersama Kelurahan Tambangan menyelenggarakan rekam biometrik e-KTP keliling pada hari Rabu pekan depan di aula kelurahan.' },
    { id: 3, title: 'Pemberitahuan Pemeliharaan Jaringan Distribusi Listrik Sementara Area Mijen', category: 'Pemberitahuan Umum', date: '11 Nov 2026', status: 'Penting', details: 'Berdasarkan surat edaran PLN UP3 Semarang, akan dilaksanakan pemeliharaan jaringan pada hari Sabtu pukul 09.00 - 13.00 WIB guna menjaga keandalan pasokan energi listrik.' }
  ],

  // Agenda Kegiatan Masyarakat
  agendas: [
    { id: 1, title: 'Posyandu Balita & Skrining Tumbuh Kembang', date: '25 Nov 2026', time: '08.30 - 11.30 WIB', location: 'Balai RW 02 Kelurahan Tambangan', category: 'Kesehatan', organizer: 'Kader PKK & Bidan Desa', image: 'assets/img/stunting_posyandu.jpg', status: 'Akan Datang' },
    { id: 2, title: 'Sosialisasi Pemilahan Sampah & Penguatan Bank Sampah Mandiri', date: '28 Nov 2026', time: '09.00 - 12.00 WIB', location: 'Pendopo Kelurahan Tambangan', category: 'Lingkungan', organizer: 'DLH Kota Semarang & KKN Unwahas', image: 'assets/img/lingkungan_sampah.jpg', status: 'Akan Datang' },
    { id: 3, title: 'Pengajian Rutin Muslimat & Santunan Sosial Kemasyarakatan', date: '01 Des 2026', time: '13.30 - 15.30 WIB', location: 'Masjid Jami Kelurahan Tambangan', category: 'Keagamaan', organizer: 'Majelis Taklim Tambangan', image: 'assets/img/pendidikan_mengaji.jpg', status: 'Akan Datang' },
    { id: 4, title: 'Senam Kesegaran Jasmani & Turnamen Bulu Tangkis Antar-RT', date: '06 Des 2026', time: '07.00 - 11.00 WIB', location: 'Lapangan Warga RW 03', category: 'Olahraga', organizer: 'Karang Taruna Tunas Bhakti', image: 'assets/img/olahraga_senam.jpg', status: 'Akan Datang' }
  ],

  // Direktori UMKM Tambangan (Dynamic from Storage)
  umkm: loadUmkmFromStorage(),

  // Galeri Dokumentasi
  gallery: [
    { id: 1, title: 'Kerja Bakti Kebersihan Lingkungan & Saluran Air', tag: 'Kegiatan Lingkungan', image: 'assets/img/gotong_royong.jpg' },
    { id: 2, title: 'Rembug Warga & Dialog Pembangunan Musrenbang', tag: 'Pemerintahan', image: 'assets/img/musrenbang.jpg' },
    { id: 3, title: 'Pelayanan Posyandu & Edukasi Kesehatan Balita', tag: 'Kesehatan', image: 'assets/img/posyandu.jpg' },
    { id: 4, title: 'Pendampingan Legalitas Usaha Mikro bagi Warga', tag: 'Pemberdayaan UMKM', image: 'assets/img/umkm_pelatihan.jpg' },
    { id: 5, title: 'Latihan Olahraga Futsal Pemuda Karang Taruna', tag: 'Olahraga & Komunitas', image: 'assets/img/futsal_pemuda.jpg' },
    { id: 6, title: 'Santunan Yatim & Peringatan Hari Besar Islam', tag: 'Pendidikan & Keagamaan', image: 'assets/img/sosial_kegiatan.jpg' }
  ],

  // Aparatur Pemerintahan
  officials: [
    { name: '[Nama Pejabat Lurah Tambangan]', role: 'Lurah Kelurahan Tambangan', nip: 'NIP. 19780512 200312 1 002 (Data Contoh)', phone: 'Kantor Kelurahan Tambangan Ext. 101', photo: 'assets/img/profil_lurah.jpg', duties: 'Memimpin penyelenggaraan pemerintahan, pelayanan administrasi masyarakat, pembinaan ketenteraman ketertiban, dan koordinasi pembangunan sarana prasarana di wilayah Kelurahan Tambangan.' },
    { name: '[Nama Pejabat Sekretaris Kelurahan]', role: 'Sekretaris Kelurahan', nip: 'NIP. 19820315 200701 2 005 (Data Contoh)', phone: 'Kantor Kelurahan Tambangan Ext. 102', photo: 'assets/img/profil_sekkel.jpg', duties: 'Mengoordinasikan perumusan rencana operasional, pengelolaan tata usaha kepegawaian, penatausahaan aset kelurahan, dan fasilitasi administrasi keuangan.' },
    { name: '[Nama Pejabat Kasi Pemerintahan]', role: 'Kasi Pemerintahan, Ketenteraman & Ketertiban', nip: 'NIP. 19850620 200902 1 003 (Data Contoh)', phone: 'Kantor Kelurahan Tambangan Ext. 103', photo: 'assets/img/profil_kasi1.jpg', duties: 'Melaksanakan pelayanan administrasi kependudukan, pembinaan ketenteraman umum, koordinasi anggota Linmas, dan hubungan kelembagaan RT/RW.' },
    { name: '[Nama Pejabat Kasi Pemberdayaan]', role: 'Kasi Pemberdayaan Masyarakat & Pembangunan', nip: 'NIP. 19890910 201101 2 007 (Data Contoh)', phone: 'Kantor Kelurahan Tambangan Ext. 104', photo: 'assets/img/profil_kasi2.jpg', duties: 'Pengelolaan program pemberdayaan masyarakat, fasilitasi kegiatan kemasyarakatan Posyandu, PKK, Karang Taruna, dan pemberdayaan pelaku UMKM.' }
  ],

  // Akun Manajemen Pengguna
  users: [
    { id: 1, name: 'Bambang Sudarmono, S.STP [Contoh Akun]', username: 'superadmin@tambangan.semarangkota.go.id', role: 'Super Admin', status: 'Aktif', joined: '12 Jan 2024' },
    { id: 2, name: 'Siti Rahmawati, S.AP [Contoh Operator]', username: 'operator@tambangan.semarangkota.go.id', role: 'Admin / Operator', status: 'Aktif', joined: '03 Feb 2024' },
    { id: 3, name: 'Fajar Nugraha (Karang Taruna Tambangan)', username: 'kontributor.karangtaruna@tambangan.id', role: 'Kontributor', status: 'Aktif', joined: '15 Mar 2025' },
    { id: 4, name: 'Drs. Hendro Wibowo (Perwakilan RW Tambangan)', username: 'kontributor.rw@tambangan.id', role: 'Kontributor', status: 'Aktif', joined: '20 Apr 2025' },
    { id: 5, name: 'Koordinator Mahasiswa (KKN Unwahas Periode 38)', username: 'kkn38.unwahas@tambangan.id', role: 'Kontributor', status: 'Aktif', joined: '10 Nov 2026' }
  ],

  // Alur Kerja Usulan Konten dari Kontributor
  contentWorkflow: [
    { id: 'WF-101', title: 'Dokumentasi Kerja Bakti Saluran Lingkungan RW 02', submitter: 'Fajar Nugraha (Karang Taruna)', type: 'Galeri & Berita', date: '19 Nov 2026', status: 'Menunggu Pemeriksaan', note: 'Liputan kerja bakti antisipasi genangan musim penghujan di Tambangan' },
    { id: 'WF-102', title: 'Data Profil Produk UMKM Kripik Singkong Renyah', submitter: 'Koordinator Mahasiswa (KKN Unwahas)', type: 'Direktori UMKM', date: '18 Nov 2026', status: 'Disetujui', note: 'Kelengkapan foto produk dan narasi usaha sudah diverifikasi' },
    { id: 'WF-103', title: 'Jadwal Ronda Malam Terpadu Pemuda Tambangan', submitter: 'Fajar Nugraha (Karang Taruna)', type: 'Agenda Kegiatan', date: '17 Nov 2026', status: 'Draft', note: 'Masih melengkapi jadwal piket pos ronda antar-RT' },
    { id: 'WF-104', title: 'Pemberitahuan Promosi Penjualan Pribadi Non-UMKM', submitter: 'Pengusul Non-resmi', type: 'Berita', date: '15 Nov 2026', status: 'Ditolak', note: 'Tidak memenuhi kriteria publikasi potensi komunitas warga' }
  ]
};

// Global Navigation Function
function navigateTo(viewId, param = null) {
  appData.activeView = viewId;
  if (viewId === 'detail_umkm' && param) {
    appData.selectedUmkmId = param;
  }
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Switch Viewport function
function setViewport(size) {
  appData.activeViewport = size;
  const wrapper = document.getElementById('viewport-wrapper');
  document.querySelectorAll('.viewport-btn').forEach(btn => btn.classList.remove('active'));
  
  if (size === 'desktop') {
    wrapper.className = 'viewport-desktop';
    document.getElementById('vp-desktop-btn').classList.add('active');
  } else if (size === 'tablet') {
    wrapper.className = 'viewport-tablet';
    document.getElementById('vp-tablet-btn').classList.add('active');
  } else if (size === 'mobile') {
    wrapper.className = 'viewport-mobile';
    document.getElementById('vp-mobile-btn').classList.add('active');
  }
}

// Modal System
function showServiceDetail(serviceId) {
  const s = appData.services.find(item => item.id === serviceId);
  if (!s) return;
  const modalHtml = `
    <div class="modal-backdrop show" id="global-modal" onclick="if(event.target===this) closeModal()">
      <div class="modal-box">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span class="badge badge-gold" style="margin-bottom:6px;">${s.code} • ${s.category}</span>
            <h3 style="font-size:1.18rem; margin:0; font-weight:700;">${s.title}</h3>
          </div>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <div style="padding:24px; max-height:75vh; overflow-y:auto;">
          <p style="color:var(--color-neutral-gray); margin-bottom:20px; font-size:0.92rem; line-height:1.6;">${s.desc}</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
            <div style="background:var(--color-soft-blue); padding:12px; border-radius:8px;">
              <small style="color:var(--color-blue-support); font-weight:700; text-transform:uppercase;">Estimasi Pelayanan</small>
              <div style="font-weight:700; font-size:1.1rem; color:var(--color-navy);">${s.est}</div>
            </div>
            <div style="background:#DCFCE7; padding:12px; border-radius:8px;">
              <small style="color:#15803D; font-weight:700; text-transform:uppercase;">Biaya Retribusi</small>
              <div style="font-weight:700; font-size:1.1rem; color:#15803D;">${s.cost}</div>
            </div>
          </div>

          <h4 style="font-size:0.98rem; color:var(--color-navy); margin-bottom:10px; font-weight:700;">Dokumen Persyaratan:</h4>
          <ul style="padding-left:20px; color:#334155; margin-bottom:22px; font-size:0.9rem; line-height:1.75;">
            ${s.requirements.map(r => `<li>${r}</li>`).join('')}
          </ul>

          <h4 style="font-size:0.98rem; color:var(--color-navy); margin-bottom:10px; font-weight:700;">Alur Prosedur Pelayanan:</h4>
          <ol style="padding-left:20px; color:#334155; font-size:0.9rem; line-height:1.75; margin-bottom:24px;">
            <li>Pemohon meminta surat pengantar dari Ketua RT dan Ketua RW domisili setempat di Kelurahan Tambangan.</li>
            <li>Mendatangi loket pelayanan administrasi Kantor Kelurahan Tambangan pada jam kerja resmi.</li>
            <li>Petugas memverifikasi kelengkapan berkas persyaratan fisik.</li>
            <li>Penerbitan surat, penandatanganan oleh pejabat berwenang, dan pembubuhan cap dinas kelurahan.</li>
          </ol>

          <div style="background:#FEF3C7; border:1px solid #F59E0B; padding:12px; border-radius:8px; font-size:0.8rem; color:#92400E; margin-bottom:20px;">
            <i class="fas fa-shield-alt"></i> <strong>Bebas Pungli:</strong> Seluruh pelayanan surat keterangan dan pengantar di Kelurahan Tambangan bebas biaya retribusi (Gratis Rp0).
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px;">
            <button onclick="closeModal()" class="btn btn-secondary">Tutup Informasi</button>
            <button onclick="alert('Silakan siapkan berkas persyaratan di atas sebelum mendatangi loket pelayanan Kelurahan Tambangan.'); closeModal();" class="btn btn-primary">Saya Mengerti Persyaratannya</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = modalHtml;
}

function showNewsDetail(newsId) {
  const n = appData.news.find(item => item.id === newsId);
  if (!n) return;
  appData.selectedNews = n;
  navigateTo('detail_berita');
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

// Modal Form Tambah UMKM Baru (Bisa diakses dari Web Publik & Admin)
function showAddUmkmModal() {
  const html = `
    <div class="modal-backdrop show" id="umkm-modal" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width: 680px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-store-alt" style="color:var(--color-gold);"></i> Input Data UMKM Baru (Admin Kelurahan)</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitNewUmkm();" style="padding:24px; max-height:80vh; overflow-y:auto;">
          
          <div style="background:var(--color-gold-light); border:1px solid var(--color-gold); padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:0.82rem; color:#92400E;">
            <i class="fas fa-info-circle"></i> <strong>Pemberitahuan:</strong> Data yang Anda input akan langsung tersimpan, menghasilkan halaman profil usaha, dan barcode menu otomatis.
          </div>

          <div class="form-group">
            <label class="form-label">Nama Usaha / Brand UMKM *</label>
            <input type="text" id="new-umkm-name" required placeholder="Contoh: Warung Soto Ayam Bu Parti" class="form-control">
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Kategori Usaha *</label>
              <select id="new-umkm-category" class="form-control">
                <option value="Kuliner & Minuman">Kuliner & Minuman</option>
                <option value="Makanan Ringan">Makanan Ringan</option>
                <option value="Kriya & Kerajinan">Kriya & Kerajinan</option>
                <option value="Jasa & Perdagangan">Jasa & Perdagangan</option>
                <option value="Pertanian & Olahan">Pertanian & Olahan</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Nama Pemilik Usaha *</label>
              <input type="text" id="new-umkm-owner" required placeholder="Contoh: Ibu Parti" class="form-control">
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Nomor WhatsApp Pemesanan *</label>
              <input type="text" id="new-umkm-phone" required placeholder="Contoh: 081234567890" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label">Jam Operasional</label>
              <input type="text" id="new-umkm-hours" placeholder="Contoh: Setiap Hari 07.00 - 16.00 WIB" class="form-control">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Alamat Lengkap Usaha *</label>
            <input type="text" id="new-umkm-address" required placeholder="Contoh: Jl. Tambangan No. 14, RT 02 / RW 03, Kel. Tambangan, Mijen" class="form-control">
          </div>

          <div class="form-group">
            <label class="form-label">Tautan / Link Google Maps (Bisa langsung dibuka di Maps) *</label>
            <input type="url" id="new-umkm-maps" required placeholder="Contoh: https://maps.google.com/?q=Tambangan+Mijen+Semarang" class="form-control">
            <small style="color:#64748B;">Bisa salin tautan "Bagikan / Share" dari aplikasi Google Maps.</small>
          </div>

          <div class="form-group">
            <label class="form-label">Deskripsi Singkat Usaha *</label>
            <textarea id="new-umkm-desc" rows="2" required placeholder="Jelaskan keistimewaan rasa, bahan baku, atau keunggulan produk..." class="form-control"></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">Daftar Menu & Produk yang Dijual (Satu per baris dengan format: Nama Produk - Harga) *</label>
            <textarea id="new-umkm-products" rows="4" required placeholder="Soto Ayam Porsi Lengkap - Rp 12.000&#10;Nasi Soto Pisah - Rp 14.000&#10;Es Teh Manis Segar - Rp 4.000&#10;Tempe Mendoan Hangat - Rp 2.000" class="form-control"></textarea>
            <small style="color:#64748B;">Sistem akan otomatis merapikan daftar ini ke dalam tabel menu dan barcode digital.</small>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Terbitkan Data UMKM</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitNewUmkm() {
  const name = document.getElementById('new-umkm-name').value;
  const category = document.getElementById('new-umkm-category').value;
  const owner = document.getElementById('new-umkm-owner').value;
  const phone = document.getElementById('new-umkm-phone').value;
  const hours = document.getElementById('new-umkm-hours').value || 'Setiap Hari 08.00 - 17.00 WIB';
  const address = document.getElementById('new-umkm-address').value;
  const mapsUrl = document.getElementById('new-umkm-maps').value;
  const desc = document.getElementById('new-umkm-desc').value;
  const rawProducts = document.getElementById('new-umkm-products').value;

  // Parse produk baris demi baris
  const productsList = rawProducts.split('\n').filter(line => line.trim()).map(line => {
    const parts = line.split('-');
    return {
      name: parts[0]?.trim() || line.trim(),
      price: parts[1]?.trim() || 'Hubungi Penjual',
      desc: 'Produk olahan lokal Kelurahan Tambangan'
    };
  });

  const newId = appData.umkm.length > 0 ? Math.max(...appData.umkm.map(u => u.id)) + 1 : 1;

  const newUmkmObj = {
    id: newId,
    name: name,
    category: category,
    owner: owner,
    phone: phone,
    contact: `${phone} (Telah Disetujui Pemilik)`,
    image: 'assets/img/umkm_pelatihan.jpg', // Default realistic local photo
    desc: desc,
    address: address,
    mapsUrl: mapsUrl,
    operationalHours: hours,
    products: productsList
  };

  appData.umkm.unshift(newUmkmObj);
  saveUmkmToStorage(appData.umkm);

  closeModal();
  alert(`Sukses! Data UMKM "${name}" berhasil ditambahkan dan barcode menu langsung aktif.`);
  navigateTo('detail_umkm', newId);
}

// Rendering Framework
function renderCurrentView() {
  const container = document.getElementById('main-app-content');
  const view = appData.activeView;

  updateNavigationState();

  if (view.startsWith('admin_')) {
    container.innerHTML = renderAdminLayout(view);
  } else {
    container.innerHTML = renderPublicLayout(view);
  }
}

function updateNavigationState() {
  document.querySelectorAll('.proto-btn-view').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === appData.activeView);
  });
}

// Filter Galeri by tag
function filterGaleri(tag) {
  const cards = document.querySelectorAll('#galeri-grid .gallery-card');
  cards.forEach(card => {
    if (!tag || card.getAttribute('data-tag') === tag) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  // Update active button styles
  const allBtn = document.getElementById('galeri-filter-all');
  const tagBtns = document.querySelectorAll('[data-galeri-tag]');
  if (!tag) {
    if (allBtn) { allBtn.className = 'btn btn-primary'; allBtn.style.cssText += 'padding:6px 14px; font-size:0.82rem;'; }
    tagBtns.forEach(b => { b.className = 'btn btn-secondary'; b.style.cssText += 'padding:6px 14px; font-size:0.82rem;'; });
  } else {
    if (allBtn) { allBtn.className = 'btn btn-secondary'; allBtn.style.cssText += 'padding:6px 14px; font-size:0.82rem;'; }
    tagBtns.forEach(b => {
      if (b.getAttribute('data-galeri-tag') === tag) {
        b.className = 'btn btn-primary'; b.style.cssText += 'padding:6px 14px; font-size:0.82rem;';
      } else {
        b.className = 'btn btn-secondary'; b.style.cssText += 'padding:6px 14px; font-size:0.82rem;';
      }
    });
  }
}
