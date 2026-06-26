(() => {
  const root = window.SITE_ROOT || '';

  const NAV_HTML = `<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="__ROOT__index.html" class="nav-logo" aria-label="Ruhestörer Home">
      <span class="nav-logo-dot" aria-hidden="true"></span>
      Ruhestörer
    </a>
    <ul class="nav-links" role="list">
      <li><a href="__ROOT__index.html#features" data-i18n="nav.features">Funktionen</a></li>
      <li><a href="__ROOT__pricing.html" data-i18n="nav.pricing">Preise</a></li>
      <li><a href="__ROOT__contact.html" data-i18n="nav.contact">Kontakt</a></li>
      <li><a href="__ROOT__ratgeber/laermprotokoll-erstellen/index.html" data-i18n="nav.blog">Ratgeber</a></li>
    </ul>
    <div class="nav-right">
      <div class="lang-toggle" role="group" aria-label="Language">
        <button class="lang-btn active" data-lang="de" aria-label="Deutsch">DE</button>
        <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
      </div>
      <a href="https://apps.apple.com/app/id6763788979" class="btn btn-primary" style="font-size:0.8125rem;padding:8px 16px;" aria-label="App Store">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/></svg>
        App Store
      </a>
      <button class="nav-hamburger" aria-label="Menu öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" role="dialog" aria-label="Navigation">
  <a href="__ROOT__index.html#features" data-i18n="nav.features">Funktionen</a>
  <a href="__ROOT__pricing.html" data-i18n="nav.pricing">Preise</a>
  <a href="__ROOT__contact.html" data-i18n="nav.contact">Kontakt</a>
  <a href="__ROOT__ratgeber/laermprotokoll-erstellen/index.html" data-i18n="nav.blog">Ratgeber</a>
</div>`;

  const FOOTER_HTML = `<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="__ROOT__index.html" class="nav-logo">
          <span class="nav-logo-dot" aria-hidden="true"></span>
          Ruhestörer
        </a>
        <p data-i18n="footer.tagline">Rechtssichere Lärmdokumentation für Deutschland.</p>
      </div>
      <div class="footer-col">
        <p class="footer-col-title" data-i18n="footer.pages">Seiten</p>
        <ul>
          <li><a href="__ROOT__index.html" data-i18n="nav.home">Start</a></li>
          <li><a href="__ROOT__pricing.html" data-i18n="nav.pricing">Preise</a></li>
          <li><a href="__ROOT__contact.html" data-i18n="nav.contact">Kontakt</a></li>
          <li><a href="__ROOT__ratgeber/laermprotokoll-erstellen/index.html" data-i18n="nav.blog">Ratgeber</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <p class="footer-col-title" data-i18n="footer.legal">Rechtliches</p>
        <ul>
          <li><a href="__ROOT__privacy.html" data-i18n="footer.privacy">Datenschutz</a></li>
          <li><a href="__ROOT__imprint.html" data-i18n="footer.imprint">Impressum</a></li>
          <li><a href="__ROOT__terms.html" data-i18n="footer.terms">AGB</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p data-i18n="footer.copyright">© 2025 Ruhestörer. Alle Rechte vorbehalten.</p>
      <div class="lang-toggle" role="group" aria-label="Language">
        <button class="lang-btn active" data-lang="de">DE</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
    </div>
  </div>
</footer>`;

  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html.replaceAll('__ROOT__', root);
  }

  inject('site-nav', NAV_HTML);
  inject('site-footer', FOOTER_HTML);

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  loadScript(root + 'js/i18n.js').then(() => loadScript(root + 'js/main.js'));
})();
