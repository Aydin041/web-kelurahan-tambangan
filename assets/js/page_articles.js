// Pages: Profil, Pemerintahan, Layanan, Berita, Detail Berita (Kelurahan Tambangan, Kec. Mijen)

function renderProfilView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Profil Wilayah</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Profil Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Mengenal selayang pandang sejarah, visi misi pembangunan, letak geografis, dan potensi lingkungan Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:2fr 1fr; gap:40px;">
        <div>
          <!-- Sejarah & Gambaran Umum -->
          <div class="admin-card" style="padding:30px; margin-bottom:30px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:2px solid var(--color-soft-blue); padding-bottom:10px;">
              <h2 style="font-size:1.35rem; color:var(--color-navy); margin:0;">
                <i class="fas fa-history" style="color:var(--color-gold); margin-right:8px;"></i> Selayang Pandang & Sejarah Kelurahan
              </h2>
              <span class="badge badge-demo">Data Awal Demonstrasi</span>
            </div>
            <p style="color:var(--color-neutral-gray); line-height:1.75; margin-bottom:16px;">
              Kelurahan Tambangan merupakan salah satu kelurahan di wilayah Kecamatan Mijen, Kota Semarang, Jawa Tengah. Wilayah ini secara historis tumbuh dari komunitas masyarakat agraris dan perkebunan yang memiliki keterikatan erat dengan alam perbukitan di kawasan barat daya Kota Semarang.
            </p>
            <p style="color:var(--color-neutral-gray); line-height:1.75; margin-bottom:16px;">
              Dengan kontur tanah yang subur dan udara yang relatif sejuk, warga Tambangan memadukan kearifan lokal pertanian dengan geliat usaha mikro seperti kopi, makanan olahan, dan kerajinan tangan. Dalam beberapa tahun terakhir, Tambangan terus berkembang menjadi kawasan pemukiman yang asri dengan tetap melestarikan tradisi keagamaan, sedekah bumi, dan gotong royong warga.
            </p>
            <img src="assets/img/office.jpg" alt="Wilayah Kelurahan Tambangan" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); margin-top:10px;">
          </div>

          <!-- Visi & Misi Pembangunan -->
          <div class="admin-card" style="padding:30px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:2px solid var(--color-soft-blue); padding-bottom:10px;">
              <h2 style="font-size:1.35rem; color:var(--color-navy); margin:0;">
                <i class="fas fa-bullseye" style="color:var(--color-gold); margin-right:8px;"></i> Visi & Misi Kelurahan
              </h2>
              <span class="badge badge-demo">Draft Konsultasi</span>
            </div>

            <div style="background:var(--color-soft-blue); border-left:4px solid var(--color-blue-support); padding:18px 20px; border-radius:0 8px 8px 0; margin-bottom:24px;">
              <strong style="color:var(--color-navy); display:block; margin-bottom:6px; font-size:1.05rem;">VISI:</strong>
              <p style="color:#1E293B; font-style:italic; font-size:1.02rem; margin:0;">
                "Terwujudnya Kelurahan Tambangan yang Maju, Berdaya Saing, Sehat, dan Berkelanjutan Melalui Pelayanan Publik Prima dan Partisipasi Aktif Gotong Royong Warga."
              </p>
            </div>

            <h4 style="font-size:1rem; color:var(--color-navy); margin-bottom:12px; font-weight:700;">MISI:</h4>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="display:flex; gap:12px; align-items:flex-start;">
                <span style="background:var(--color-blue-support); color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700; flex-shrink:0;">1</span>
                <p style="margin:0; color:var(--color-neutral-dark); font-size:0.92rem;">Meningkatkan kualitas pelayanan administrasi kependudukan yang cepat, transparan, akuntabel, dan bebas pungutan liar.</p>
              </div>
              <div style="display:flex; gap:12px; align-items:flex-start;">
                <span style="background:var(--color-blue-support); color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700; flex-shrink:0;">2</span>
                <p style="margin:0; color:var(--color-neutral-dark); font-size:0.92rem;">Mengembangkan kapasitas ekonomi lokal melalui pendampingan legalitas, pelatihan kemasan, dan promosi digital UMKM Tambangan.</p>
              </div>
              <div style="display:flex; gap:12px; align-items:flex-start;">
                <span style="background:var(--color-blue-support); color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700; flex-shrink:0;">3</span>
                <p style="margin:0; color:var(--color-neutral-dark); font-size:0.92rem;">Mewujudkan lingkungan yang bersih dan asri melalui edukasi pemilahan sampah dari rumah tangga dan penguatan bank sampah mandiri.</p>
              </div>
              <div style="display:flex; gap:12px; align-items:flex-start;">
                <span style="background:var(--color-blue-support); color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700; flex-shrink:0;">4</span>
                <p style="margin:0; color:var(--color-neutral-dark); font-size:0.92rem;">Mengoptimalkan pelayanan kesehatan dasar, posyandu balita dan lansia, serta pencegahan stunting terintegrasi.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Info Geografis -->
        <div>
          <div class="admin-card" style="padding:24px; margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin:0;">
                <i class="fas fa-map" style="color:var(--color-gold); margin-right:8px;"></i> Data Wilayah
              </h3>
              <span class="badge badge-demo">Estimasi</span>
            </div>

            <table style="width:100%; font-size:0.86rem; border-collapse:collapse;">
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Kecamatan</td><td style="font-weight:700; text-align:right;">Mijen</td></tr>
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Kota</td><td style="font-weight:700; text-align:right;">Semarang</td></tr>
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Provinsi</td><td style="font-weight:700; text-align:right;">Jawa Tengah</td></tr>
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Jumlah RW (Est.)</td><td style="font-weight:700; text-align:right;">6 RW</td></tr>
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Jumlah RT (Est.)</td><td style="font-weight:700; text-align:right;">28 RT</td></tr>
              <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 0; color:#64748B;">Tipologi Wilayah</td><td style="font-weight:700; text-align:right;">Perbukitan & Pemukiman</td></tr>
            </table>

            <div style="background:#F1F5F9; border-radius:8px; padding:12px; margin-top:16px; font-size:0.8rem; color:#475569;">
              <i class="fas fa-info-circle"></i> <em>Catatan: Angka detail luas hektar dan batas desa final akan disinkronkan saat verifikasi data statistik definitif dari Kecamatan Mijen.</em>
            </div>
          </div>

          <div class="admin-card" style="padding:22px; background:var(--color-soft-blue); border:1px solid #CBD5E1;">
            <h4 style="font-size:0.95rem; color:var(--color-navy); margin-bottom:8px; font-weight:700;">Butuh Informasi Pelayanan?</h4>
            <p style="font-size:0.82rem; color:#475569; margin-bottom:14px;">Silakan tinjau persyaratan berkas administrasi atau ajukan aspirasi melalui kanal resmi.</p>
            <button class="btn btn-primary" onclick="navigateTo('layanan')" style="width:100%; font-size:0.82rem;">Lihat Syarat Layanan</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPemerintahanView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Struktur Organisasi</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Pemerintahan Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Aparatur sipil pemerintahan kelurahan yang bertugas melayani administrasi warga, membina ketenteraman ketertiban, dan menggerakkan pembangunan di wilayah Tambangan Mijen.</p>
      </div>
    </div>

    <div class="container section">
      <div class="section-header">
        <span class="section-tag">Aparatur Kelurahan</span>
        <h2 class="section-title">Pimpinan & Kepala Seksi Kelurahan Tambangan</h2>
        <p class="section-subtitle">Struktur kepegawaian dan rincian tugas pokok aparatur sipil kelurahan.</p>
        <div style="margin-top:10px;"><span class="badge badge-demo"><i class="fas fa-exclamation-triangle"></i> Nama & Foto adalah Data Demonstrasi untuk Presentasi Prototype — Menunggu SK Resmi Kelurahan</span></div>
      </div>

      <!-- Grid Pejabat -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(270px, 1fr)); gap:24px; margin-bottom:50px;">
        ${appData.officials.map(o => `
          <div class="admin-card" style="margin-bottom:0; text-align:center; padding:26px 20px;">
            <div style="position:relative; width:120px; height:120px; margin:0 auto 16px; border-radius:50%; overflow:hidden; border:4px solid var(--color-soft-blue); box-shadow:var(--shadow-md);">
              <img src="${o.photo}" alt="${o.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <span class="badge badge-info" style="margin-bottom:8px;">${o.role}</span>
            <h3 style="font-size:1.1rem; font-weight:700; color:var(--color-navy); margin-bottom:4px;">${o.name}</h3>
            <p style="font-size:0.75rem; color:#64748B; margin-bottom:12px;">${o.nip}</p>
            <div style="background:#F8FAFC; border-radius:8px; padding:12px; font-size:0.8rem; color:#475569; text-align:left; line-height:1.5;">
              <strong>Tugas Pokok:</strong> ${o.duties}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Kelembagaan Masyarakat -->
      <div class="admin-card" style="padding:28px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:12px;">
          <div>
            <h3 style="font-size:1.25rem; color:var(--color-navy); font-weight:700;">Lembaga Kemasyarakatan Kelurahan (LKK) Tambangan</h3>
            <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Mitra kerja pemerintah kelurahan dalam memelihara kerukunan, ketahanan sosial, dan gotong royong.</p>
          </div>
          <span class="badge badge-gold">6 Wilayah Rukun Warga</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
          ${[1, 2, 3, 4, 5, 6].map(rw => `
            <div style="border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px; background:#fff;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="color:var(--color-navy); font-size:0.98rem;">RW 0${rw} Tambangan</strong>
                <span class="badge badge-info">Contoh RT</span>
              </div>
              <div style="font-size:0.8rem; color:#64748B; margin-bottom:6px;">Ketua: <strong>[Nama Ketua RW 0${rw}]</strong></div>
              <div style="font-size:0.75rem; color:#94A3B8;"><i class="fas fa-map-pin"></i> Wilayah RW 0${rw}, Kel. Tambangan</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderLayananView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Pelayanan Administrasi Warga</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Katalog Layanan Administrasi Kelurahan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Informasi transparan mengenai dokumen persyaratan, prosedur permohonan surat keterangan, dan estimasi waktu penyelesaian di Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <!-- Search & Filter Bar -->
      <div class="admin-card" style="padding:20px; margin-bottom:30px;">
        <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:16px; align-items:center;">
          <div>
            <label class="form-label">Cari Nama Layanan / Kata Kunci</label>
            <input type="text" id="service-search-input" onkeyup="filterServicesList()" placeholder="Ketik: Domisili, SKU, SKTM, Pindah..." class="form-control">
          </div>
          <div>
            <label class="form-label">Kategori Layanan</label>
            <select id="service-category-select" onchange="filterServicesList()" class="form-control">
              <option value="">Semua Kategori</option>
              <option value="Kependudukan">Kependudukan</option>
              <option value="Perekonomian">Perekonomian & UMKM</option>
              <option value="Sosial">Sosial & Bantuan</option>
            </select>
          </div>
          <div style="padding-top:24px;">
            <button class="btn btn-primary" onclick="filterServicesList()" style="width:100%;"><i class="fas fa-search"></i> Saring Layanan</button>
          </div>
        </div>
      </div>

      <!-- Service Cards Grid -->
      <div class="service-grid" id="service-items-container">
        ${appData.services.map(s => `
          <div class="service-card" data-title="${s.title.toLowerCase()}" data-category="${s.category.toLowerCase()}">
            <div class="service-icon-box"><i class="fas fa-file-invoice"></i></div>
            <span class="badge badge-info" style="align-self:flex-start; margin-bottom:8px;">${s.code}</span>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc">${s.desc}</p>
            <div class="service-meta">
              <span><i class="far fa-clock"></i> Estimasi: <strong>${s.est}</strong></span>
              <span><i class="fas fa-tag"></i> <strong>${s.cost}</strong></span>
            </div>
            <button onclick="showServiceDetail(${s.id})" class="btn btn-primary" style="margin-top:16px; width:100%;">
              <i class="fas fa-info-circle"></i> Lihat Persyaratan Lengkap
            </button>
          </div>
        `).join('')}
      </div>

      <!-- FAQ Terpadu -->
      <div class="admin-card" style="padding:30px; margin-top:50px;">
        <h3 style="font-size:1.25rem; color:var(--color-navy); margin-bottom:18px; font-weight:700;">Pertanyaan Umum (FAQ) Pelayanan Kelurahan</h3>
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div style="background:#F8FAFC; border:1px solid var(--color-border); padding:16px; border-radius:8px;">
            <strong style="color:var(--color-navy); font-size:0.95rem; display:block; margin-bottom:4px;"><i class="fas fa-question-circle" style="color:var(--color-blue-support);"></i> Apakah pengurusan surat di Kelurahan Tambangan dipungut biaya?</strong>
            <p style="margin:0; font-size:0.86rem; color:#475569;">Seluruh pengurusan surat keterangan dan surat pengantar di Kantor Kelurahan Tambangan adalah Gratis 100% (Rp0). Tidak ada pungutan retribusi apa pun.</p>
          </div>
          <div style="background:#F8FAFC; border:1px solid var(--color-border); padding:16px; border-radius:8px;">
            <strong style="color:var(--color-navy); font-size:0.95rem; display:block; margin-bottom:4px;"><i class="fas fa-question-circle" style="color:var(--color-blue-support);"></i> Apakah pengurusan surat bisa diwakilkan?</strong>
            <p style="margin:0; font-size:0.86rem; color:#475569;">Bisa diwakilkan oleh anggota keluarga yang berada dalam satu Kartu Keluarga (KK) dengan membawa identitas diri asli. Apabila di luar KK, wajib menyertakan surat kuasa bermaterai dari pemohon.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function filterServicesList() {
  const query = document.getElementById('service-search-input')?.value.toLowerCase() || '';
  const cat = document.getElementById('service-category-select')?.value.toLowerCase() || '';
  const cards = document.querySelectorAll('#service-items-container .service-card');

  cards.forEach(card => {
    const title = card.getAttribute('data-title');
    const category = card.getAttribute('data-category');
    const matchesQuery = !query || title.includes(query);
    const matchesCat = !cat || category.includes(cat);
    card.style.display = (matchesQuery && matchesCat) ? 'flex' : 'none';
  });
}

function renderBeritaView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Warta Informasi</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Warta & Berita Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Kumpulan berita resmi seputar agenda pembangunan sarana prasarana, posyandu, pemberdayaan UMKM, dan kegiatan kemasyarakatan di Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div class="news-grid">
        ${appData.news.map(n => `
          <div class="news-card">
            <img src="${n.image}" alt="${n.title}" class="news-thumb">
            <div class="news-body">
              <div class="news-category-date">
                <span class="badge badge-info">${n.category}</span>
                <span><i class="far fa-calendar-alt"></i> ${n.date}</span>
              </div>
              <h3 class="news-title" onclick="showNewsDetail(${n.id})">${n.title}</h3>
              <p class="news-excerpt">${n.excerpt}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:14px;">
                <small style="color:#94A3B8;"><i class="fas fa-user-edit"></i> ${n.author}</small>
                <button onclick="showNewsDetail(${n.id})" class="btn btn-secondary" style="padding:6px 14px; font-size:0.8rem;">
                  Baca Berita <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDetailBeritaView() {
  const n = appData.selectedNews || appData.news[0];
  return `
    <div style="background:var(--color-soft-blue); padding:30px 0; border-bottom:1px solid var(--color-border);">
      <div class="container">
        <button class="btn btn-secondary" onclick="navigateTo('berita')" style="margin-bottom:12px; font-size:0.82rem;"><i class="fas fa-arrow-left"></i> Kembali ke Daftar Berita</button>
        <span class="badge badge-info">${n.category}</span>
        <h1 style="font-size:2.1rem; font-weight:800; color:var(--color-navy); margin-top:8px;">${n.title}</h1>
        <div style="display:flex; gap:16px; color:#64748B; font-size:0.85rem; margin-top:10px;">
          <span><i class="far fa-calendar-alt"></i> Dipublikasikan: ${n.date}</span>
          <span><i class="fas fa-user-edit"></i> Penulis: ${n.author}</span>
          <span><i class="fas fa-map-marker-alt"></i> Kelurahan Tambangan</span>
        </div>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:2.5fr 1fr; gap:40px;">
        <div>
          <img src="${n.image}" alt="${n.title}" style="width:100%; max-height:430px; object-fit:cover; border-radius:var(--radius-lg); margin-bottom:24px; box-shadow:var(--shadow-md);">
          
          <div style="font-size:1.02rem; line-height:1.8; color:#334155;">
            <p style="margin-bottom:18px;"><strong>TAMBANGAN, MIJEN</strong> — ${n.content}</p>
            <p style="margin-bottom:18px;">Pemerintah Kelurahan Tambangan bersama jajaran pengurus RT/RW, LPMK, Karang Taruna, dan tim KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang terus memperkuat sinergi partisipatif demi kemaslahatan warga. Keterbukaan informasi dan penyampaian program secara berkesinambungan menjadi modal penting dalam menggerakkan pembangunan wilayah.</p>
            <p style="margin-bottom:24px;">Masyarakat diimbau untuk selalu aktif mengikuti rembug musyawarah tingkat lingkungan dan memanfaatkan kanal digital kelurahan ini sebagai sarana komunikasi dua arah.</p>
          </div>

          <!-- Galeri Terkait -->
          <div style="margin-top:36px; border-top:1px solid var(--color-border); padding-top:20px;">
            <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin-bottom:14px;">Dokumentasi Liputan Terkait</h3>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
              <img src="assets/img/musrenbang.jpg" style="width:100%; height:130px; object-fit:cover; border-radius:8px;">
              <img src="assets/img/posyandu.jpg" style="width:100%; height:130px; object-fit:cover; border-radius:8px;">
              <img src="assets/img/gotong_royong.jpg" style="width:100%; height:130px; object-fit:cover; border-radius:8px;">
            </div>
          </div>
        </div>

        <!-- Sidebar Berita Lainnya -->
        <div>
          <div class="admin-card" style="padding:22px;">
            <h3 style="font-size:1.1rem; color:var(--color-navy); margin-bottom:16px; font-weight:700;">Berita Lainnya</h3>
            <div style="display:flex; flex-direction:column; gap:14px;">
              ${appData.news.filter(item => item.id !== n.id).map(other => `
                <div style="cursor:pointer;" onclick="showNewsDetail(${other.id})">
                  <span style="font-size:0.75rem; color:var(--color-blue-support); font-weight:700;">${other.category}</span>
                  <h4 style="font-size:0.9rem; color:var(--color-navy); margin-top:2px; line-height:1.4;">${other.title}</h4>
                  <small style="color:#94A3B8;"><i class="far fa-calendar-alt"></i> ${other.date}</small>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
