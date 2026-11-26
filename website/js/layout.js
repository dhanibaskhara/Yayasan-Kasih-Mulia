(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navItems = [
    { href: 'program.html', label: 'Program Rawatan' },
    { href: 'keluarga.html', label: 'Untuk Keluarga' },
    { href: 'pelatihan.html', label: 'Pelatihan & Edukasi' },
    { href: 'edukasi.html', label: 'Pahami Adiksi' },
    { href: 'tentang.html', label: 'Tentang Kami' }
  ];

  function renderHeader() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    const desktopLinks = navItems
      .map((item) => {
        const active = currentPage === item.href;
        return `<a href="${item.href}" class="px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          active
            ? 'text-[#0F5C5E] bg-[#EDF6F6] font-semibold'
            : 'text-[#1E293B] hover:text-[#0F5C5E] hover:bg-[#EDF6F6]/60'
        }" ${active ? 'aria-current="page"' : ''}>${item.label}</a>`;
      })
      .join('');

    const mobileLinks = navItems
      .map((item) => {
        const active = currentPage === item.href;
        return `<a href="${item.href}" class="block px-4 py-3 rounded-xl text-base font-medium ${
          active
            ? 'bg-[#EDF6F6] text-[#0A3D3F] font-semibold'
            : 'text-[#1E293B] hover:bg-[#FAF9F6]'
        }">${item.label}</a>`;
      })
      .join('');

    mount.innerHTML = `
      <a href="#main-content" class="skip-link">Langsung ke konten utama</a>
      <!-- Top Bar Kerahasiaan & Akses Cepat -->
      <div class="bg-[#0A3D3F] text-white text-xs sm:text-sm py-2 px-4">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            Layanan Konsultasi Awal Rahasia &amp; Tanpa Penghakiman
          </span>
          <div class="flex items-center gap-4">
            <a href="tel:+62216683545" class="hover:underline font-medium">Telp: (021) 668-3545</a>
            <a href="https://wa.me/628111632752?text=Halo%20Yayasan%20Kasih%20Mulia%20Kedhaton%20Parahita,%20saya%20ingin%20berkonsultasi%20secara%20rahasia." target="_blank" rel="noopener noreferrer" class="underline font-semibold text-emerald-200 hover:text-white">
              WhatsApp: 0811-1632-752
            </a>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#D8E2E2]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20 gap-4">
            <!-- Brand Identity Terdisambiguasi -->
            <a href="index.html" class="flex items-center gap-3 group shrink-0">
              <div class="w-11 h-11 rounded-xl bg-[#0F5C5E] text-white flex items-center justify-center font-heading font-bold text-lg shadow-sm" aria-hidden="true">
                YKM
              </div>
              <div class="leading-tight">
                <span class="block font-heading font-bold text-[#0A3D3F] text-base sm:text-lg group-hover:text-[#0F5C5E]">
                  Yayasan Kasih Mulia
                </span>
                <span class="block text-xs text-[#475569] font-medium">
                  Kedhaton Parahita &bull; Rehabilitasi Adiksi
                </span>
              </div>
            </a>

            <!-- Desktop Menu (5 Inti) -->
            <nav class="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
              ${desktopLinks}
            </nav>

            <!-- Desktop Priority CTAs -->
            <div class="hidden md:flex items-center gap-2.5 shrink-0">
              <a href="konsultasi.html" class="btn-outline-teal px-4 py-2.5 rounded-full text-sm font-semibold">
                Konsultasi Rahasia
              </a>
              <a href="donasi.html" class="btn-primary-cta px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                Donasi
              </a>
            </div>

            <!-- Mobile Hamburger -->
            <button id="mobile-menu-btn" type="button" class="lg:hidden p-2.5 rounded-lg border border-[#D8E2E2] text-[#0A3D3F] hover:bg-[#EDF6F6]" aria-expanded="false" aria-controls="mobile-menu" aria-label="Buka menu navigasi">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" hidden class="lg:hidden border-t border-[#D8E2E2] bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <a href="index.html" class="block px-4 py-3 rounded-xl text-base font-medium ${currentPage === 'index.html' ? 'bg-[#EDF6F6] text-[#0A3D3F] font-semibold' : 'text-[#1E293B]'}">Beranda</a>
          ${mobileLinks}
          <div class="pt-3 mt-3 border-t border-[#D8E2E2] grid grid-cols-2 gap-2.5">
            <a href="konsultasi.html" class="btn-outline-teal text-center py-3 rounded-xl text-sm font-semibold">Konsultasi Rahasia</a>
            <a href="donasi.html" class="btn-primary-cta text-center py-3 rounded-xl text-sm font-semibold">Donasi Sekarang</a>
          </div>
        </div>
      </header>
    `;

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.hasAttribute('hidden');
        if (isHidden) {
          mobileMenu.removeAttribute('hidden');
          menuBtn.setAttribute('aria-expanded', 'true');
        } else {
          mobileMenu.setAttribute('hidden', '');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;

    mount.innerHTML = `
      <footer class="bg-[#0A3D3F] text-white mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <!-- Identitas -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-white text-[#0A3D3F] flex items-center justify-center font-heading font-bold">YKM</div>
                <div>
                  <p class="font-heading font-bold text-base leading-tight">Yayasan Kasih Mulia</p>
                  <p class="text-xs text-teal-200">Kedhaton Parahita &bull; Sejak 1998</p>
                </div>
              </div>
              <p class="text-sm text-teal-100/90 leading-relaxed mb-4">
                Pusat rehabilitasi gangguan penggunaan zat (narkoba &amp; alkohol) dan adiksi perilaku dengan metode Therapeutic Community, serta penyelenggara pelatihan konselor adiksi bertaraf internasional.
              </p>
              <p class="text-xs text-teal-200/90">
                Email Resmi: <a href="mailto:info@yayasankasihmulia.org" class="underline text-white">info@yayasankasihmulia.org</a>
              </p>
            </div>

            <!-- Lokasi 1: Kantor Pusat -->
            <div>
              <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-teal-200 mb-3">Kantor Pusat &amp; Konsultasi Awal</h3>
              <p class="text-sm text-white/95 mb-2">
                Jln. Pluit Karang Permai Blok T7 Selatan No. 40–42, Jakarta Utara, DKI Jakarta 14460
              </p>
              <p class="text-sm text-teal-100 mb-2">
                Telp: <a href="tel:+62216683545" class="underline hover:text-white">(021) 668-3545</a><br>
                WhatsApp: <a href="tel:+628111632752" class="underline hover:text-white">0811-1632-752</a>
              </p>
              <a href="https://www.google.co.id/maps/place/Yayasan+Kasih+Mulia/@-6.1218866,106.7750207,17z" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold text-teal-200 hover:text-white underline">
                Buka di Google Maps &rarr;
              </a>
            </div>

            <!-- Lokasi 2: Primary House -->
            <div>
              <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-teal-200 mb-3">Kedhaton Parahita Primary House</h3>
              <p class="text-sm text-white/95 mb-2">
                Jln. Bali Raya No. 20–22, Sentul City, Bogor, Jawa Barat
              </p>
              <p class="text-sm text-teal-100 mb-2">
                Telp: <a href="tel:+62216683545" class="underline hover:text-white">(021) 668-3545</a><br>
                Hotline: <a href="tel:+628111632752" class="underline hover:text-white">0811-1632-752</a>
              </p>
              <a href="https://www.google.co.id/maps/place/Kedhaton+Parahita/@-6.5901728,106.891978,19z" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold text-teal-200 hover:text-white underline">
                Buka di Google Maps &rarr;
              </a>
            </div>

            <!-- Lokasi 3: Parahita Training Provider -->
            <div>
              <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-teal-200 mb-3">Parahita Training Provider</h3>
              <p class="text-sm text-white/95 mb-2">
                Sentra Senayan 2 – Lt. 16, Jl. Asia Afrika No. 8, Senayan, Jakarta Pusat
              </p>
              <p class="text-sm text-teal-100 mb-2">
                Telp/WA: <a href="tel:+62811185667" class="underline hover:text-white">0811-185-667</a>
              </p>
              <a href="https://www.google.co.id/maps/place/Sentral+Senayan+II,+Jl.+Asia+Afrika+No.8" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold text-teal-200 hover:text-white underline">
                Buka di Google Maps &rarr;
              </a>
            </div>
          </div>

          <div class="border-t border-teal-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200">
            <p>&copy; 2026 Yayasan Kasih Mulia – Kedhaton Parahita. Seluruh hak cipta dilindungi.</p>
            <div class="flex flex-wrap items-center gap-5">
              <a href="tentang.html#transparansi" class="hover:text-white underline">Transparansi &amp; Laporan</a>
              <a href="konsultasi.html#privasi" class="hover:text-white underline">Kebijakan Privasi (UU PDP)</a>
              <a href="donasi.html" class="hover:text-white underline">Dukung Pemulihan</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Sticky Mobile Crisis Bar (Terjangkau Satu Ibu Jari) -->
      <div class="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#D8E2E2] px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]" role="region" aria-label="Akses Cepat Konsultasi dan Donasi">
        <div class="grid grid-cols-2 gap-2.5">
          <a href="konsultasi.html" class="btn-teal flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold">
            <span>Konsultasi Rahasia</span>
          </a>
          <a href="donasi.html" class="btn-primary-cta flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold">
            <span>Donasi Sekarang</span>
          </a>
        </div>
      </div>
    `;
  }

  function initAccordions() {
    document.querySelectorAll('[data-accordion-trigger]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(targetId);
        if (!panel) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          panel.setAttribute('hidden', '');
        } else {
          panel.removeAttribute('hidden');
        }
        const icon = btn.querySelector('[data-accordion-icon]');
        if (icon) icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initAccordions();
  });
})();
