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
    // Close on link click
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
    });
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

  /* --- Intersection Observer: fade-in on scroll --- */
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* --- How It Works animated steps --- */
  const stepsWrapper = document.querySelector('.steps-wrapper');
  if (stepsWrapper) {
    new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        stepsWrapper.classList.add('in-view');
      }
    }, { threshold: 0.25 }).observe(stepsWrapper);
  }

});

/* --- Google Review Popup Widget (isolated listener) --- */
document.addEventListener('DOMContentLoaded', function() {
  try {
    var reviews = [
      { name: 'Michael T.',  initial: 'M', color: '#4285F4', ago: '3 weeks ago',   text: 'Found a crack in my return line within 45 minutes. Two other companies had no idea. Fixed same day. Absolutely phenomenal.' },
      { name: 'Sarah K.',    initial: 'S', color: '#EA4335', ago: '1 month ago',   text: 'Called Tuesday, got an appointment Thursday. Found a skimmer gasket leak that was costing me hundreds in water bills. Worth every penny!' },
      { name: 'David R.',    initial: 'D', color: '#34A853', ago: '6 weeks ago',   text: "Two other companies couldn't find it. Pool Leak Inspections found it in the main drain in under an hour. My water bill is back to normal." },
      { name: 'Jennifer L.', initial: 'J', color: '#FBBC04', ago: '2 months ago',  text: 'Tested everything — pressure lines, fittings, light housing, skimmer — pinpointed a micro-crack near the light niche. Five stars, no question.' },
      { name: 'Carlos V.',   initial: 'C', color: '#FF5722', ago: '3 months ago',  text: 'My water bill jumped $300 one month. These guys found a crack in my underground return line using pressure testing. Absolute pros.' },
      { name: 'Olivia B.',   initial: 'O', color: '#673AB7', ago: '10 months ago', text: 'Had a party planned and the pool was dropping fast. Called Friday evening, fit me in Saturday morning. Fixed in 20 minutes. Party saved!' },
    ];

    var review = reviews[Math.floor(Math.random() * reviews.length)];
    var inBlogDir = window.location.pathname.includes('/blog/');
    var testimonialsPath = inBlogDir ? '../testimonials.html' : 'testimonials.html';

    var popup = document.createElement('a');
    popup.href = testimonialsPath;
    popup.setAttribute('aria-label', 'Read customer reviews');

    // Inline styles as primary — not dependent on stylesheet loading order
    popup.style.position   = 'fixed';
    popup.style.bottom     = '28px';
    popup.style.left       = '24px';
    popup.style.zIndex     = '9999';
    popup.style.width      = '320px';
    popup.style.maxWidth   = 'calc(100vw - 32px)';
    popup.style.background = '#ffffff';
    popup.style.borderRadius = '14px';
    popup.style.boxShadow  = '0 8px 32px rgba(0,0,0,0.16),0 2px 8px rgba(0,0,0,0.08)';
    popup.style.padding    = '16px 16px 0';
    popup.style.cursor     = 'pointer';
    popup.style.transform  = 'translateY(130%)';
    popup.style.opacity    = '0';
    popup.style.transition = 'transform 0.45s cubic-bezier(0.34,1.28,0.64,1),opacity 0.35s ease';
    popup.style.border     = '1px solid #e8eaed';
    popup.style.textDecoration = 'none';
    popup.style.display    = 'block';
    popup.style.color      = 'inherit';
    popup.style.fontFamily = 'inherit';

    popup.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">'
      + '<div style="display:flex;align-items:center;gap:7px">'
      + '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">'
      + '<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>'
      + '<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>'
      + '<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>'
      + '<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>'
      + '</svg>'
      + '<span style="font-size:0.72rem;font-weight:700;color:#5f6368;letter-spacing:0.3px">Verified Google Review</span>'
      + '</div>'
      + '<button id="rp-close" aria-label="Close" style="width:22px;height:22px;border-radius:50%;border:none;background:transparent;cursor:pointer;font-size:16px;color:#5f6368;line-height:1;padding:0;display:flex;align-items:center;justify-content:center">×</button>'
      + '</div>'
      + '<div style="display:flex;gap:12px;align-items:flex-start">'
      + '<div style="width:38px;height:38px;border-radius:50%;background:' + review.color + ';display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700;color:#fff;flex-shrink:0">' + review.initial + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:0.88rem;font-weight:700;color:#202124;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + review.name + '</div>'
      + '<div style="color:#FBBC04;font-size:0.85rem;letter-spacing:1px;margin:2px 0 5px">★★★★★</div>'
      + '<p style="font-size:0.82rem;color:#3c4043;line-height:1.55;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">' + review.text + '</p>'
      + '<div style="font-size:0.72rem;color:#9aa0a6;margin-top:5px">' + review.ago + ' · Pool Leak Inspections</div>'
      + '</div>'
      + '</div>'
      + '<div style="height:3px;background:#e8eaed;border-radius:0 0 14px 14px;margin:14px -16px 0;overflow:hidden">'
      + '<div id="rp-bar" style="height:100%;width:100%;background:linear-gradient(90deg,#4285F4,#34A853);transform-origin:left;transform:scaleX(1)"></div>'
      + '</div>';

    document.body.appendChild(popup);

    var DISPLAY_MS = 10000;
    var DELAY_MS   = 1500;
    var dismissTimer;

    function dismissPopup() {
      clearTimeout(dismissTimer);
      popup.style.transition = 'transform 0.3s ease,opacity 0.3s ease';
      popup.style.transform  = 'translateY(130%)';
      popup.style.opacity    = '0';
      setTimeout(function() { if (popup.parentNode) popup.parentNode.removeChild(popup); }, 350);
    }

    var closeBtn = popup.querySelector('#rp-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dismissPopup();
      });
    }

    setTimeout(function() {
      popup.style.transform = 'translateY(0)';
      popup.style.opacity   = '1';

      var bar = popup.querySelector('#rp-bar');
      if (bar) {
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            bar.style.transition = 'transform ' + DISPLAY_MS + 'ms linear';
            bar.style.transform  = 'scaleX(0)';
          });
        });
      }

      dismissTimer = setTimeout(dismissPopup, DISPLAY_MS);
    }, DELAY_MS);

  } catch(e) {
    console.error('Review popup error:', e);
  }
});

/* --- Cookie Consent Banner --- */
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('cookieConsent')) return;

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = '<p>We use cookies to improve your experience and analyze site traffic. By clicking "Accept", you agree to our use of cookies. <a href="privacy.html">Privacy Policy</a></p>'
    + '<div class="cookie-banner-btns">'
    + '<button class="cookie-btn-decline">Decline</button>'
    + '<button class="cookie-btn-accept">Accept</button>'
    + '</div>';

  document.body.appendChild(banner);

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      banner.classList.add('show');
    });
  });

  function hideBanner(choice) {
    localStorage.setItem('cookieConsent', choice);
    banner.style.transition = 'transform 0.3s ease';
    banner.classList.remove('show');
    setTimeout(function() { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 350);
  }

  banner.querySelector('.cookie-btn-accept').addEventListener('click', function() { hideBanner('accepted'); });
  banner.querySelector('.cookie-btn-decline').addEventListener('click', function() { hideBanner('declined'); });
});
