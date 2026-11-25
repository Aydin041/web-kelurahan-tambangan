// Pages: Pengumuman, Agenda Kegiatan, Direktori UMKM, Detail UMKM Interaktif, Lingkungan, Kesehatan, Pendidikan, Olahraga, Galeri, Kontak

function renderPengumumanView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Papan Informasi Resmi</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Pengumuman Resmi Kelurahan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Pemberitahuan edaran resmi, jadwal pelayanan terpadu jemput bola, dan himbauan ketertiban lingkungan Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:flex; flex-direction:column; gap:20px;">
        ${appData.announcements.map(a => `
          <div class="admin-card" style="padding:24px; border-left:5px solid ${a.status === 'Penting' ? 'var(--color-danger)' : (a.status === 'Agenda' ? 'var(--color-blue-support)' : 'var(--color-gold)')};">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:10px;">
              <div>
                <span class="badge ${a.status === 'Penting' ? 'badge-danger' : (a.status === 'Agenda' ? 'badge-info' : 'badge-warning')}" style="margin-right:8px;">${a.status}</span>
                <span class="badge badge-info">${a.category}</span>
              </div>
              <small style="color:#64748B;"><i class="far fa-calendar-alt"></i> ${a.date}</small>
            </div>
            <h3 style="font-size:1.2rem; font-weight:700; color:var(--color-navy); margin-bottom:8px;">${a.title}</h3>
            <p style="color:#475569; font-size:0.92rem; line-height:1.6; margin-bottom:14px;">${a.details}</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <small style="color:#94A3B8;"><i class="fas fa-shield-alt"></i> Diterbitkan oleh Sekretariat Kelurahan Tambangan</small>
              <button class="btn btn-secondary" onclick="alert('Mengunduh dokumen surat edaran resmi PDF...');" style="padding:6px 12px; font-size:0.8rem;">
                <i class="fas fa-file-pdf" style="color:var(--color-danger);"></i> Unduh Surat Edaran (.PDF)
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAgendaView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Kalender Komunitas</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Agenda Kegiatan Masyarakat Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Jadwal kegiatan posyandu balita, sosialisasi kesehatan, pengajian warga, senam kebugaran, dan kegiatan gotong royong di Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:24px;">
        ${appData.agendas.map(ag => `
          <div class="admin-card" style="margin-bottom:0; display:flex; flex-direction:column;">
            <img src="${ag.image}" alt="${ag.title}" style="width:100%; height:180px; object-fit:cover;">
            <div style="padding:22px; flex-grow:1; display:flex; flex-direction:column;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="badge badge-info">${ag.category}</span>
                <span class="badge badge-success"><i class="fas fa-clock"></i> ${ag.status}</span>
              </div>
              <h3 style="font-size:1.15rem; font-weight:700; color:var(--color-navy); margin-bottom:10px;">${ag.title}</h3>
              
              <div style="font-size:0.85rem; color:#475569; display:flex; flex-direction:column; gap:6px; margin-bottom:16px; flex-grow:1;">
                <div><i class="far fa-calendar-alt" style="color:var(--color-gold); width:18px;"></i> <strong>Waktu:</strong> ${ag.date} (${ag.time})</div>
                <div><i class="fas fa-map-marker-alt" style="color:var(--color-danger); width:18px;"></i> <strong>Lokasi:</strong> ${ag.location}</div>
                <div><i class="fas fa-users" style="color:var(--color-blue-support); width:18px;"></i> <strong>Penyelenggara:</strong> ${ag.organizer}</div>
              </div>

              <button class="btn btn-secondary" onclick="alert('Agenda ditambahkan ke kalender pengingat Anda: ${ag.title}');" style="width:100%; font-size:0.82rem;">
                <i class="far fa-bell"></i> Ingatkan Saya / Simpan Agenda
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 1. Direktori Utama UMKM dengan Tombol Buka Halaman UMKM & Input Data
function renderUmkmView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
          <div>
            <span class="badge badge-gold" style="margin-bottom:12px;">Pemberdayaan Ekonomi Lokal</span>
            <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Direktori UMKM Kelurahan Tambangan</h1>
            <p style="color:#CBD5E1; max-width:650px;">Mengenal dan mendukung produk olahan pangan, kerajinan tangan, dan potensi usaha mikro warga masyarakat Tambangan, Kecamatan Mijen.</p>
          </div>
          <div>
            <button class="btn btn-gold" onclick="showAddUmkmModal()" style="font-size:0.88rem; padding:10px 18px; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
              <i class="fas fa-plus-circle"></i> + Input Data UMKM Baru (Admin)
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container section">
      <div style="background:#FFFBEB; border:1px solid #FDE68A; padding:14px 20px; border-radius:var(--radius-md); margin-bottom:30px; display:flex; gap:12px; align-items:center;">
        <i class="fas fa-store-alt fa-lg" style="color:#D97706;"></i>
        <div style="font-size:0.85rem; color:#92400E;">
          <strong>Pemberdayaan Digital:</strong> Klik pada kartu UMKM di bawah untuk membuka <strong>Halaman Khusus Profil Usaha</strong> yang dilengkapi <strong>Daftar Menu Makanan/Produk</strong>, <strong>Barcode / QR Code Menu</strong>, serta <strong>Tautan Langsung Navigasi Google Maps</strong>.
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:28px;">
        ${appData.umkm.map(p => `
          <div class="admin-card" style="margin-bottom:0; display:flex; flex-direction:column; border-top:4px solid var(--color-gold);">
            <div style="position:relative; cursor:pointer;" onclick="navigateTo('detail_umkm', ${p.id})">
              <img src="${p.image}" alt="${p.name}" style="width:100%; height:210px; object-fit:cover; display:block;">
              <span class="badge badge-gold" style="position:absolute; top:12px; left:12px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">${p.category}</span>
              <span class="badge badge-info" style="position:absolute; bottom:12px; right:12px; background:rgba(10,20,49,0.85); color:#fff; backdrop-filter:blur(4px);">
                <i class="fas fa-qrcode"></i> Ada Barcode Menu
              </span>
            </div>
            
            <div style="padding:22px; flex-grow:1; display:flex; flex-direction:column;">
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--color-navy); margin-bottom:6px; cursor:pointer; line-height:1.3;" onclick="navigateTo('detail_umkm', ${p.id})">
                ${p.name}
              </h3>
              <p style="font-size:0.86rem; color:#64748B; margin-bottom:14px; line-height:1.5; flex-grow:1;">${p.desc}</p>
              
              <div style="border-top:1px solid #F1F5F9; padding-top:12px; font-size:0.82rem; color:#475569; margin-bottom:16px;">
                <div style="margin-bottom:4px;"><i class="fas fa-user-circle" style="color:var(--color-blue-support); width:18px;"></i> Pemilik: <strong>${p.owner}</strong></div>
                
                <!-- Lokasi yang dapat diklik langsung ke Google Maps -->
                <div style="margin-bottom:4px;">
                  <i class="fas fa-map-marker-alt" style="color:var(--color-danger); width:18px;"></i> 
                  Lokasi: <a href="${p.mapsUrl || 'https://maps.google.com/?q=Tambangan+Mijen+Semarang'}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue-support); font-weight:700; text-decoration:underline;" title="Buka Titik Lokasi di Google Maps">
                    ${p.address} <i class="fas fa-external-link-alt" style="font-size:0.7rem;"></i>
                  </a>
                </div>

                <div style="margin-top:4px;"><i class="fab fa-whatsapp" style="color:var(--color-success); width:18px;"></i> WhatsApp: <strong>${p.contact}</strong></div>
              </div>

              <!-- Dua Tombol Aksi: Buka Detail Halaman UMKM & Pesan WA -->
              <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:8px;">
                <button class="btn btn-primary" onclick="navigateTo('detail_umkm', ${p.id})" style="font-size:0.82rem; padding:8px 10px;">
                  <i class="fas fa-store"></i> Buka Menu & QR
                </button>
                <a href="https://wa.me/${p.phone || '6281234567890'}?text=Halo%20${encodeURIComponent(p.owner)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}%20di%20Website%20Kelurahan%20Tambangan." target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size:0.82rem; padding:8px 10px; color:#15803D; border-color:#86EFAC;">
                  <i class="fab fa-whatsapp"></i> Chat WA
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 2. Halaman Khusus Detail UMKM (Tampilan Showcase Lengkap dengan Barcode & Lokasi)
function renderDetailUmkmView() {
  const umkmId = appData.selectedUmkmId || 1;
  const p = appData.umkm.find(item => item.id === umkmId) || appData.umkm[0];
  
  // URL untuk QR Code / Barcode (mengarahkan langsung ke halaman profil & menu ini)
  const currentHost = window.location.origin + window.location.pathname;
  const qrTargetUrl = `${currentHost}#umkm-${p.id}`;
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrTargetUrl)}`;

  return `
    <!-- Header Showcase UMKM -->
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:40px 0;">
      <div class="container">
        <button class="btn btn-outline-white" onclick="navigateTo('umkm')" style="margin-bottom:16px; font-size:0.82rem; padding:6px 14px;">
          <i class="fas fa-arrow-left"></i> Kembali ke Direktori UMKM
        </button>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div>
            <span class="badge badge-gold" style="margin-bottom:8px;">${p.category}</span>
            <h1 style="font-size:2.3rem; font-weight:800; margin-bottom:6px; line-height:1.2;">${p.name}</h1>
            <p style="color:#CBD5E1; margin:0; font-size:0.95rem;">
              <i class="fas fa-user-circle"></i> Pemilik: <strong>${p.owner}</strong> | 
              <i class="fas fa-clock"></i> Jam Buka: <strong>${p.operationalHours || '08.00 - 17.00 WIB'}</strong>
            </p>
          </div>
          <div>
            <a href="${p.mapsUrl || 'https://maps.google.com/?q=Tambangan+Mijen+Semarang'}" target="_blank" rel="noopener noreferrer" class="btn btn-gold" style="font-size:0.88rem;">
              <i class="fas fa-map-marked-alt"></i> Buka Titik di Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Detail UMKM -->
    <div class="container section">
      <div style="display:grid; grid-template-columns:2.3fr 1.2fr; gap:36px; align-items:start;">
        
        <!-- Kolom Kiri: Foto, Cerita Usaha & Daftar Menu Lengkap -->
        <div>
          <!-- Banner Gambar Usaha -->
          <div style="border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-md); margin-bottom:28px;">
            <img src="${p.image}" alt="${p.name}" style="width:100%; height:340px; object-fit:cover; display:block;">
          </div>

          <!-- Tentang Usaha -->
          <div class="admin-card" style="padding:26px; margin-bottom:28px;">
            <h3 style="font-size:1.2rem; color:var(--color-navy); font-weight:700; margin-bottom:12px; border-bottom:2px solid var(--color-soft-blue); padding-bottom:8px;">
              <i class="fas fa-info-circle" style="color:var(--color-gold); margin-right:8px;"></i> Profil & Informasi Usaha
            </h3>
            <p style="color:#334155; line-height:1.75; font-size:0.95rem; margin-bottom:16px;">
              ${p.desc}
            </p>
            <div style="background:#F8FAFC; border:1px solid var(--color-border); border-radius:8px; padding:14px; font-size:0.86rem; color:#475569;">
              <div style="margin-bottom:6px;"><strong style="color:var(--color-navy);"><i class="fas fa-map-pin" style="color:var(--color-danger); width:18px;"></i> Alamat Usaha:</strong> ${p.address}</div>
              <div><strong style="color:var(--color-navy);"><i class="fas fa-shield-alt" style="color:var(--color-success); width:18px;"></i> Status Binaan:</strong> Pelaku Usaha Mikro Binaan Kelurahan Tambangan & KKN Tematik Periode 38 Unwahas</div>
            </div>
          </div>

          <!-- Katalog Produk / Menu Makanan Minuman Yang Dijual -->
          <div class="admin-card" style="padding:26px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:2px solid var(--color-soft-blue); padding-bottom:8px;">
              <h3 style="font-size:1.2rem; color:var(--color-navy); font-weight:700; margin:0;">
                <i class="fas fa-utensils" style="color:var(--color-gold); margin-right:8px;"></i> Daftar Menu & Produk Yang Dijual
              </h3>
              <span class="badge badge-info">${(p.products && p.products.length) || 0} Pilihan</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px;">
              ${(p.products && p.products.length > 0) ? p.products.map(prod => `
                <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; border:1px solid var(--color-border); padding:14px 18px; border-radius:10px; transition:var(--transition);" onmouseover="this.style.borderColor='var(--color-gold)'" onmouseout="this.style.borderColor='var(--color-border)'">
                  <div>
                    <h4 style="font-size:0.98rem; font-weight:700; color:var(--color-navy); margin-bottom:4px;">${prod.name}</h4>
                    <p style="margin:0; font-size:0.82rem; color:#64748B;">${prod.desc || 'Olahan khas berkualitas warga Tambangan'}</p>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:1.05rem; font-weight:800; color:#D97706;">${prod.price}</div>
                    <small style="color:#94A3B8; font-size:0.75rem;">Harga Terjangkau</small>
                  </div>
                </div>
              `).join('') : `
                <p style="color:#64748B; font-size:0.9rem;">Daftar menu sedang diperbarui oleh pemilik usaha.</p>
              `}
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Barcode / QR Code Menu, Lokasi Google Maps & Pemesanan WA -->
        <div>
          <!-- Card QR Code / Barcode Otomatis -->
          <div class="admin-card" style="padding:24px; text-align:center; border-top:4px solid var(--color-gold); margin-bottom:24px;">
            <span class="badge badge-gold" style="margin-bottom:8px;">Barcode Menu Digital</span>
            <h4 style="font-size:1.05rem; font-weight:800; color:var(--color-navy); margin-bottom:4px;">Scan Barcode / QR Code Ini</h4>
            <p style="font-size:0.8rem; color:#64748B; margin-bottom:16px;">Gunakan kamera HP pembeli untuk langsung membuka daftar menu & produk ${p.name}.</p>
            
            <!-- Visual Barcode QR Code -->
            <div style="background:#F8FAFC; border:2px dashed var(--color-gold); border-radius:12px; padding:16px; display:inline-block; margin-bottom:14px; box-shadow:var(--shadow-sm);">
              <img src="${qrCodeApiUrl}" alt="QR Code Menu ${p.name}" style="width:160px; height:160px; display:block; margin:0 auto; border-radius:6px;">
            </div>

            <div style="display:flex; justify-content:center; gap:8px;">
              <button class="btn btn-secondary" onclick="window.print()" style="padding:6px 12px; font-size:0.78rem;">
                <i class="fas fa-print"></i> Cetak QR Menu
              </button>
              <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(window.location.href); alert('Tautan menu UMKM berhasil disalin!');" style="padding:6px 12px; font-size:0.78rem;">
                <i class="fas fa-share-alt"></i> Salin Link
              </button>
            </div>
          </div>

          <!-- Card Lokasi & Google Maps -->
          <div class="admin-card" style="padding:22px; margin-bottom:24px;">
            <h4 style="font-size:1rem; font-weight:700; color:var(--color-navy); margin-bottom:12px;">
              <i class="fas fa-map-marked-alt" style="color:var(--color-danger); margin-right:6px;"></i> Lokasi Usaha di Google Maps
            </h4>
            <p style="font-size:0.84rem; color:#475569; margin-bottom:14px;">${p.address}</p>
            
            <a href="${p.mapsUrl || 'https://maps.google.com/?q=Tambangan+Mijen+Semarang'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%; font-size:0.85rem; margin-bottom:12px;">
              <i class="fas fa-directions"></i> Petunjuk Arah Google Maps
            </a>
            
            <!-- Embed Map Preview -->
            <div style="border-radius:8px; overflow:hidden; border:1px solid var(--color-border); height:160px;">
              <iframe 
                title="Peta Lokasi UMKM"
                src="https://maps.google.com/maps?q=Tambangan+Mijen+Semarang&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

          <!-- Card Pemesanan WhatsApp Langsung -->
          <div class="admin-card" style="padding:22px; background:linear-gradient(135deg, #F0FDF4, #DCFCE7); border:1px solid #86EFAC;">
            <h4 style="font-size:1rem; font-weight:800; color:#14532D; margin-bottom:6px;">
              <i class="fab fa-whatsapp fa-lg" style="color:#16A34A; margin-right:6px;"></i> Pesan Langsung ke Pemilik
            </h4>
            <p style="font-size:0.82rem; color:#166534; margin-bottom:14px;">Ingin pesan makanan/produk atau bertanya ketersediaan stok? Hubungi langsung via WhatsApp.</p>
            
            <a href="https://wa.me/${p.phone || '6281234567890'}?text=Halo%20${encodeURIComponent(p.owner)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}%20di%20Website%20Kelurahan%20Tambangan." target="_blank" rel="noopener noreferrer" class="btn btn-gold" style="width:100%; font-size:0.85rem; background:#16A34A; color:#fff; border:none;">
              <i class="fab fa-whatsapp"></i> Chat WhatsApp Sekarang
            </a>
          </div>

        </div>
      </div>
    </div>
  `;
}

function renderLingkunganView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Edukasi & Tata Kelola Lingkungan</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Kelestarian Lingkungan & Pengelolaan Sampah</h1>
        <p style="color:#CBD5E1; max-width:650px;">Edukasi pemilahan sampah rumah tangga, konsep 3R (Reduce, Reuse, Recycle), dan kegiatan bank sampah di Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:40px; align-items:center; margin-bottom:50px;">
        <div>
          <span class="section-tag">Gerakan Hijau Tambangan</span>
          <h2 class="section-title">Pilahlah Sampah dari Rumah Tangga untuk Tambangan yang Bersih</h2>
          <p style="color:var(--color-neutral-gray); line-height:1.7; margin-bottom:16px;">
            Sebagai wilayah berbukit yang asri di Kecamatan Mijen, menjaga kebersihan saluran drainase dan pekarangan rumah adalah kunci pencegahan bencana genangan air serta perkembangbiakan jentik nyamuk.
          </p>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <span style="background:var(--color-success); color:#fff; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0;">1</span>
              <div>
                <strong style="color:var(--color-navy);">Sampah Organik (Sisa Makanan & Dedaunan):</strong>
                <p style="margin:0; font-size:0.85rem; color:#64748B;">Dapat diolah menjadi pupuk kompos untuk tanaman pekarangan warga.</p>
              </div>
            </div>
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <span style="background:var(--color-gold); color:#fff; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0;">2</span>
              <div>
                <strong style="color:var(--color-navy);">Sampah Anorganik Daur Ulang (Kardus & Plastik):</strong>
                <p style="margin:0; font-size:0.85rem; color:#64748B;">Disalurkan melalui unit Bank Sampah RW untuk bernilai ekonomi.</p>
              </div>
            </div>
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <span style="background:var(--color-danger); color:#fff; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0;">3</span>
              <div>
                <strong style="color:var(--color-navy);">Sampah Residu:</strong>
                <p style="margin:0; font-size:0.85rem; color:#64748B;">Dibuang teratur pada bak sampah untuk diangkut petugas kebersihan ke TPA.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/img/lingkungan_sampah.jpg" alt="Lingkungan Tambangan" style="width:100%; height:340px; object-fit:cover; border-radius:var(--radius-lg); box-shadow:var(--shadow-lg);">
        </div>
      </div>
    </div>
  `;
}

function renderKesehatanView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Layanan Kesehatan Masyarakat</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Kesehatan & Posyandu Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Edukasi pencegahan stunting, pemantauan gizi balita, pencegahan Tuberkulosis (TB), serta jadwal pos pelayanan terpadu lansia.</p>
      </div>
    </div>

    <div class="container section">
      <div style="background:#EFF6FF; border:1px solid #BFDBFE; padding:16px 20px; border-radius:var(--radius-md); margin-bottom:32px;">
        <i class="fas fa-user-shield" style="color:var(--color-blue-support); margin-right:8px;"></i>
        <span style="font-size:0.86rem; color:#1E3A8A;"><strong>Komitmen Privasi Medis:</strong> Portal ini hanya menyajikan edukasi dan jadwal kegiatan umum. Tidak menyimpan rekam medis maupun data identitas pasien.</span>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:26px;">
        <div class="admin-card" style="padding:24px; margin-bottom:0;">
          <img src="assets/img/stunting_posyandu.jpg" alt="Pencegahan Stunting" style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:14px;">
          <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin-bottom:8px;">Edukasi Pencegahan Stunting</h3>
          <p style="font-size:0.85rem; color:#64748B; line-height:1.6; margin-bottom:12px;">
            Pentingnya pemenuhan gizi seimbang pada 1.000 Hari Pertama Kehidupan (HPK) balita. Selalu rutin bawa balita Anda ke Posyandu setiap bulan untuk memantau kurva pertumbuhan.
          </p>
          <span class="badge badge-success">Program Prioritas Kota Semarang</span>
        </div>

        <div class="admin-card" style="padding:24px; margin-bottom:0;">
          <img src="assets/img/tb_health.jpg" alt="Pencegahan TB" style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:14px;">
          <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin-bottom:8px;">Edukasi Pencegahan Tuberkulosis (TB)</h3>
          <p style="font-size:0.85rem; color:#64748B; line-height:1.6; margin-bottom:12px;">
            Kenali gejala batuk lebih dari 2 minggu, demam meriang, dan keringat malam. Segera periksakan diri ke Puskesmas Mijen terdekat. Pengobatan TB sampai tuntas adalah Gratis.
          </p>
          <span class="badge badge-info">Penyuluhan Bersama Puskesmas</span>
        </div>
      </div>
    </div>
  `;
}

function renderPendidikanView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Sosial & Keagamaan</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Pendidikan & Keagamaan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Informasi kegiatan majelis taklim, Taman Pendidikan Al-Qur'an (TPQ), dan kerukunan umat beragama di Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:36px; align-items:center;">
        <div>
          <img src="assets/img/pendidikan_mengaji.jpg" alt="Pendidikan Agama" style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-lg); box-shadow:var(--shadow-md);">
        </div>
        <div>
          <span class="section-tag">Pendidikan Moral & Karakter</span>
          <h2 class="section-title">Menjaga Kerukunan dan Membina Generasi Berakhlak</h2>
          <p style="color:var(--color-neutral-gray); line-height:1.7; margin-bottom:16px;">
            Masyarakat Kelurahan Tambangan memiliki tradisi keagamaan yang kental, aktif dalam kegiatan pengajian rutin warga, santunan sosial, serta pembinaan TPQ bagi anak-anak usia dini.
          </p>
          <div style="background:#F8FAFC; padding:16px; border-radius:8px; border:1px solid var(--color-border); font-size:0.86rem; color:#475569;">
            <i class="fas fa-mosque" style="color:var(--color-blue-support);"></i> Lembaga keagamaan setempat aktif berkolaborasi dengan mahasiswa KKN Tematik Unwahas dalam penguatan literasi mengaji dan pembinaan keislaman inklusif.
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderOlahragaView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Kepemudaan & Kebugaran</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Olahraga & Komunitas Pemuda</h1>
        <p style="color:#CBD5E1; max-width:650px;">Aktivitas Karang Taruna, kegiatan senam sehat ibu-ibu, dan sarana olahraga warga di Kelurahan Tambangan.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:26px;">
        <div class="admin-card" style="padding:24px; margin-bottom:0;">
          <img src="assets/img/futsal_pemuda.jpg" alt="Futsal Pemuda" style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:14px;">
          <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin-bottom:8px;">Karang Taruna Tunas Bhakti</h3>
          <p style="font-size:0.85rem; color:#64748B; line-height:1.6; margin-bottom:12px;">Wadah kepemudaan yang aktif menyelenggarakan turnamen persahabatan futsal, bulu tangkis, dan bakti sosial kepemudaan tingkat RW.</p>
          <span class="badge badge-info">Pemuda Kreatif Tambangan</span>
        </div>

        <div class="admin-card" style="padding:24px; margin-bottom:0;">
          <img src="assets/img/olahraga_senam.jpg" alt="Senam Sehat" style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:14px;">
          <h3 style="font-size:1.15rem; color:var(--color-navy); font-weight:700; margin-bottom:8px;">Senam Kebugaran Lansia & PKK</h3>
          <p style="font-size:0.85rem; color:#64748B; line-height:1.6; margin-bottom:12px;">Kegiatan senam bersama setiap Minggu pagi guna menjaga kebugaran tubuh, menurunkan resiko hipertensi, dan mempererat tali silaturahmi antarwarga.</p>
          <span class="badge badge-success">Sehat Bersama</span>
        </div>
      </div>
    </div>
  `;
}

function renderGaleriView() {
  const allTags = [...new Set(appData.gallery.map(g => g.tag))];
  
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Dokumentasi Visual</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Galeri Kegiatan Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Potret nyata kebersamaan, kerja bakti, posyandu, dan pembinaan masyarakat di wilayah Kelurahan Tambangan, Kec. Mijen.</p>
      </div>
    </div>

    <div class="container section">
      <!-- Filter Kategori -->
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:28px; justify-content:center;">
        <button class="btn btn-primary" onclick="filterGaleri('')" style="padding:6px 14px; font-size:0.82rem;" id="galeri-filter-all">
          <i class="fas fa-th"></i> Semua
        </button>
        ${allTags.map(tag => `
          <button class="btn btn-secondary" onclick="filterGaleri('${tag}')" style="padding:6px 14px; font-size:0.82rem;" data-galeri-tag="${tag}">
            ${tag}
          </button>
        `).join('')}
      </div>

      <div class="gallery-grid" id="galeri-grid">
        ${appData.gallery.map(g => `
          <div class="gallery-card" data-tag="${g.tag}">
            <img src="${g.image}" alt="${g.title}">
            <div class="gallery-overlay">
              <span class="badge badge-gold" style="align-self:flex-start; margin-bottom:6px;">${g.tag}</span>
              <h4>${g.title}</h4>
              <span>Dokumentasi Kelurahan Tambangan</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderKontakView() {
  return `
    <div style="background:linear-gradient(135deg, var(--color-navy), var(--color-blue-support)); color:#fff; padding:50px 0;">
      <div class="container">
        <span class="badge badge-gold" style="margin-bottom:12px;">Pusat Komunikasi</span>
        <h1 style="font-size:2.4rem; font-weight:800; margin-bottom:8px;">Kontak & Lokasi Kelurahan Tambangan</h1>
        <p style="color:#CBD5E1; max-width:650px;">Informasi resmi alamat kantor kelurahan, peta wilayah Kecamatan Mijen, serta formulir penyampaian saran pembangunan warga.</p>
      </div>
    </div>

    <div class="container section">
      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:40px;">
        <div class="admin-card" style="padding:28px;">
          <h2 style="font-size:1.3rem; color:var(--color-navy); margin-bottom:8px; font-weight:700;">Formulir Aspirasi Warga Tambangan</h2>
          <p style="color:var(--color-neutral-gray); font-size:0.86rem; margin-bottom:20px;">Sampaikan saran perbaikan layanan publik atau informasi lingkungan. (Hanya memerlukan nama dan isi laporan, tidak meminta NIK/KK).</p>

          <form onsubmit="event.preventDefault(); alert('Terima kasih! Aspirasi Anda telah dicatat untuk ditindaklanjuti pejabat terkait Kelurahan Tambangan.'); this.reset();">
            <div class="form-group">
              <label class="form-label">Nama Pengirim (Sesuai KTP) *</label>
              <input type="text" required placeholder="Contoh: Budi Santoso" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label">Wilayah Lingkungan di Tambangan *</label>
              <select class="form-control">
                <option>RW 01 Tambangan</option>
                <option>RW 02 Tambangan</option>
                <option>RW 03 Tambangan</option>
                <option>RW 04 Tambangan</option>
                <option>RW 05 Tambangan</option>
                <option>RW 06 Tambangan</option>
                <option>Warga Luar Kelurahan</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Kategori Laporan *</label>
              <select class="form-control">
                <option>Saran Pelayanan Administrasi</option>
                <option>Kebersihan Lingkungan & Saluran Air</option>
                <option>Pemberdayaan UMKM</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Isi Aspirasi *</label>
              <textarea rows="4" required class="form-control" placeholder="Tuliskan saran atau pengaduan Anda secara santun dan jelas..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;"><i class="fas fa-paper-plane"></i> Kirim Aspirasi</button>
          </form>
        </div>

        <div>
          <div class="admin-card" style="padding:24px; margin-bottom:24px;">
            <h3 style="font-size:1.15rem; color:var(--color-navy); margin-bottom:16px; font-weight:700;">Informasi Wilayah & Kantor</h3>
            
            <div style="display:flex; flex-direction:column; gap:14px; font-size:0.88rem;">
              <div style="display:flex; gap:12px;">
                <i class="fas fa-map-marker-alt" style="color:var(--color-gold); font-size:1.2rem; width:20px;"></i>
                <div>
                  <strong style="color:var(--color-navy);">Wilayah:</strong>
                  <p style="margin:0; color:#475569;">Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang, Jawa Tengah</p>
                </div>
              </div>

              <div style="display:flex; gap:12px;">
                <i class="fas fa-clock" style="color:var(--color-gold); font-size:1.2rem; width:20px;"></i>
                <div>
                  <strong style="color:var(--color-navy);">Jam Pelayanan Administrasi:</strong>
                  <p style="margin:0; color:#475569;">Senin - Kamis: 08.00 - 15.30 WIB<br>Jumat: 08.00 - 14.30 WIB</p>
                </div>
              </div>

              <div style="display:flex; gap:12px;">
                <i class="fas fa-graduation-cap" style="color:var(--color-purple-accent); font-size:1.2rem; width:20px;"></i>
                <div>
                  <strong style="color:var(--color-navy);">Inisiator Digitalisasi:</strong>
                  <p style="margin:0; color:#475569;">KKN Tematik Periode 38 Universitas Wahid Hasyim Semarang</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Peta Kecamatan Mijen Semarang -->
          <div style="border-radius:var(--radius-lg); overflow:hidden; border:1px solid var(--color-border); height:250px;">
            <iframe 
              title="Peta Wilayah Mijen Semarang"
              src="https://maps.google.com/maps?q=Tambangan+Mijen+Semarang&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  `;
}
