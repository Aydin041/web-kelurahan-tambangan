// Admin Dashboard for Kelurahan Tambangan (13 Sub-fitur lengkap)
// CRUD Fungsional dengan LocalStorage

function renderAdminLayout(subView) {
  return `
    <div class="admin-layout">
      <!-- Admin Sidebar Navigation (13 Menus) -->
      <aside class="admin-sidebar">
        <div class="admin-sidebar-header">
          <div style="width:38px; height:38px; border-radius:8px; background:linear-gradient(135deg, var(--color-gold), #D98C10); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800;">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div>
            <div style="font-weight:700; color:#fff; font-size:0.92rem; line-height:1.2;">PANEL TAMBANGAN</div>
            <small style="color:var(--color-gold); font-size:0.75rem;">Role: ${appData.activeRole === 'super_admin' ? 'Super Admin' : (appData.activeRole === 'admin' ? 'Admin Operator' : 'Kontributor')}</small>
          </div>
        </div>

        <nav class="admin-sidebar-nav">
          <div class="admin-nav-group-title">Menu Utama</div>
          <a class="admin-nav-item ${subView === 'admin_dashboard' ? 'active' : ''}" onclick="navigateTo('admin_dashboard')">
            <i class="fas fa-tachometer-alt"></i> 1. Dashboard Overview
          </a>

          <div class="admin-nav-group-title">Manajemen Konten Publik</div>
          <a class="admin-nav-item ${subView === 'admin_berita' ? 'active' : ''}" onclick="navigateTo('admin_berita')">
            <i class="fas fa-newspaper"></i> 2. Manajemen Berita
          </a>
          <a class="admin-nav-item ${subView === 'admin_pengumuman' ? 'active' : ''}" onclick="navigateTo('admin_pengumuman')">
            <i class="fas fa-bullhorn"></i> 3. Manajemen Pengumuman
          </a>
          <a class="admin-nav-item ${subView === 'admin_agenda' ? 'active' : ''}" onclick="navigateTo('admin_agenda')">
            <i class="far fa-calendar-alt"></i> 4. Manajemen Agenda
          </a>
          <a class="admin-nav-item ${subView === 'admin_galeri' ? 'active' : ''}" onclick="navigateTo('admin_galeri')">
            <i class="fas fa-images"></i> 5. Manajemen Galeri
          </a>
          <a class="admin-nav-item ${subView === 'admin_umkm' ? 'active' : ''}" onclick="navigateTo('admin_umkm')">
            <i class="fas fa-store-alt"></i> 6. Direktori UMKM
          </a>
          <a class="admin-nav-item ${subView === 'admin_profil' ? 'active' : ''}" onclick="navigateTo('admin_profil')">
            <i class="fas fa-id-card"></i> 7. Halaman Profil
          </a>
          <a class="admin-nav-item ${subView === 'admin_layanan' ? 'active' : ''}" onclick="navigateTo('admin_layanan')">
            <i class="fas fa-concierge-bell"></i> 8. Informasi Layanan
          </a>
          <a class="admin-nav-item ${subView === 'admin_workflow' ? 'active' : ''}" onclick="navigateTo('admin_workflow')">
            <i class="fas fa-tasks"></i> 9. Pengajuan Konten
          </a>

          <div class="admin-nav-group-title">Tata Kelola & Akses</div>
          <a class="admin-nav-item ${subView === 'admin_users' ? 'active' : ''}" onclick="navigateTo('admin_users')">
            <i class="fas fa-users-cog"></i> 10. Manajemen Pengguna
          </a>
          <a class="admin-nav-item ${subView === 'admin_roles' ? 'active' : ''}" onclick="navigateTo('admin_roles')">
            <i class="fas fa-user-shield"></i> 11. Role & Permission
          </a>
          <a class="admin-nav-item ${subView === 'admin_settings' ? 'active' : ''}" onclick="navigateTo('admin_settings')">
            <i class="fas fa-sliders-h"></i> 12. Pengaturan Website
          </a>
          <a class="admin-nav-item ${subView === 'admin_activity' ? 'active' : ''}" onclick="navigateTo('admin_activity')">
            <i class="fas fa-history"></i> 13. Aktivitas Pengguna
          </a>

          <div style="border-top:1px solid rgba(255,255,255,0.08); margin-top:14px; padding-top:10px;">
            <a class="admin-nav-item" onclick="navigateTo('home')" style="color:#F87171;">
              <i class="fas fa-sign-out-alt"></i> Kembali ke Website Publik
            </a>
          </div>
        </nav>
      </aside>

      <!-- Admin Main Area -->
      <main class="admin-main">
        <header class="admin-topbar">
          <div style="display:flex; align-items:center; gap:16px;">
            <span style="font-size:0.88rem; font-weight:700; color:var(--color-navy);">
              Sistem Informasi Manajemen Kelurahan Tambangan, Kec. Mijen
            </span>
          </div>

          <div style="display:flex; align-items:center; gap:18px;">
            <!-- Role Switcher -->
            <div style="display:flex; align-items:center; gap:8px; background:var(--color-neutral-light); padding:4px 10px; border-radius:8px; font-size:0.78rem;">
              <span style="color:#64748B; font-weight:600;"><i class="fas fa-user-circle"></i> Simulasi Role:</span>
              <select onchange="appData.activeRole = this.value; renderCurrentView();" style="border:none; background:transparent; font-weight:700; color:var(--color-navy); outline:none; cursor:pointer;">
                <option value="super_admin" ${appData.activeRole === 'super_admin' ? 'selected' : ''}>Super Admin</option>
                <option value="admin" ${appData.activeRole === 'admin' ? 'selected' : ''}>Admin / Operator</option>
                <option value="kontributor" ${appData.activeRole === 'kontributor' ? 'selected' : ''}>Kontributor (Karang Taruna/RW)</option>
              </select>
            </div>

            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:34px; height:34px; border-radius:50%; background:var(--color-blue-support); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">
                OP
              </div>
              <div>
                <div style="font-weight:700; font-size:0.82rem; color:var(--color-navy); line-height:1.2;">Operator Tambangan</div>
                <small style="color:var(--color-neutral-gray); font-size:0.7rem;">Pemerintah Kelurahan Tambangan</small>
              </div>
            </div>
          </div>
        </header>

        <div class="admin-content">
          ${renderAdminContent(subView)}
        </div>
      </main>
    </div>
  `;
}

function renderAdminContent(subView) {
  switch(subView) {
    case 'admin_dashboard': return renderAdminDashboardView();
    case 'admin_berita': return renderAdminBeritaView();
    case 'admin_pengumuman': return renderAdminPengumumanView();
    case 'admin_agenda': return renderAdminAgendaView();
    case 'admin_layanan': return renderAdminCrudView('Layanan Administrasi', appData.services);
    case 'admin_galeri': return renderAdminGaleriView();
    case 'admin_umkm': return renderAdminUmkmManagementView();
    case 'admin_profil': return renderAdminCrudView('Profil Kelurahan', [{ id: 1, title: 'Visi & Misi Tambangan', category: 'Profil' }]);
    case 'admin_workflow': return renderAdminWorkflowReviewView();
    case 'admin_users': return renderAdminUsersView();
    case 'admin_roles': return renderAdminRolesView();
    case 'admin_settings': return renderAdminSettingsView();
    case 'admin_activity': return renderAdminActivityView();
    default: return renderAdminDashboardView();
  }
}

function renderAdminDashboardView() {
  const pendingCount = appData.contentWorkflow.filter(w => w.status === 'Menunggu Pemeriksaan').length;
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Dashboard Pengelola Kelurahan Tambangan</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Ringkasan statistik data informasi, antrian moderasi usulan warga, dan log aktivitas operasional.</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-gold" onclick="showAddUmkmModal()" style="font-size:0.82rem; padding:8px 14px;">
          <i class="fas fa-plus"></i> Input UMKM Baru
        </button>
        <span class="badge badge-demo" style="padding:6px 12px;"><i class="fas fa-info-circle"></i> Mode Aktif</span>
      </div>
    </div>

    <!-- 5 Stats Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:18px; margin-bottom:28px;">
      <div class="admin-card" style="margin-bottom:0; padding:18px; border-left:4px solid var(--color-blue-support); cursor:pointer;" onclick="navigateTo('admin_berita')">
        <div style="color:var(--color-neutral-gray); font-size:0.78rem; font-weight:600; text-transform:uppercase;">Jumlah Berita</div>
        <div style="font-size:1.7rem; font-weight:800; color:var(--color-navy); margin-top:2px;">${appData.news.length} Artikel</div>
        <small style="color:var(--color-success); font-weight:600;"><i class="fas fa-check"></i> Publikasi Terverifikasi</small>
      </div>

      <div class="admin-card" style="margin-bottom:0; padding:18px; border-left:4px solid var(--color-gold); cursor:pointer;" onclick="navigateTo('admin_pengumuman')">
        <div style="color:var(--color-neutral-gray); font-size:0.78rem; font-weight:600; text-transform:uppercase;">Pengumuman Aktif</div>
        <div style="font-size:1.7rem; font-weight:800; color:var(--color-navy); margin-top:2px;">${appData.announcements.length} Edaran</div>
        <small style="color:#64748B;">Surat Edaran Kelurahan</small>
      </div>

      <div class="admin-card" style="margin-bottom:0; padding:18px; border-left:4px solid var(--color-purple-accent); cursor:pointer;" onclick="navigateTo('admin_agenda')">
        <div style="color:var(--color-neutral-gray); font-size:0.78rem; font-weight:600; text-transform:uppercase;">Agenda Kegiatan</div>
        <div style="font-size:1.7rem; font-weight:800; color:var(--color-navy); margin-top:2px;">${appData.agendas.length} Acara</div>
        <small style="color:var(--color-purple-accent); font-weight:600;">Jadwal Posyandu & Warga</small>
      </div>

      <div class="admin-card" style="margin-bottom:0; padding:18px; border-left:4px solid var(--color-success); cursor:pointer;" onclick="navigateTo('admin_umkm')">
        <div style="color:var(--color-neutral-gray); font-size:0.78rem; font-weight:600; text-transform:uppercase;">Direktori UMKM</div>
        <div style="font-size:1.7rem; font-weight:800; color:var(--color-navy); margin-top:2px;">${appData.umkm.length} Usaha</div>
        <small style="color:var(--color-success); font-weight:600;">Ada Barcode & Maps</small>
      </div>

      <div class="admin-card" style="margin-bottom:0; padding:18px; border-left:4px solid var(--color-danger); cursor:pointer;" onclick="navigateTo('admin_workflow')">
        <div style="color:var(--color-neutral-gray); font-size:0.78rem; font-weight:600; text-transform:uppercase;">Menunggu Review</div>
        <div style="font-size:1.7rem; font-weight:800; color:var(--color-navy); margin-top:2px;">${pendingCount} Usulan</div>
        <small style="color:var(--color-danger); font-weight:600;">Antrian Moderasi</small>
      </div>
    </div>

    <!-- Antrian Moderasi Konten -->
    <div class="admin-card">
      <div class="admin-card-header">
        <div>
          <h3 class="admin-card-title"><i class="fas fa-tasks" style="color:var(--color-gold); margin-right:8px;"></i> Antrian Usulan Konten dari Kontributor Tambangan</h3>
          <small style="color:var(--color-neutral-gray);">Konten yang diunggah oleh Karang Taruna, RT/RW, dan mitra KKN sebelum dipublikasikan ke publik.</small>
        </div>
        <button class="btn btn-secondary" onclick="navigateTo('admin_workflow')" style="padding:6px 12px; font-size:0.8rem;">
          Lihat Alur Kerja <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Judul Usulan</th>
                <th>Pengusul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th style="text-align:right;">Aksi Moderasi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.contentWorkflow.map(item => `
                <tr>
                  <td><code>${item.id}</code></td>
                  <td><strong>${item.title}</strong><br><small style="color:#64748B;">${item.note}</small></td>
                  <td>${item.submitter}</td>
                  <td><span class="badge badge-info">${item.type}</span></td>
                  <td>${item.date}</td>
                  <td>
                    ${item.status === 'Disetujui' ? '<span class="badge badge-success"><i class="fas fa-check-circle"></i> Disetujui</span>' : ''}
                    ${item.status === 'Menunggu Pemeriksaan' ? '<span class="badge badge-warning"><i class="fas fa-clock"></i> Menunggu Pemeriksaan</span>' : ''}
                    ${item.status === 'Draft' ? '<span class="badge badge-info"><i class="fas fa-pencil-alt"></i> Draft</span>' : ''}
                    ${item.status === 'Ditolak' ? '<span class="badge badge-danger"><i class="fas fa-times-circle"></i> Ditolak</span>' : ''}
                  </td>
                  <td style="text-align:right;">
                    ${item.status === 'Menunggu Pemeriksaan' ? `
                      <button class="btn btn-primary" onclick="approveContent('${item.id}')" style="padding:4px 8px; font-size:0.75rem;"><i class="fas fa-check"></i> Setujui</button>
                      <button class="btn btn-secondary" onclick="rejectContent('${item.id}')" style="padding:4px 8px; font-size:0.75rem; color:var(--color-danger);"><i class="fas fa-times"></i> Tolak</button>
                    ` : `
                      <span class="badge badge-demo">Selesai</span>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function approveContent(id) {
  const item = appData.contentWorkflow.find(w => w.id === id);
  if (item) {
    item.status = 'Disetujui';
    alert(`Usulan "${item.title}" berhasil DISETUJUI dan langsung diterbitkan ke website publik Kelurahan Tambangan!`);
    renderCurrentView();
  }
}

function rejectContent(id) {
  const item = appData.contentWorkflow.find(w => w.id === id);
  if (item) {
    item.status = 'Ditolak';
    alert(`Usulan "${item.title}" DITOLAK dengan catatan perbaikan.`);
    renderCurrentView();
  }
}

// =====================================================
// MANAJEMEN BERITA (CRUD Fungsional)
// =====================================================
function renderAdminBeritaView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Berita & Warta</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Kelola berita resmi, dokumentasi kegiatan, dan warta informasi Kelurahan Tambangan.</p>
      </div>
      <div>
        <button class="btn btn-primary" onclick="showAddBeritaModal()"><i class="fas fa-plus"></i> Tambah Berita Baru</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <span style="font-weight:700; color:var(--color-navy);"><i class="fas fa-newspaper"></i> Total ${appData.news.length} Berita Terpublikasi</span>
        <button class="btn btn-secondary" onclick="navigateTo('berita')" style="font-size:0.8rem; padding:6px 12px;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Berita</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Penulis</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.news.map((n, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>
                    <strong>${n.title}</strong>
                    <br><small style="color:#64748B;">${n.excerpt ? n.excerpt.substring(0, 60) + '...' : ''}</small>
                  </td>
                  <td><span class="badge badge-info">${n.category}</span></td>
                  <td>${n.date}</td>
                  <td><small>${n.author}</small></td>
                  <td style="text-align:right;">
                    <button class="btn btn-primary" onclick="showNewsDetail(${n.id})" style="padding:4px 8px; font-size:0.75rem;"><i class="fas fa-eye"></i> Baca</button>
                    <button class="btn btn-secondary" onclick="deleteBerita(${n.id})" style="padding:4px 8px; font-size:0.75rem; color:var(--color-danger);"><i class="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function showAddBeritaModal() {
  const html = `
    <div class="modal-backdrop show" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width:680px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-newspaper" style="color:var(--color-gold);"></i> Tambah Berita Baru</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitNewBerita();" style="padding:24px; max-height:80vh; overflow-y:auto;">
          <div class="form-group">
            <label class="form-label">Judul Berita *</label>
            <input type="text" id="new-berita-title" required placeholder="Contoh: Gotong Royong Bersih Saluran Air RW 03" class="form-control">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Kategori *</label>
              <select id="new-berita-category" class="form-control">
                <option value="Pemerintahan">Pemerintahan</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Pemberdayaan UMKM">Pemberdayaan UMKM</option>
                <option value="Lingkungan">Lingkungan</option>
                <option value="Pendidikan">Pendidikan & Keagamaan</option>
                <option value="Kepemudaan">Kepemudaan & Olahraga</option>
                <option value="Umum">Umum</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Penulis / Sumber *</label>
              <input type="text" id="new-berita-author" required value="Sekretariat Kelurahan" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Ringkasan Berita *</label>
            <textarea id="new-berita-excerpt" rows="2" required placeholder="Ringkasan singkat untuk tampilan di halaman daftar berita..." class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Isi Berita Lengkap *</label>
            <textarea id="new-berita-content" rows="4" required placeholder="Tulis isi berita lengkap..." class="form-control"></textarea>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Terbitkan Berita</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitNewBerita() {
  const title = document.getElementById('new-berita-title').value;
  const category = document.getElementById('new-berita-category').value;
  const author = document.getElementById('new-berita-author').value;
  const excerpt = document.getElementById('new-berita-excerpt').value;
  const content = document.getElementById('new-berita-content').value;
  
  const newId = appData.news.length > 0 ? Math.max(...appData.news.map(n => n.id)) + 1 : 1;
  const today = new Date();
  const dateStr = `${today.getDate()} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][today.getMonth()]} ${today.getFullYear()}`;
  
  appData.news.unshift({
    id: newId,
    title: title,
    category: category,
    date: dateStr,
    author: author,
    image: 'assets/img/musrenbang.jpg',
    excerpt: excerpt,
    content: content
  });
  
  closeModal();
  alert(`Berita "${title}" berhasil diterbitkan di website Kelurahan Tambangan!`);
  renderCurrentView();
}

function deleteBerita(id) {
  if (confirm('Yakin ingin menghapus berita ini dari website?')) {
    appData.news = appData.news.filter(n => n.id !== id);
    renderCurrentView();
    alert('Berita berhasil dihapus.');
  }
}

// =====================================================
// MANAJEMEN PENGUMUMAN (CRUD Fungsional)
// =====================================================
function renderAdminPengumumanView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Pengumuman Resmi</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Kelola surat edaran, himbauan resmi, dan pemberitahuan penting Kelurahan Tambangan.</p>
      </div>
      <div>
        <button class="btn btn-primary" onclick="showAddPengumumanModal()"><i class="fas fa-plus"></i> Tambah Pengumuman</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <span style="font-weight:700; color:var(--color-navy);"><i class="fas fa-bullhorn"></i> Total ${appData.announcements.length} Pengumuman</span>
        <button class="btn btn-secondary" onclick="navigateTo('pengumuman')" style="font-size:0.8rem; padding:6px 12px;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Pengumuman</th>
                <th>Kategori</th>
                <th>Prioritas</th>
                <th>Tanggal</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.announcements.map((a, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${a.title}</strong><br><small style="color:#64748B;">${a.details ? a.details.substring(0, 70) + '...' : ''}</small></td>
                  <td><span class="badge badge-info">${a.category}</span></td>
                  <td>
                    <span class="badge ${a.status === 'Penting' ? 'badge-danger' : (a.status === 'Agenda' ? 'badge-info' : 'badge-warning')}">${a.status}</span>
                  </td>
                  <td>${a.date}</td>
                  <td style="text-align:right;">
                    <button class="btn btn-secondary" onclick="deletePengumuman(${a.id})" style="padding:4px 8px; font-size:0.75rem; color:var(--color-danger);"><i class="fas fa-trash-alt"></i> Hapus</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function showAddPengumumanModal() {
  const html = `
    <div class="modal-backdrop show" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width:640px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-bullhorn" style="color:var(--color-gold);"></i> Tambah Pengumuman Baru</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitNewPengumuman();" style="padding:24px; max-height:80vh; overflow-y:auto;">
          <div class="form-group">
            <label class="form-label">Judul Pengumuman *</label>
            <input type="text" id="new-peng-title" required placeholder="Contoh: Jadwal Posyandu Balita Bulan Desember" class="form-control">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Kategori *</label>
              <select id="new-peng-category" class="form-control">
                <option value="Pelayanan Kependudukan">Pelayanan Kependudukan</option>
                <option value="Lingkungan">Lingkungan</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Pemberitahuan Umum">Pemberitahuan Umum</option>
                <option value="Keagamaan">Keagamaan</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Tingkat Prioritas *</label>
              <select id="new-peng-status" class="form-control">
                <option value="Himbauan">Himbauan</option>
                <option value="Penting">Penting</option>
                <option value="Agenda">Agenda</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Isi Detail Pengumuman *</label>
            <textarea id="new-peng-details" rows="4" required placeholder="Jelaskan isi pengumuman secara lengkap..." class="form-control"></textarea>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Terbitkan Pengumuman</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitNewPengumuman() {
  const title = document.getElementById('new-peng-title').value;
  const category = document.getElementById('new-peng-category').value;
  const status = document.getElementById('new-peng-status').value;
  const details = document.getElementById('new-peng-details').value;
  
  const newId = appData.announcements.length > 0 ? Math.max(...appData.announcements.map(a => a.id)) + 1 : 1;
  const today = new Date();
  const dateStr = `${today.getDate()} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][today.getMonth()]} ${today.getFullYear()}`;
  
  appData.announcements.unshift({
    id: newId,
    title: title,
    category: category,
    date: dateStr,
    status: status,
    details: details
  });
  
  closeModal();
  alert(`Pengumuman "${title}" berhasil diterbitkan!`);
  renderCurrentView();
}

function deletePengumuman(id) {
  if (confirm('Yakin ingin menghapus pengumuman ini?')) {
    appData.announcements = appData.announcements.filter(a => a.id !== id);
    renderCurrentView();
    alert('Pengumuman berhasil dihapus.');
  }
}

// =====================================================
// MANAJEMEN AGENDA (CRUD Fungsional)
// =====================================================
function renderAdminAgendaView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Agenda Kegiatan</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Kelola jadwal posyandu, sosialisasi, pengajian, senam, dan kegiatan masyarakat lainnya.</p>
      </div>
      <div>
        <button class="btn btn-primary" onclick="showAddAgendaModal()"><i class="fas fa-plus"></i> Tambah Agenda</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <span style="font-weight:700; color:var(--color-navy);"><i class="far fa-calendar-alt"></i> Total ${appData.agendas.length} Agenda Terdaftar</span>
        <button class="btn btn-secondary" onclick="navigateTo('agenda')" style="font-size:0.8rem; padding:6px 12px;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kegiatan</th>
                <th>Kategori</th>
                <th>Tanggal & Waktu</th>
                <th>Lokasi</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.agendas.map((ag, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${ag.title}</strong><br><small style="color:#64748B;">Oleh: ${ag.organizer}</small></td>
                  <td><span class="badge badge-info">${ag.category}</span></td>
                  <td><small>${ag.date}<br>${ag.time}</small></td>
                  <td><small>${ag.location}</small></td>
                  <td style="text-align:right;">
                    <button class="btn btn-secondary" onclick="deleteAgenda(${ag.id})" style="padding:4px 8px; font-size:0.75rem; color:var(--color-danger);"><i class="fas fa-trash-alt"></i> Hapus</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function showAddAgendaModal() {
  const html = `
    <div class="modal-backdrop show" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width:680px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="far fa-calendar-alt" style="color:var(--color-gold);"></i> Tambah Agenda Kegiatan</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitNewAgenda();" style="padding:24px; max-height:80vh; overflow-y:auto;">
          <div class="form-group">
            <label class="form-label">Nama Kegiatan *</label>
            <input type="text" id="new-agenda-title" required placeholder="Contoh: Kerja Bakti Bersih Saluran Air" class="form-control">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Kategori *</label>
              <select id="new-agenda-category" class="form-control">
                <option value="Kesehatan">Kesehatan</option>
                <option value="Lingkungan">Lingkungan</option>
                <option value="Keagamaan">Keagamaan</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Pemberdayaan">Pemberdayaan</option>
                <option value="Pemerintahan">Pemerintahan</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Penyelenggara *</label>
              <input type="text" id="new-agenda-organizer" required placeholder="Contoh: Karang Taruna" class="form-control">
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Tanggal Pelaksanaan *</label>
              <input type="text" id="new-agenda-date" required placeholder="Contoh: 15 Des 2026" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label">Waktu Pelaksanaan *</label>
              <input type="text" id="new-agenda-time" required placeholder="Contoh: 08.00 - 12.00 WIB" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Lokasi Kegiatan *</label>
            <input type="text" id="new-agenda-location" required placeholder="Contoh: Balai RW 02 Kelurahan Tambangan" class="form-control">
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Simpan Agenda</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitNewAgenda() {
  const title = document.getElementById('new-agenda-title').value;
  const category = document.getElementById('new-agenda-category').value;
  const organizer = document.getElementById('new-agenda-organizer').value;
  const date = document.getElementById('new-agenda-date').value;
  const time = document.getElementById('new-agenda-time').value;
  const location = document.getElementById('new-agenda-location').value;
  
  const newId = appData.agendas.length > 0 ? Math.max(...appData.agendas.map(a => a.id)) + 1 : 1;
  
  appData.agendas.unshift({
    id: newId,
    title: title,
    category: category,
    organizer: organizer,
    date: date,
    time: time,
    location: location,
    image: 'assets/img/gotong_royong.jpg',
    status: 'Akan Datang'
  });
  
  closeModal();
  alert(`Agenda "${title}" berhasil ditambahkan!`);
  renderCurrentView();
}

function deleteAgenda(id) {
  if (confirm('Yakin ingin menghapus agenda ini?')) {
    appData.agendas = appData.agendas.filter(a => a.id !== id);
    renderCurrentView();
    alert('Agenda berhasil dihapus.');
  }
}

// =====================================================
// MANAJEMEN GALERI (CRUD Fungsional)
// =====================================================
function renderAdminGaleriView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Galeri Dokumentasi</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Kelola foto kegiatan gotong royong, posyandu, keagamaan, dan dokumentasi kegiatan lainnya.</p>
      </div>
      <div>
        <button class="btn btn-primary" onclick="showAddGaleriModal()"><i class="fas fa-plus"></i> Tambah Foto</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <span style="font-weight:700; color:var(--color-navy);"><i class="fas fa-images"></i> Total ${appData.gallery.length} Foto Dokumentasi</span>
        <button class="btn btn-secondary" onclick="navigateTo('galeri')" style="font-size:0.8rem; padding:6px 12px;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
      <div class="admin-card-body">
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:16px;">
          ${appData.gallery.map(g => `
            <div style="position:relative; border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--color-border);">
              <img src="${g.image}" alt="${g.title}" style="width:100%; height:140px; object-fit:cover;">
              <div style="padding:10px;">
                <div style="font-size:0.82rem; font-weight:700; color:var(--color-navy); margin-bottom:4px;">${g.title}</div>
                <span class="badge badge-info" style="font-size:0.68rem;">${g.tag}</span>
              </div>
              <button onclick="deleteGaleri(${g.id})" style="position:absolute; top:6px; right:6px; background:rgba(239,68,68,0.9); color:#fff; border:none; border-radius:50%; width:26px; height:26px; cursor:pointer; font-size:0.7rem;" title="Hapus">
                <i class="fas fa-times"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function showAddGaleriModal() {
  const html = `
    <div class="modal-backdrop show" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width:520px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-images" style="color:var(--color-gold);"></i> Tambah Foto Galeri</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitNewGaleri();" style="padding:24px;">
          <div class="form-group">
            <label class="form-label">Judul / Keterangan Foto *</label>
            <input type="text" id="new-galeri-title" required placeholder="Contoh: Kerja Bakti Lingkungan RW 04" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Kategori / Tag *</label>
            <select id="new-galeri-tag" class="form-control">
              <option value="Kegiatan Lingkungan">Kegiatan Lingkungan</option>
              <option value="Pemerintahan">Pemerintahan</option>
              <option value="Kesehatan">Kesehatan</option>
              <option value="Pemberdayaan UMKM">Pemberdayaan UMKM</option>
              <option value="Olahraga & Komunitas">Olahraga & Komunitas</option>
              <option value="Pendidikan & Keagamaan">Pendidikan & Keagamaan</option>
            </select>
          </div>
          <div style="background:#F8FAFC; padding:14px; border-radius:8px; border:1px dashed var(--color-border); margin-bottom:16px; text-align:center;">
            <i class="fas fa-image fa-2x" style="color:#94A3B8; margin-bottom:8px;"></i>
            <p style="font-size:0.82rem; color:#64748B; margin:0;">Foto akan menggunakan gambar default dari galeri. Upload foto kustom akan tersedia saat integrasi hosting.</p>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Simpan Foto</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitNewGaleri() {
  const title = document.getElementById('new-galeri-title').value;
  const tag = document.getElementById('new-galeri-tag').value;
  
  const defaultImages = ['assets/img/gotong_royong.jpg', 'assets/img/musrenbang.jpg', 'assets/img/sosial_kegiatan.jpg', 'assets/img/posyandu.jpg'];
  const newId = appData.gallery.length > 0 ? Math.max(...appData.gallery.map(g => g.id)) + 1 : 1;
  
  appData.gallery.unshift({
    id: newId,
    title: title,
    tag: tag,
    image: defaultImages[Math.floor(Math.random() * defaultImages.length)]
  });
  
  closeModal();
  alert(`Foto "${title}" berhasil ditambahkan ke galeri!`);
  renderCurrentView();
}

function deleteGaleri(id) {
  if (confirm('Yakin ingin menghapus foto ini dari galeri?')) {
    appData.gallery = appData.gallery.filter(g => g.id !== id);
    renderCurrentView();
    alert('Foto berhasil dihapus dari galeri.');
  }
}

// =====================================================
// MANAJEMEN UMKM di Admin (Enhanced)
// =====================================================
function renderAdminUmkmManagementView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Direktori UMKM Tambangan</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Kelola profil usaha warga, perbarui daftar menu produk, link Google Maps, serta barcode digital.</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-gold" onclick="showAddUmkmModal()" style="font-size:0.85rem;"><i class="fas fa-plus"></i> + Input Data UMKM Baru</button>
        <button class="btn btn-secondary" onclick="navigateTo('umkm')" style="font-size:0.82rem;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <span style="font-weight:700; color:var(--color-navy);"><i class="fas fa-store"></i> Total ${appData.umkm.length} UMKM Terdaftar</span>
        <span class="badge badge-success"><i class="fas fa-database"></i> Data tersimpan di LocalStorage</span>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Usaha</th>
                <th>Kategori</th>
                <th>Pemilik</th>
                <th>Alamat & Lokasi Maps</th>
                <th>Menu / Barcode</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.umkm.map((p, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${p.name}</strong></td>
                  <td><span class="badge badge-gold">${p.category}</span></td>
                  <td>${p.owner}</td>
                  <td>
                    <small style="display:block; max-width:200px; color:#475569;">${p.address}</small>
                    <a href="${p.mapsUrl || '#'}" target="_blank" style="color:var(--color-blue-support); font-size:0.75rem; font-weight:700;"><i class="fas fa-map-marked-alt"></i> Cek Maps</a>
                  </td>
                  <td>
                    <span class="badge badge-info"><i class="fas fa-qrcode"></i> ${(p.products && p.products.length) || 0} Menu</span>
                  </td>
                  <td style="text-align:right;">
                    <button class="btn btn-primary" onclick="navigateTo('detail_umkm', ${p.id})" style="padding:4px 8px; font-size:0.75rem;" title="Lihat Halaman UMKM">
                      <i class="fas fa-eye"></i> Lihat
                    </button>
                    <button class="btn btn-secondary" onclick="showEditUmkmModal(${p.id})" style="padding:4px 8px; font-size:0.75rem;" title="Edit Data">
                      <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-secondary" onclick="deleteUmkm(${p.id})" style="padding:4px 8px; font-size:0.75rem; color:var(--color-danger);" title="Hapus Data">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function showEditUmkmModal(id) {
  const p = appData.umkm.find(u => u.id === id);
  if (!p) return;
  
  const productsText = (p.products || []).map(pr => `${pr.name} - ${pr.price}`).join('\n');
  
  const html = `
    <div class="modal-backdrop show" onclick="if(event.target===this) closeModal()">
      <div class="modal-box" style="max-width:680px;">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-edit" style="color:var(--color-gold);"></i> Edit Data UMKM: ${p.name}</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); submitEditUmkm(${p.id});" style="padding:24px; max-height:80vh; overflow-y:auto;">
          <div class="form-group">
            <label class="form-label">Nama Usaha / Brand UMKM *</label>
            <input type="text" id="edit-umkm-name" required value="${p.name}" class="form-control">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Kategori Usaha *</label>
              <select id="edit-umkm-category" class="form-control">
                ${['Kuliner & Minuman','Makanan Ringan','Kriya & Kerajinan','Jasa & Perdagangan','Pertanian & Olahan'].map(c => 
                  `<option value="${c}" ${p.category === c ? 'selected' : ''}>${c}</option>`
                ).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Nama Pemilik Usaha *</label>
              <input type="text" id="edit-umkm-owner" required value="${p.owner}" class="form-control">
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
            <div class="form-group">
              <label class="form-label">Nomor WhatsApp *</label>
              <input type="text" id="edit-umkm-phone" required value="${p.phone}" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label">Jam Operasional</label>
              <input type="text" id="edit-umkm-hours" value="${p.operationalHours || ''}" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Alamat Lengkap *</label>
            <input type="text" id="edit-umkm-address" required value="${p.address}" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Link Google Maps *</label>
            <input type="url" id="edit-umkm-maps" required value="${p.mapsUrl}" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Deskripsi Usaha *</label>
            <textarea id="edit-umkm-desc" rows="2" required class="form-control">${p.desc}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Daftar Menu & Produk (Satu per baris: Nama - Harga)</label>
            <textarea id="edit-umkm-products" rows="4" class="form-control">${productsText}</textarea>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function submitEditUmkm(id) {
  const p = appData.umkm.find(u => u.id === id);
  if (!p) return;
  
  p.name = document.getElementById('edit-umkm-name').value;
  p.category = document.getElementById('edit-umkm-category').value;
  p.owner = document.getElementById('edit-umkm-owner').value;
  p.phone = document.getElementById('edit-umkm-phone').value;
  p.contact = `${p.phone} (Telah Disetujui Pemilik)`;
  p.operationalHours = document.getElementById('edit-umkm-hours').value || 'Setiap Hari 08.00 - 17.00 WIB';
  p.address = document.getElementById('edit-umkm-address').value;
  p.mapsUrl = document.getElementById('edit-umkm-maps').value;
  p.desc = document.getElementById('edit-umkm-desc').value;
  
  const rawProducts = document.getElementById('edit-umkm-products').value;
  p.products = rawProducts.split('\n').filter(line => line.trim()).map(line => {
    const parts = line.split('-');
    return {
      name: parts[0]?.trim() || line.trim(),
      price: parts[1]?.trim() || 'Hubungi Penjual',
      desc: 'Produk olahan lokal Kelurahan Tambangan'
    };
  });
  
  saveUmkmToStorage(appData.umkm);
  closeModal();
  alert(`Data UMKM "${p.name}" berhasil diperbarui!`);
  renderCurrentView();
}

function deleteUmkm(id) {
  if (confirm('Apakah Anda yakin ingin menghapus data UMKM ini?')) {
    appData.umkm = appData.umkm.filter(u => u.id !== id);
    saveUmkmToStorage(appData.umkm);
    renderCurrentView();
    alert('Data UMKM berhasil dihapus.');
  }
}

// =====================================================
// Generic CRUD View (for Layanan & Profil)
// =====================================================
function renderAdminCrudView(entityTitle, dataset) {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Kelola Data: ${entityTitle}</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Manajemen informasi ${entityTitle} di portal Kelurahan Tambangan.</p>
      </div>
      <div>
        <span class="badge badge-demo" style="padding:8px 14px;"><i class="fas fa-info-circle"></i> Data bawaan sistem — editable saat integrasi hosting</span>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <input type="text" placeholder="Pencarian ${entityTitle}..." class="form-control" style="font-size:0.85rem; padding:8px 12px; max-width:360px;">
        <button class="btn btn-secondary" onclick="navigateTo('layanan')" style="font-size:0.8rem; padding:8px 14px;"><i class="fas fa-eye"></i> Lihat di Website</button>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul / Entitas</th>
                <th>Kategori</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${dataset.map((row, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${row.title || row.name}</strong></td>
                  <td><span class="badge badge-info">${row.category || row.type || row.code || 'Umum'}</span></td>
                  <td><span class="badge badge-success"><i class="fas fa-globe"></i> Terbit (Live)</span></td>
                  <td>
                    <span class="badge badge-demo">Data Bawaan</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminWorkflowReviewView() {
  return renderWorkflowDiagramView();
}

function renderAdminSettingsView() {
  return `
    <div style="margin-bottom:24px;">
      <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Pengaturan Website Kelurahan Tambangan</h1>
      <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Konfigurasi identitas resmi, jam pelayanan loket, dan tautan media publikasi kelurahan.</p>
    </div>

    <div class="admin-card" style="padding:28px;">
      <form onsubmit="event.preventDefault(); alert('Pengaturan konfigurasi berhasil disimpan.');">
        <div class="form-group">
          <label class="form-label">Nama Wilayah Kelurahan</label>
          <input type="text" value="Kelurahan Tambangan" class="form-control" readonly>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div class="form-group">
            <label class="form-label">Kecamatan</label>
            <input type="text" value="Mijen" class="form-control" readonly>
          </div>
          <div class="form-group">
            <label class="form-label">Kota / Daerah</label>
            <input type="text" value="Kota Semarang, Jawa Tengah" class="form-control" readonly>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Program Kolaborasi Akademik</label>
          <input type="text" value="KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang" class="form-control" readonly>
        </div>
        <div class="form-group">
          <label class="form-label">Jam Operasional Pelayanan</label>
          <input type="text" value="Senin - Kamis: 08.00 - 15.30 WIB | Jumat: 08.00 - 14.30 WIB" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Simpan Pengaturan</button>
      </form>
    </div>
  `;
}

function renderAdminActivityView() {
  return `
    <div style="margin-bottom:24px;">
      <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Log Audit & Aktivitas Pengguna</h1>
      <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Pencatatan riwayat perubahan data demi keamanan dan akuntabilitas tata kelola sistem.</p>
    </div>

    <div class="admin-card" style="padding:24px;">
      <div style="display:flex; flex-direction:column; gap:14px; font-size:0.86rem;">
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="width:8px; height:8px; border-radius:50%; background:var(--color-success);"></span>
          <span style="color:#64748B;">Hari Ini 09:15 WIB</span>
          <div><strong>Operator Kelurahan</strong> memperbarui dokumen persyaratan <em>Surat Keterangan Usaha (SKU)</em>.</div>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="width:8px; height:8px; border-radius:50%; background:var(--color-blue-support);"></span>
          <span style="color:#64748B;">Kemarin 14:30 WIB</span>
          <div><strong>Super Admin</strong> menyetujui artikel warta: <em>Musrenbang Kelurahan Tambangan 2027</em>.</div>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="width:8px; height:8px; border-radius:50%; background:var(--color-gold);"></span>
          <span style="color:#64748B;">17 Nov 11:20 WIB</span>
          <div><strong>Fajar Nugraha (Karang Taruna)</strong> mengunggah 4 foto dokumentasi kerja bakti saluran air.</div>
        </div>
      </div>
    </div>
  `;
}
