// Home View for Kelurahan Tambangan, Kec. Mijen, Kota Semarang

function renderHomeView() {
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-landmark"></i> Portal Resmi Informasi Digital Kelurahan Tambangan
          </div>
          <h1 class="hero-title">Membangun Lingkungan, Melayani Masyarakat Tambangan.</h1>
          <p class="hero-desc">
            Selamat datang di pusat layanan dan publikasi informasi terpadu Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang. Kami hadir mewujudkan pelayanan administrasi prima, keterbukaan informasi, dan penguatan potensi ekonomi serta gotong royong warga.
          </p>
          <div class="hero-cta">
            <button class="btn btn-gold" onclick="navigateTo('layanan')"><i class="fas fa-file-invoice"></i> Lihat Panduan Layanan</button>
            <button class="btn btn-outline-white" onclick="navigateTo('profil')"><i class="fas fa-compass"></i> Jelajahi Profil Tambangan</button>
            <button class="btn btn-outline-white" onclick="navigateTo('umkm')"><i class="fas fa-store"></i> Direktori UMKM Warga</button>
          </div>
        </div>

        <!-- Quick Access Cards -->
        <div class="hero-quick-cards">
          <div class="quick-card">
            <div class="quick-card-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="quick-card-body">
              <h4>Wilayah Kelurahan</h4>
              <p>Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang, Jawa Tengah</p>
            </div>
          </div>
          <div class="quick-card">
            <div class="quick-card-icon"><i class="fas fa-clock"></i></div>
            <div class="quick-card-body">
              <h4>Jam Pelayanan Kantor</h4>
              <p>Senin – Kamis: 08.00–15.30<br>Jumat: 08.00–14.30 WIB</p>
            </div>
          </div>
          <div class="quick-card">
            <div class="quick-card-icon"><i class="fas fa-hands-helping"></i></div>
            <div class="quick-card-body">
              <h4>Pemberdayaan Warga</h4>
              <p>Didukung KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selayang Pandang Profil Tambangan -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center;">
          <div>
            <span class="section-tag">Selayang Pandang</span>
            <h2 class="section-title">Harmoni Komunitas, Lingkungan Asri, dan Kemandirian Warga</h2>
            <p style="color:var(--color-neutral-gray); margin-bottom:16px; line-height:1.7;">
              Kelurahan Tambangan terletak di kawasan Kecamatan Mijen, Kota Semarang, Jawa Tengah. Kawasan ini dikenal dengan lanskap lingkungan yang hijau, perbukitan yang sejuk, serta kehidupan bertetangga yang menjunjung tinggi semangat gotong royong masyarakat Jawa Tengah.
            </p>
            <p style="color:var(--color-neutral-gray); margin-bottom:24px; line-height:1.7;">
              Melalui program digitalisasi hasil kolaborasi dengan KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang, website ini dihadirkan sebagai infrastruktur informasi berkelanjutan yang dapat dimanfaatkan secara mandiri oleh perangkat kelurahan dan warga Tambangan.
            </p>
            <div style="display:flex; gap:14px; flex-wrap:wrap;">
              <button class="btn btn-secondary" onclick="navigateTo('profil')">Profil & Wilayah Tambangan <i class="fas fa-arrow-right"></i></button>
              <button class="btn btn-secondary" onclick="navigateTo('pemerintahan')">Struktur Organisasi <i class="fas fa-users"></i></button>
            </div>
          </div>
          <div>
            <div style="position:relative; border-radius:var(--radius-xl); overflow:hidden; box-shadow:var(--shadow-xl); border:4px solid #fff;">
              <img src="assets/img/office.jpg" alt="Suasana Wilayah Kelurahan Tambangan" style="width:100%; height:370px; object-fit:cover; display:block;">
              <div style="position:absolute; bottom:16px; left:16px; right:16px; background:rgba(10,20,49,0.88); backdrop-filter:blur(6px); color:#fff; padding:14px 18px; border-radius:var(--radius-md);">
                <div style="font-weight:700; font-size:0.95rem;">Kelurahan Tambangan, Kec. Mijen</div>
                <div style="font-size:0.8rem; color:#CBD5E1;">Melayani kebutuhan masyarakat dengan ramah dan transparan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ringkasan Statistik (Data Demonstrasi Terlabel Jelas) -->
    <section class="container">
      <div class="stats-banner">
        <div style="text-align:center; margin-bottom:20px;">
          <span class="badge badge-demo" style="background:rgba(255,255,255,0.15); color:#FEE7B3; border:1px solid rgba(245,163,26,0.5);">
            <i class="fas fa-info-circle"></i> Data Estimasi Demonstrasi — Menunggu Sinkronisasi Data Resmi Kecamatan Mijen
          </span>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <h3>4.850+</h3>
            <p>Estimasi Jiwa Penduduk</p>
          </div>
          <div class="stat-item">
            <h3>1.320</h3>
            <p>Estimasi Kepala Keluarga</p>
          </div>
          <div class="stat-item">
            <h3>6 RW / 28 RT</h3>
            <p>Struktur Kelembagaan Warga</p>
          </div>
          <div class="stat-item">
            <h3>35+</h3>
            <p>Pelaku Usaha Mikro Binaan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Layanan Administrasi Unggulan -->
    <section class="section" style="background:var(--color-soft-blue);">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pelayanan Terpadu</span>
          <h2 class="section-title">Informasi Layanan Administrasi Kelurahan</h2>
          <p class="section-subtitle">Panduan persyaratan berkas, alur pembuatan surat keterangan, dan estimasi waktu penyelesaian di Kelurahan Tambangan.</p>
        </div>

        <div class="service-grid">
          ${appData.services.slice(0, 3).map(s => `
            <div class="service-card">
              <div class="service-icon-box"><i class="fas fa-file-signature"></i></div>
              <span class="badge badge-info" style="align-self:flex-start; margin-bottom:8px;">${s.code}</span>
              <h3 class="service-title">${s.title}</h3>
              <p class="service-desc">${s.desc}</p>
              <div class="service-meta">
                <span><i class="far fa-clock"></i> Estimasi: <strong>${s.est}</strong></span>
                <span><i class="fas fa-tag"></i> <strong>${s.cost}</strong></span>
              </div>
              <button onclick="showServiceDetail(${s.id})" class="btn btn-secondary" style="margin-top:16px; width:100%;">Lihat Persyaratan & Alur</button>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:36px;">
          <button class="btn btn-primary" onclick="navigateTo('layanan')">Lihat Seluruh Panduan Layanan (6+ Format) <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </section>

    <!-- Berita & Pengumuman Terbaru -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:36px; flex-wrap:wrap; gap:16px;">
          <div>
            <span class="section-tag">Kabar Tambangan</span>
            <h2 class="section-title" style="margin-bottom:0;">Warta & Berita Terkini</h2>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-secondary" onclick="navigateTo('berita')">Arsip Berita</button>
            <button class="btn btn-secondary" onclick="navigateTo('pengumuman')">Papan Pengumuman</button>
          </div>
        </div>

        <div class="news-grid">
          ${appData.news.slice(0, 3).map(n => `
            <div class="news-card">
              <img src="${n.image}" alt="${n.title}" class="news-thumb">
              <div class="news-body">
                <div class="news-category-date">
                  <span class="badge badge-info">${n.category}</span>
                  <span><i class="far fa-calendar-alt"></i> ${n.date}</span>
                </div>
                <h3 class="news-title" onclick="showNewsDetail(${n.id})">${n.title}</h3>
                <p class="news-excerpt">${n.excerpt}</p>
                <button onclick="showNewsDetail(${n.id})" style="background:none; border:none; color:var(--color-blue-support); font-weight:700; text-align:left; padding:0; cursor:pointer; font-size:0.88rem;">
                  Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Highlight Agenda Terdekat & Potensi UMKM -->
    <section class="section" style="background:var(--color-warm-white);">
      <div class="container">
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:36px;">
          <!-- Agenda Mendatang -->
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <div>
                <span class="section-tag">Agenda Komunitas</span>
                <h3 style="font-size:1.35rem; font-weight:800; color:var(--color-navy); margin:0;">Jadwal Kegiatan Warga</h3>
              </div>
              <button class="btn btn-secondary" onclick="navigateTo('agenda')" style="padding:6px 12px; font-size:0.8rem;">Semua Agenda</button>
            </div>

            <div style="display:flex; flex-direction:column; gap:14px;">
              ${appData.agendas.slice(0, 3).map(ag => `
                <div class="admin-card" style="padding:16px; margin-bottom:0; display:flex; gap:16px; align-items:center;">
                  <img src="${ag.image}" alt="${ag.title}" style="width:70px; height:70px; border-radius:10px; object-fit:cover; flex-shrink:0;">
                  <div style="flex-grow:1;">
                    <span class="badge badge-info" style="font-size:0.7rem; margin-bottom:4px;">${ag.category}</span>
                    <h4 style="font-size:0.95rem; font-weight:700; color:var(--color-navy); margin-bottom:4px;">${ag.title}</h4>
                    <div style="font-size:0.78rem; color:#64748B;">
                      <i class="far fa-calendar-alt"></i> ${ag.date} | <i class="far fa-clock"></i> ${ag.time}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Highlight UMKM -->
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <div>
                <span class="section-tag">Ekonomi Warga</span>
                <h3 style="font-size:1.35rem; font-weight:800; color:var(--color-navy); margin:0;">Produk Unggulan UMKM</h3>
              </div>
              <button class="btn btn-secondary" onclick="navigateTo('umkm')" style="padding:6px 12px; font-size:0.8rem;">Katalog Lengkap</button>
            </div>

            <div class="admin-card" style="padding:18px; margin-bottom:0;">
              <img src="assets/img/umkm_kopi.jpg" alt="Kopi Tambangan" style="width:100%; height:160px; object-fit:cover; border-radius:8px; margin-bottom:12px;">
              <span class="badge badge-gold" style="margin-bottom:6px;">Kuliner & Minuman</span>
              <h4 style="font-size:1.05rem; font-weight:700; color:var(--color-navy); margin-bottom:4px;">Kopi Robusta Lereng Tambangan</h4>
              <p style="font-size:0.82rem; color:#64748B; margin-bottom:14px; line-height:1.5;">Biji kopi robusta pilihan dari perkebunan rakyat Tambangan Mijen, diolah dengan sangrai tradisional bercita rasa harum khas Semarang.</p>
              <button class="btn btn-primary" onclick="navigateTo('umkm')" style="width:100%; font-size:0.82rem;">Lihat Direktori UMKM Tambangan</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeri Dokumentasi -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Dokumentasi Foto</span>
          <h2 class="section-title">Kegiatan & Guyub Warga Tambangan</h2>
          <p class="section-subtitle">Potret dinamika kebersamaan masyarakat dalam kerja bakti, posyandu, keagamaan, dan pembinaan pemuda.</p>
        </div>

        <div class="gallery-grid">
          ${appData.gallery.slice(0, 4).map(g => `
            <div class="gallery-card" onclick="navigateTo('galeri')">
              <img src="${g.image}" alt="${g.title}">
              <div class="gallery-overlay">
                <span class="badge badge-gold" style="align-self:flex-start; margin-bottom:6px;">${g.tag}</span>
                <h4>${g.title}</h4>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:30px;">
          <button class="btn btn-secondary" onclick="navigateTo('galeri')">Buka Galeri Foto Lengkap <i class="fas fa-images"></i></button>
        </div>
      </div>
    </section>
  `;
}
