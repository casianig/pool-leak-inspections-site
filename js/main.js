/* ============================================================
   POOL LEAK INSPECTIONS — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav Toggle --- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* --- Active Nav Link --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Sticky Header Shadow --- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(0,0,0,0.12)'
        : '0 1px 3px rgba(0,0,0,0.1)';
    }, { passive: true });
  }

  /* --- Contact Form Submission (Formspree) --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const successMsg = document.getElementById('form-success');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.textContent = '✓ Message sent! We\'ll be in touch within 24 hours.';
          }
          btn.textContent = 'Message Sent!';
        } else {
          btn.textContent = 'Error — Try Again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
      }
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Premium Scroll Reveal --- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay || 0) * 120;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .reveal').forEach(el => revealObserver.observe(el));

  /* --- How It Works animated steps --- */
  const stepsWrapper = document.querySelector('.steps-wrapper');
  if (stepsWrapper) {
    new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        stepsWrapper.classList.add('in-view');
      }
    }, { threshold: 0.25 }).observe(stepsWrapper);
  }

  /* --- Number counter animation --- */
  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([\$]?)(\d[\d,]*)(\+|★|%| Day| Years)?$/);
    if (!match) return;
    const prefix = match[1] || '';
    const target = parseInt(match[2].replace(/,/g, ''), 10);
    const suffix = match[3] || '';
    if (isNaN(target) || target === 0) return;
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * target);
      const formatted = current >= 1000 ? current.toLocaleString() : current;
      el.textContent = prefix + formatted + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num, .counter').forEach(el => counterObserver.observe(el));

});

/* --- Cookie Consent Banner --- */
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('cookieConsent')) return;

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = '<p>We use cookies to improve your experience and analyze site traffic. <a href="privacy.html">Privacy Policy</a></p>'
    + '<div class="cookie-banner-btns">'
    + '<button class="cookie-btn-decline">Decline</button>'
    + '<button class="cookie-btn-accept">Accept</button>'
    + '</div>';

  document.body.appendChild(banner);

  requestAnimationFrame(function() {
    requestAnimationFrame(function() { banner.classList.add('show'); });
  });

  function hideBanner(choice) {
    localStorage.setItem('cookieConsent', choice);
    banner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    banner.style.opacity = '0';
    banner.classList.remove('show');
    setTimeout(function() { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 350);
  }

  banner.querySelector('.cookie-btn-accept').addEventListener('click', function() { hideBanner('accepted'); });
  banner.querySelector('.cookie-btn-decline').addEventListener('click', function() { hideBanner('declined'); });
});
