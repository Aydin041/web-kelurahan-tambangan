// Public Layout & Unified Navigation for Kelurahan Tambangan

function renderPublicLayout(subView) {
  return `
    <!-- Top Government Strip -->
    <div class="gov-top-strip">
      <div class="container gov-top-content">
        <div class="gov-top-items">
          <span class="gov-top-item"><i class="fas fa-map-marker-alt" style="color:var(--color-gold);"></i> Kelurahan Tambangan, Kec. Mijen, Kota Semarang, Jawa Tengah</span>
          <span class="gov-top-item"><i class="fas fa-clock" style="color:var(--color-gold);"></i> Pelayanan: Senin - Jumat 08.00 - 15.30 WIB</span>
        </div>
        <div class="gov-top-items">
          <span class="gov-top-item badge-kkn" style="padding:2px 8px; border-radius:4px; font-size:0.7rem;"><i class="fas fa-graduation-cap"></i> KKN Tematik Periode 38 Unwahas</span>
          <a href="javascript:void(0)" onclick="navigateTo('admin_dashboard')" style="color:var(--color-gold); text-decoration:none; font-weight:700; margin-left:8px;"><i class="fas fa-lock"></i> Portal Staf Kelurahan</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="main-navbar">
      <div class="container nav-container">
        <a href="javascript:void(0)" onclick="navigateTo('home')" class="brand-link">
          <div class="brand-logo-emblem">
            <i class="fas fa-landmark fa-lg"></i>
          </div>
          <div class="brand-titles">
            <h1>KELURAHAN TAMBANGAN</h1>
            <span>Kecamatan Mijen • Kota Semarang • Jawa Tengah</span>
          </div>
        </a>

        <ul class="nav-menu">
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('home')" class="${subView === 'home' ? 'active' : ''}">Beranda</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('profil')" class="${subView === 'profil' ? 'active' : ''}">Profil</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('pemerintahan')" class="${subView === 'pemerintahan' ? 'active' : ''}">Pemerintahan</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('layanan')" class="${subView === 'layanan' ? 'active' : ''}">Layanan</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('berita')" class="${subView === 'berita' || subView === 'detail_berita' ? 'active' : ''}">Berita</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('pengumuman')" class="${subView === 'pengumuman' ? 'active' : ''}">Pengumuman</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('agenda')" class="${subView === 'agenda' ? 'active' : ''}">Agenda</a></li>
          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('umkm')" class="${subView === 'umkm' || subView === 'detail_umkm' ? 'active' : ''}">UMKM</a></li>
          
          <!-- Dropdown Info Tematik Masyarakat -->
          <li class="nav-item nav-dropdown">
            <a href="javascript:void(0)" class="${['lingkungan', 'kesehatan', 'pendidikan', 'olahraga', 'galeri'].includes(subView) ? 'active' : ''}">
              Masyarakat <i class="fas fa-chevron-down" style="font-size:0.7rem; margin-left:4px;"></i>
            </a>
            <div class="nav-dropdown-menu">
              <a href="javascript:void(0)" onclick="navigateTo('lingkungan')"><i class="fas fa-leaf" style="color:var(--color-success); width:18px;"></i> Lingkungan & Sampah</a>
              <a href="javascript:void(0)" onclick="navigateTo('kesehatan')"><i class="fas fa-heartbeat" style="color:var(--color-danger); width:18px;"></i> Kesehatan & Posyandu</a>
              <a href="javascript:void(0)" onclick="navigateTo('pendidikan')"><i class="fas fa-book-reader" style="color:var(--color-blue-support); width:18px;"></i> Pendidikan & Keagamaan</a>
              <a href="javascript:void(0)" onclick="navigateTo('olahraga')"><i class="fas fa-running" style="color:var(--color-gold); width:18px;"></i> Olahraga & Komunitas</a>
              <a href="javascript:void(0)" onclick="navigateTo('galeri')"><i class="fas fa-images" style="color:var(--color-purple-accent); width:18px;"></i> Galeri Kegiatan</a>
            </div>
          </li>

          <li class="nav-item"><a href="javascript:void(0)" onclick="navigateTo('kontak')" class="${subView === 'kontak' ? 'active' : ''}">Kontak</a></li>
        </ul>

        <div style="display:flex; align-items:center; gap:10px;">
          <button class="btn btn-gold" onclick="navigateTo('layanan')" style="padding:8px 14px; font-size:0.82rem;"><i class="fas fa-file-alt"></i> Info Layanan</button>
          <button class="mobile-menu-toggle" onclick="toggleMobileNav()"><i class="fas fa-bars"></i></button>
        </div>
      </div>

      <!-- Responsive Mobile Dropdown Drawer -->
      <div id="mobile-nav-drawer" style="display:none; background:#fff; border-top:1px solid var(--color-border); padding:16px 24px; box-shadow:var(--shadow-md);">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <a href="javascript:void(0)" onclick="navigateTo('home'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Beranda</a>
          <a href="javascript:void(0)" onclick="navigateTo('profil'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Profil Kelurahan</a>
          <a href="javascript:void(0)" onclick="navigateTo('pemerintahan'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Pemerintahan</a>
          <a href="javascript:void(0)" onclick="navigateTo('layanan'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Layanan Administrasi</a>
          <a href="javascript:void(0)" onclick="navigateTo('berita'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Berita</a>
          <a href="javascript:void(0)" onclick="navigateTo('pengumuman'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Pengumuman</a>
          <a href="javascript:void(0)" onclick="navigateTo('agenda'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Agenda Kegiatan</a>
          <a href="javascript:void(0)" onclick="navigateTo('umkm'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Direktori UMKM</a>
          <a href="javascript:void(0)" onclick="navigateTo('lingkungan'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Lingkungan & Sampah</a>
          <a href="javascript:void(0)" onclick="navigateTo('kesehatan'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Kesehatan & Posyandu</a>
          <a href="javascript:void(0)" onclick="navigateTo('pendidikan'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Pendidikan & Keagamaan</a>
          <a href="javascript:void(0)" onclick="navigateTo('olahraga'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Olahraga & Komunitas</a>
          <a href="javascript:void(0)" onclick="navigateTo('galeri'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Galeri Dokumentasi</a>
          <a href="javascript:void(0)" onclick="navigateTo('kontak'); toggleMobileNav();" style="padding:8px 0; font-weight:600; color:var(--color-navy); border-bottom:1px solid #F1F5F9; text-decoration:none;">Kontak & Lokasi</a>
          <a href="javascript:void(0)" onclick="navigateTo('admin_dashboard'); toggleMobileNav();" style="padding:8px 0; font-weight:700; color:var(--color-gold); text-decoration:none;"><i class="fas fa-lock"></i> Masuk Dashboard Staf</a>
        </div>
      </div>
    </header>

    <!-- Dynamic Public View Content -->
    <main>
      ${renderPublicSubView(subView)}
    </main>

    <!-- Comprehensive Footer -->
    <footer class="gov-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3><i class="fas fa-landmark" style="color:var(--color-gold);"></i> KELURAHAN TAMBANGAN</h3>
            <p style="color:#94A3B8; line-height:1.7; margin-bottom:14px; font-size:0.88rem;">
              Portal Pusat Informasi Digital Resmi Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang, Jawa Tengah. Dikembangkan untuk mempercepat pelayanan administrasi, publikasi potensi masyarakat, dan penguatan transparansi informasi publik.
            </p>
            <div style="background:rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px; margin-bottom:14px; border-left:3px solid var(--color-purple-accent); font-size:0.8rem;">
              <strong style="color:#fff;">Program Kolaborasi:</strong><br>
              <span style="color:#CBD5E1;">KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang</span>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigasi Utama</h4>
            <ul class="footer-links">
              <li><a href="javascript:void(0)" onclick="navigateTo('home')">Beranda</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('profil')">Profil Kelurahan</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('pemerintahan')">Struktur Pemerintahan</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('layanan')">Layanan Administrasi</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('umkm')">Direktori UMKM Warga</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Informasi Warga</h4>
            <ul class="footer-links">
              <li><a href="javascript:void(0)" onclick="navigateTo('berita')">Warta Berita</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('pengumuman')">Pengumuman Resmi</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('agenda')">Agenda Kegiatan</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('lingkungan')">Lingkungan & Sampah</a></li>
              <li><a href="javascript:void(0)" onclick="navigateTo('kesehatan')">Kesehatan & Posyandu</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Kantor Kelurahan</h4>
            <p style="color:#CBD5E1; margin-bottom:8px; font-size:0.85rem;"><i class="fas fa-map-marker-alt" style="color:var(--color-gold); margin-right:8px;"></i> Kelurahan Tambangan, Kec. Mijen, Kota Semarang, Jawa Tengah</p>
            <p style="color:#CBD5E1; margin-bottom:8px; font-size:0.85rem;"><i class="fas fa-clock" style="color:var(--color-gold); margin-right:8px;"></i> Pelayanan: Senin - Jumat 08.00 - 15.30 WIB</p>
            <div style="background:rgba(255,255,255,0.08); padding:10px; border-radius:8px; border-left:3px solid var(--color-gold); margin-top:12px;">
              <small style="color:#E2E8F0; display:block;">Panggilan Darurat Kota Semarang:</small>
              <strong style="color:var(--color-gold); font-size:1rem;">Call Center 112</strong>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; 2026 Pemerintah Kelurahan Tambangan, Kec. Mijen, Kota Semarang. Seluruh Hak Cipta Dilindungi.</div>
          <div style="display:flex; gap:16px;">
            <a href="javascript:void(0)" onclick="navigateTo('profil')" style="color:#94A3B8; text-decoration:none;">Visi & Misi</a>
            <a href="javascript:void(0)" onclick="navigateTo('layanan')" style="color:#94A3B8; text-decoration:none;">Panduan Pelayanan</a>
            <a href="javascript:void(0)" onclick="navigateTo('admin_workflow')" style="color:#94A3B8; text-decoration:none;">Alur Transparansi Konten</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobileNav() {
  const el = document.getElementById('mobile-nav-drawer');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// Sub-view dispatcher
function renderPublicSubView(view) {
  switch(view) {
    case 'home': return renderHomeView();
    case 'profil': return renderProfilView();
    case 'pemerintahan': return renderPemerintahanView();
    case 'layanan': return renderLayananView();
    case 'berita': return renderBeritaView();
    case 'detail_berita': return renderDetailBeritaView();
    case 'pengumuman': return renderPengumumanView();
    case 'agenda': return renderAgendaView();
    case 'umkm': return renderUmkmView();
    case 'detail_umkm': return renderDetailUmkmView();
    case 'lingkungan': return renderLingkunganView();
    case 'kesehatan': return renderKesehatanView();
    case 'pendidikan': return renderPendidikanView();
    case 'olahraga': return renderOlahragaView();
    case 'galeri': return renderGaleriView();
    case 'kontak': return renderKontakView();
    case 'workflow': return renderWorkflowDiagramView();
    default: return renderHomeView();
  }
}
