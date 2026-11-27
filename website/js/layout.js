(function () {
  const pathname = window.location.pathname.replace(/\/+$/, '');
  let currentPage = pathname.split('/').pop() || 'index.html';
  if (!currentPage.includes('.')) currentPage = 'index.html';

  const navItems = [
    { href: 'index.html', label: 'Beranda' },
    { href: 'program.html', label: 'Program Rawatan' },
    { href: 'keluarga.html', label: 'Untuk Keluarga' },
    { href: 'adiksi.html', label: 'Apa Itu Adiksi?' },
    { href: 'edukasi.html', label: 'Edukasi' },
    { href: 'pelatihan.html', label: 'Pelatihan' },
    { href: 'lowongan.html', label: 'Lowongan' },
    { href: 'tentang.html', label: 'Tentang' },
    { href: 'galeri.html', label: 'Galeri' }
  ];

  const whatsappUrl = 'https://wa.me/628111632752?text=Halo%20Yayasan%20Kasih%20Mulia%2C%20saya%20ingin%20bertanya%20secara%20rahasia.';

  function activeAttribute(href) {
    return currentPage === href ? ' aria-current="page"' : '';
  }

  function navLink(item) {
    return '<a class="site-nav-link" href="' + item.href + '"' +
      activeAttribute(item.href) + '>' + item.label + '</a>';
  }

  function renderHeader() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    const desktopLinks = navItems.map(navLink).join('');
    const mobileLinks = navItems.map(function (item) {
      return '<a href="' + item.href + '"' + activeAttribute(item.href) + '>' + item.label + '</a>';
    }).join('');

    mount.innerHTML = [
      '<a class="skip-link" href="#main-content">Lewati ke konten utama</a>',
      '<div class="site-topbar">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-x-5 gap-y-1">',
          '<span>Ruang aman untuk memulai pemulihan — tanpa penghakiman.</span>',
          '<div class="flex items-center gap-3 sm:gap-5">',
            '<a href="mailto:info@yayasankasihmulia.org">info@yayasankasihmulia.org</a>',
            '<a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">WhatsApp Admisi ↗</a>',
          '</div>',
        '</div>',
      '</div>',
      '<div class="site-header-main">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
          '<div class="site-header-inner">',
            '<a href="index.html" class="site-brand" aria-label="Yayasan Kasih Mulia, Beranda">',
              '<img class="site-brand-logo" src="https://www.yayasankasihmulia.org/wp-content/uploads/2023/03/logoykm.png" alt="Logo Yayasan Kasih Mulia" width="180" height="64" decoding="async" />',
            '</a>',
            '<nav class="site-nav-desktop" aria-label="Navigasi utama">' + desktopLinks + '</nav>',
            '<div class="site-header-actions">',
              '<a href="konsultasi.html">Konsultasi</a>',
            '</div>',
            '<button id="mobile-menu-btn" class="site-mobile-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Buka menu navigasi">',
              '<svg id="menu-icon" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
            '</button>',
          '</div>',
        '</div>',
        '<div id="mobile-menu" hidden>',
          '<nav class="max-w-7xl mx-auto" aria-label="Navigasi mobile">' + mobileLinks + '</nav>',
          '<div class="mobile-menu-actions max-w-7xl mx-auto">',
            '<a href="konsultasi.html" class="btn-teal">Konsultasi</a>',
            '<a href="donasi.html" class="btn-primary-cta">Donasi</a>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    function closeMenu(returnFocus) {
      if (!menuBtn || !mobileMenu) return;
      mobileMenu.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Buka menu navigasi');
      if (menuIcon) menuIcon.innerHTML = '<path d="M4 7h16M4 12h16M4 17h16"/>';
      if (returnFocus) menuBtn.focus();
    }

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closeMenu(false);
          return;
        }
        mobileMenu.removeAttribute('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Tutup menu navigasi');
        if (menuIcon) menuIcon.innerHTML = '<path d="m6 6 12 12M18 6 6 18"/>';
        const firstLink = mobileMenu.querySelector('nav a');
        if (firstLink) firstLink.focus({ preventScroll: true });
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { closeMenu(false); });
      });

      document.addEventListener('click', function (event) {
        if (menuBtn.getAttribute('aria-expanded') === 'true' &&
            !mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
          closeMenu(false);
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
          closeMenu(true);
        }
      });
    }
  }

  function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;

    mount.innerHTML = [
      '<footer class="text-white">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">',
          '<div class="site-footer-grid">',
            '<div>',
              '<div class="flex items-center gap-3 mb-5">',
                '<img src="https://www.yayasankasihmulia.org/wp-content/uploads/2023/03/logoykm.png" alt="Logo Yayasan Kasih Mulia" width="176" height="62" loading="lazy" decoding="async" class="site-footer-logo" />',
                '<span><strong class="block font-heading text-white">Yayasan Kasih Mulia</strong><small class="text-teal-100">Kedhaton Parahita · Sejak 1998</small></span>',
              '</div>',
              '<p class="text-sm leading-relaxed mb-4">Mendampingi pemulihan gangguan penggunaan zat dan adiksi perilaku melalui pendekatan Therapeutic Community, serta mengembangkan kapasitas profesional di bidang adiksi.</p>',
              '<a class="site-footer-link" href="mailto:info@yayasankasihmulia.org">info@yayasankasihmulia.org</a>',
            '</div>',
            '<div>',
              '<h3 class="site-footer-heading">Jelajahi</h3>',
              '<a class="site-footer-link" href="tentang.html">Tentang Yayasan</a>',
              '<a class="site-footer-link" href="program.html">Program Rawatan</a>',
              '<a class="site-footer-link" href="keluarga.html">Dukungan Keluarga</a>',
              '<a class="site-footer-link" href="edukasi.html">Memahami Adiksi</a>',
              '<a class="site-footer-link" href="pelatihan.html">Pelatihan Konselor</a>',
              '<a class="site-footer-link" href="lowongan.html">Lowongan Kerja</a>',
              '<a class="site-footer-link" href="galeri.html">Galeri Kegiatan</a>',
            '</div>',
            '<div>',
              '<h3 class="site-footer-heading">Kantor Pusat &amp; Admisi</h3>',
              '<p class="text-sm leading-relaxed mb-3">Jln. Pluit Karang Permai Blok T7 Selatan No. 40–42, Jakarta Utara, DKI Jakarta, Indonesia</p>',
              '<a class="site-footer-link" href="https://wa.me/628111632752" target="_blank" rel="noopener noreferrer">WhatsApp 0811-1632-752 ↗</a>',
              '<a class="site-footer-link" href="mailto:info@yayasankasihmulia.org">info@yayasankasihmulia.org</a>',
              '<a class="site-footer-link" href="https://www.google.co.id/maps/place/Yayasan+Kasih+Mulia/@-6.1218866,106.7750207,17z" target="_blank" rel="noopener noreferrer">Buka lokasi di peta ↗</a>',
            '</div>',
            '<div>',
              '<h3 class="site-footer-heading">Lokasi Layanan</h3>',
              '<p class="text-sm font-semibold mb-1">Kedhaton Parahita Primary House</p>',
              '<p class="text-sm leading-relaxed mb-3">Jln. Bali Raya No. 20–22, Sentul City, Bogor, Jawa Barat</p>',
              '<a class="site-footer-link" href="tel:+62216683545">Telp: (021) 668-3545</a>',
              '<p class="text-sm font-semibold mb-1">Parahita Training Provider</p>',
              '<p class="text-sm leading-relaxed mb-3">Sentra Senayan 2 – Lt. 16, Jl. Asia Afrika No. 8, Jakarta Pusat</p>',
              '<a class="site-footer-link" href="tel:+62811185667">Telp: 0811-185-667</a>',
            '</div>',
          '</div>',
          '<div class="site-footer-bottom mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">',
            '<p class="text-xs text-teal-100">© 2026 Yayasan Kasih Mulia – Kedhaton Parahita. Seluruh hak cipta dilindungi.</p>',
            '<div class="flex flex-wrap gap-x-5 gap-y-2 text-xs">',
              '<a class="text-teal-100 hover:text-white underline" href="tentang.html#transparansi">Transparansi</a>',
              '<a class="text-teal-100 hover:text-white underline" href="konsultasi.html">Konsultasi &amp; Kontak</a>',
              '<a class="text-teal-100 hover:text-white underline" href="donasi.html">Dukung Pemulihan</a>',
            '</div>',
          '</div>',
        '</div>',
      '</footer>',
      '<a class="mobile-whatsapp-fab" href="https://wa.me/628111632752?text=Halo%20Yayasan%20Kasih%20Mulia%2C%20saya%20ingin%20berkonsultasi%20secara%20rahasia." target="_blank" rel="noopener noreferrer" aria-label="Konsultasi melalui WhatsApp">',
        '<span aria-hidden="true">WA</span><span>WhatsApp</span>',
      '</a>'
    ].join('');
  }

  function initFloatingWhatsapp() {
    const fab = document.querySelector('.mobile-whatsapp-fab');
    if (!fab) return;
    function updateVisibility() {
      if (window.innerWidth > 767) { fab.classList.add('is-obscured'); return; }
      const f = fab.getBoundingClientRect();
      let overlap = false;
      document.querySelectorAll('main a[class*="btn-"], main button, #site-footer footer').forEach(function(el) {
        if (overlap) return;
        const r = el.getBoundingClientRect();
        if (r.width && r.height && r.right > f.left && r.left < f.right && r.bottom > f.top && r.top < f.bottom) overlap = true;
      });
      fab.classList.toggle('is-obscured', overlap);
    }
    window.addEventListener('scroll', updateVisibility, {passive:true});
    window.addEventListener('resize', updateVisibility);
    updateVisibility();
  }

  function initImageLightbox() {
    const main = document.querySelector('main');
    if (!main) return;

    const dialog = document.createElement('dialog');
    dialog.id = 'site-image-lightbox';
    dialog.className = 'site-image-lightbox';
    dialog.setAttribute('aria-label', 'Pratinjau foto');
    dialog.innerHTML = [
      '<div class="lightbox-toolbar"><button type="button" data-lightbox-close>Tutup</button></div>',
      '<img src="" alt="" />',
      '<p data-lightbox-caption hidden></p>'
    ].join('');
    document.body.appendChild(dialog);

    const preview = dialog.querySelector('img');
    const caption = dialog.querySelector('[data-lightbox-caption]');
    const closeButton = dialog.querySelector('[data-lightbox-close]');

    main.querySelectorAll('img').forEach(function (image) {
      image.classList.add('lightbox-image');
      if (!image.closest('a, button')) {
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', image.alt ? 'Perbesar foto: ' + image.alt : 'Perbesar foto');
      }
    });

    function openLightbox(trigger) {
      const image = trigger.matches('img') ? trigger : trigger.querySelector('img');
      if (!image) return;
      const source = trigger.getAttribute('data-lightbox-src') ||
        image.getAttribute('data-lightbox-src') || image.currentSrc || image.src;
      if (!source) return;

      const alt = trigger.getAttribute('data-lightbox-alt') || image.alt || '';
      preview.src = source;
      preview.alt = alt;
      caption.textContent = alt;
      caption.hidden = !alt;
      if (!dialog.open) dialog.showModal();
    }

    document.addEventListener('click', function (event) {
      const trigger = event.target.closest('[data-lightbox-src]') ||
        event.target.closest('main img.lightbox-image');
      if (!trigger || trigger.closest('#site-image-lightbox')) return;
      if (trigger.matches('img') && trigger.closest('a')) event.preventDefault();
      openLightbox(trigger);
    });

    document.addEventListener('keydown', function (event) {
      const image = event.target.closest('main img.lightbox-image');
      if (!image || image.closest('a, button')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(image);
      }
    });

    closeButton.addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', function () {
      preview.removeAttribute('src');
      preview.alt = '';
      caption.textContent = '';
      caption.hidden = true;
    });
  }

  function initAccordions() {
    document.querySelectorAll('[data-accordion-trigger]').forEach(function (button) {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('aria-controls');
        const panel = document.getElementById(targetId);
        if (!panel) return;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        if (expanded) panel.setAttribute('hidden', '');
        else panel.removeAttribute('hidden');
        const icon = button.querySelector('[data-accordion-icon]');
        if (icon) icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();
    initAccordions();
    initImageLightbox();
    initFloatingWhatsapp();
  });
})();
