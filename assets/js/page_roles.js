// User Management, 4 Roles & Permission Matrix, and Workflow Diagram for Tambangan

function renderAdminUsersView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Akun Pengguna Kelurahan</h1>
        <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Daftar akun pengelola sistem, penetapan role, dan pembatasan akses operator dan kontributor Tambangan.</p>
      </div>
      <div>
        <button class="btn btn-primary" onclick="showAddUserModal()"><i class="fas fa-user-plus"></i> Tambah Akun Baru</button>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-card-header" style="background:#F8FAFC;">
        <input type="text" placeholder="Cari nama, email, atau username..." class="form-control" style="font-size:0.85rem; padding:8px 12px; max-width:360px;">
        <span class="badge badge-demo">Simulasi Frontend Terstruktur</span>
      </div>

      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Pengguna</th>
                <th>Username / Email</th>
                <th>Role Akses</th>
                <th>Status Akun</th>
                <th>Tanggal Bergabung</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${appData.users.map((u, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${u.name}</strong></td>
                  <td><code>${u.username}</code></td>
                  <td>
                    ${u.role === 'Super Admin' ? '<span class="badge badge-gold"><i class="fas fa-shield-alt"></i> Super Admin</span>' : ''}
                    ${u.role === 'Admin / Operator' ? '<span class="badge badge-info"><i class="fas fa-user-tie"></i> Admin / Operator</span>' : ''}
                    ${u.role === 'Kontributor' ? '<span class="badge badge-warning"><i class="fas fa-feather-alt"></i> Kontributor</span>' : ''}
                  </td>
                  <td>
                    ${u.status === 'Aktif' 
                      ? '<span class="badge badge-success"><i class="fas fa-check"></i> Aktif</span>' 
                      : '<span class="badge badge-danger"><i class="fas fa-ban"></i> Nonaktif</span>'}
                  </td>
                  <td>${u.joined}</td>
                  <td style="text-align:right;">
                    <button class="btn btn-secondary" onclick="alert('Mengedit profil akun: ${u.name}');" style="padding:4px 8px; font-size:0.75rem;"><i class="fas fa-edit"></i> Edit</button>
                    ${u.role !== 'Super Admin' ? `
                      <button class="btn btn-secondary" onclick="toggleUserStatus(${u.id})" style="padding:4px 8px; font-size:0.75rem; color:${u.status === 'Aktif' ? 'var(--color-danger)' : 'var(--color-success)'};">
                        ${u.status === 'Aktif' ? '<i class="fas fa-ban"></i> Nonaktifkan' : '<i class="fas fa-check"></i> Aktifkan'}
                      </button>
                    ` : '<small style="color:#94A3B8; margin-left:6px;">Terkunci</small>'}
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

function showAddUserModal() {
  const html = `
    <div class="modal-backdrop show" id="user-modal" onclick="if(event.target===this) closeModal()">
      <div class="modal-box">
        <div style="background:var(--color-navy); color:#fff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.15rem; margin:0; font-weight:700;"><i class="fas fa-user-plus"></i> Tambah Akun Pengguna</h3>
          <button onclick="closeModal()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>
        <form onsubmit="event.preventDefault(); addNewUser();" style="padding:24px;">
          <div class="form-group">
            <label class="form-label">Nama Lengkap Pengguna *</label>
            <input type="text" id="new-user-name" required placeholder="Contoh: Rian Hidayat (Perwakilan RW 05 Tambangan)" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Username / Email Kedinasan *</label>
            <input type="email" id="new-user-email" required placeholder="nama@tambangan.semarangkota.go.id" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Role Akses *</label>
            <select id="new-user-role" class="form-control">
              <option value="Admin / Operator">Admin / Operator Kelurahan</option>
              <option value="Kontributor">Kontributor (Karang Taruna / RW / PKK / KKN)</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Password Awal *</label>
            <input type="password" required value="Tambangan2026!" class="form-control">
            <small style="color:#64748B;">Pengguna wajib mengganti password saat login pertama kali.</small>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">Batal</button>
            <button type="submit" class="btn btn-primary">Simpan Akun</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modal-container').innerHTML = html;
}

function addNewUser() {
  const name = document.getElementById('new-user-name').value;
  const username = document.getElementById('new-user-email').value;
  const role = document.getElementById('new-user-role').value;
  
  appData.users.push({
    id: appData.users.length + 1,
    name: name,
    username: username,
    role: role,
    status: 'Aktif',
    joined: 'Hari Ini'
  });
  closeModal();
  renderCurrentView();
  alert(`Akun untuk "${name}" dengan role "${role}" berhasil ditambahkan ke simulasi data!`);
}

function toggleUserStatus(id) {
  const user = appData.users.find(u => u.id === id);
  if (user) {
    user.status = user.status === 'Aktif' ? 'Nonaktif' : 'Aktif';
    renderCurrentView();
  }
}

function renderAdminRolesView() {
  return `
    <div style="margin-bottom:24px;">
      <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Manajemen Role & Matriks Hak Akses</h1>
      <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Hierarki 4 peran pengguna: batasan wewenang baca, tulis, persetujuan, dan tata kelola akun.</p>
    </div>

    <!-- 4 Role Summary Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:20px; margin-bottom:28px;">
      <div class="admin-card" style="padding:18px; margin-bottom:0; border-top:4px solid var(--color-gold);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:1.05rem; color:var(--color-navy); font-weight:700;">Role 1: Super Admin</h3>
          <span class="badge badge-gold">Tertinggi</span>
        </div>
        <p style="font-size:0.82rem; color:#475569; line-height:1.5; margin-bottom:10px;">
          Mengakses seluruh dashboard, mengelola akun staf, menetapkan role, dan mengelola konfigurasi website Kelurahan Tambangan.
        </p>
        <small style="color:#64748B;">Target: Lurah / Pimpinan Tata Usaha</small>
      </div>

      <div class="admin-card" style="padding:18px; margin-bottom:0; border-top:4px solid var(--color-blue-support);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:1.05rem; color:var(--color-navy); font-weight:700;">Role 2: Admin / Operator</h3>
          <span class="badge badge-info">Pengelola Konten</span>
        </div>
        <p style="font-size:0.82rem; color:#475569; line-height:1.5; margin-bottom:10px;">
          Mengelola berita, pengumuman resmi, agenda kegiatan, direktori UMKM, dan memoderasi usulan konten dari kontributor.
        </p>
        <small style="color:#64748B;">Target: Staf Pelaksana Kelurahan</small>
      </div>

      <div class="admin-card" style="padding:18px; margin-bottom:0; border-top:4px solid var(--color-warning);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:1.05rem; color:var(--color-navy); font-weight:700;">Role 3: Kontributor</h3>
          <span class="badge badge-warning">Mitra Komunitas</span>
        </div>
        <p style="font-size:0.82rem; color:#475569; line-height:1.5; margin-bottom:10px;">
          Mengirim usulan warta lapangan, agenda warga, foto kegiatan, dan informasi UMKM masyarakat melalui alur kurasi.
        </p>
        <small style="color:#64748B;">Target: Karang Taruna, RW/RT, PKK, Tim KKN</small>
      </div>

      <div class="admin-card" style="padding:18px; margin-bottom:0; border-top:4px solid var(--color-neutral-gray);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:1.05rem; color:var(--color-navy); font-weight:700;">Role 4: Masyarakat Umum</h3>
          <span class="badge badge-demo">Pengunjung Publik</span>
        </div>
        <p style="font-size:0.82rem; color:#475569; line-height:1.5; margin-bottom:10px;">
          Mengakses seluruh kanal informasi resmi secara terbuka tanpa perlu login, mengunduh edaran, dan mengirim aspirasi.
        </p>
        <small style="color:#64748B;">Target: Warga Tambangan & Publik</small>
      </div>
    </div>

    <!-- Matriks Hak Akses -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title"><i class="fas fa-th" style="color:var(--color-gold); margin-right:8px;"></i> Matriks Hak Akses & Kewenangan Fitur</h3>
      </div>
      <div class="admin-card-body" style="padding:0;">
        <div class="data-table-wrapper">
          <table class="data-table" style="text-align:center;">
            <thead>
              <tr style="text-align:left;">
                <th style="width:30%;">Modul Fitur</th>
                <th style="width:17%; text-align:center;">Super Admin</th>
                <th style="width:17%; text-align:center;">Admin / Operator</th>
                <th style="width:18%; text-align:center;">Kontributor</th>
                <th style="width:18%; text-align:center;">Masyarakat</th>
              </tr>
            </thead>
            <tbody style="text-align:center;">
              <tr style="text-align:left;">
                <td><strong>Membaca Website Publik & Unduh Edaran</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Penuh</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Penuh</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Penuh</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Penuh (Tanpa Login)</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Mengirim Formulir Aspirasi Warga</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya (Kanal Publik)</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Akses Dashboard Admin Staf</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Seluruh Menu</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Menu Konten</span></td>
                <td><span class="badge badge-warning"><i class="fas fa-check"></i> Portal Usulan</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Ditolak</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Mengajukan Berita, Agenda, UMKM & Foto</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Langsung Tayang</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Langsung Tayang</span></td>
                <td><span class="badge badge-warning"><i class="fas fa-clock"></i> Masuk Moderasi</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Ditolak</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Meninjau, Menyetujui & Menolak Konten</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya</span></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Tugas Utama</span></td>
                <td><span class="badge badge-info"><i class="fas fa-eye"></i> Pantau Status</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Ditolak</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Manajemen Akun Pengguna Staf</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Ya</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
              </tr>
              <tr style="text-align:left;">
                <td><strong>Konfigurasi Role & Pengaturan Sistem</strong></td>
                <td><span class="badge badge-success"><i class="fas fa-check"></i> Hak Mutlak</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
                <td><span class="badge badge-danger"><i class="fas fa-times"></i> Dilarang</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderWorkflowDiagramView() {
  return `
    <div style="margin-bottom:24px;">
      <h1 style="font-size:1.55rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Alur Kerja Kolaborasi Antar-Role (Content Lifecycle)</h1>
      <p style="color:var(--color-neutral-gray); font-size:0.88rem;">Siklus kurasi pengajuan informasi dari kontributor masyarakat hingga terbit resmi di portal Tambangan.</p>
    </div>

    <div class="admin-card" style="padding:28px;">
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
        <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:12px; padding:18px;">
          <span style="background:var(--color-gold); color:var(--color-navy); width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-bottom:10px;">1</span>
          <h4 style="font-size:0.95rem; color:var(--color-navy); font-weight:700; margin-bottom:4px;">1. Pengusulan Konten</h4>
          <span class="badge badge-warning" style="margin-bottom:6px;">Kontributor</span>
          <p style="font-size:0.8rem; color:#64748B; margin:0; line-height:1.5;">Karang Taruna / Ketua RW / KKN Unwahas mengunggah naskah berita, agenda, atau foto kegiatan.</p>
        </div>

        <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:12px; padding:18px;">
          <span style="background:var(--color-blue-support); color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-bottom:10px;">2</span>
          <h4 style="font-size:0.95rem; color:var(--color-navy); font-weight:700; margin-bottom:4px;">2. Masuk Antrian Review</h4>
          <span class="badge badge-warning" style="margin-bottom:6px;">Menunggu Pemeriksaan</span>
          <p style="font-size:0.8rem; color:#64748B; margin:0; line-height:1.5;">Sistem memberi notifikasi kepada Operator Kelurahan Tambangan bahwa ada berkas usulan baru.</p>
        </div>

        <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:12px; padding:18px;">
          <span style="background:var(--color-blue-support); color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-bottom:10px;">3</span>
          <h4 style="font-size:0.95rem; color:var(--color-navy); font-weight:700; margin-bottom:4px;">3. Kurasi & Verifikasi</h4>
          <span class="badge badge-info" style="margin-bottom:6px;">Admin / Operator</span>
          <p style="font-size:0.8rem; color:#64748B; margin:0; line-height:1.5;">Admin memeriksa ejaan, kebenaran informasi, kesesuaian norma, dan kelayakan foto.</p>
        </div>

        <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:12px; padding:18px;">
          <span style="background:var(--color-success); color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-bottom:10px;">4</span>
          <h4 style="font-size:0.95rem; color:var(--color-navy); font-weight:700; margin-bottom:4px;">4. Publikasi Otomatis</h4>
          <span class="badge badge-success" style="margin-bottom:6px;">Disetujui (Tayang)</span>
          <p style="font-size:0.8rem; color:#64748B; margin:0; line-height:1.5;">Konten langsung tayang pada halaman publik berita, galeri, agenda, atau etalase UMKM.</p>
        </div>

        <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:12px; padding:18px;">
          <span style="background:var(--color-navy); color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-bottom:10px;">5</span>
          <h4 style="font-size:0.95rem; color:var(--color-navy); font-weight:700; margin-bottom:4px;">5. Konsumsi Warga</h4>
          <span class="badge badge-info" style="margin-bottom:6px;">Masyarakat</span>
          <p style="font-size:0.8rem; color:#64748B; margin:0; line-height:1.5;">Warga dapat membaca berita, menyimpan agenda kegiatan, dan mengakses produk UMKM.</p>
        </div>
      </div>
    </div>
  `;
}
