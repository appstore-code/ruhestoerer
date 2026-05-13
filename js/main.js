/* ============================================================
   RUHESTÖRER — main.js
   Nav scroll, mobile menu, FAQ accordion, scroll reveal,
   waveform animation, stagger
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll ─────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── FAQ accordion ──────────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Open clicked unless it was already open
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ── Scroll reveal ──────────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el, i) => {
      // Stagger children in groups
      if (el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay + 'ms';
      }
      observer.observe(el);
    });
  }

  /* ── Waveform bars stagger ──────────────────────────────── */
  const waveBars = document.querySelectorAll('.wave-bar');
  waveBars.forEach((bar, i) => {
    const heights = [30, 50, 70, 90, 100, 85, 60, 40, 65, 95, 80, 55, 35,
                     75, 100, 65, 45, 85, 70, 50, 90, 60, 80, 40, 55, 75, 45, 65];
    const h = heights[i % heights.length];
    bar.style.height = (h * 0.48) + 'px';
    bar.style.animationDelay = (i * 60) + 'ms';
    bar.style.animationDuration = (900 + (i % 5) * 120) + 'ms';
  });

  /* ── dB counter animation ────────────────────────────────── */
  const dbDisplay = document.querySelector('.db-display');
  if (dbDisplay) {
    let current = 42;
    const targets = [67, 73, 58, 81, 74, 68, 77, 62, 71, 80];
    let idx = 0;
    setInterval(() => {
      const target = targets[idx % targets.length];
      idx++;
      let frames = 0;
      const tick = () => {
        current += (target - current) * 0.18;
        dbDisplay.textContent = Math.round(current);
        if (Math.abs(target - current) > 0.5 && frames < 40) {
          frames++;
          requestAnimationFrame(tick);
        } else {
          dbDisplay.textContent = target;
          current = target;
        }
      };
      requestAnimationFrame(tick);
    }, 1800);
  }

});
