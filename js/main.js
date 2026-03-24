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

  /* --- Google Review Popup Widget --- */
  (function() {

    const reviews = [
      { name: 'Michael T.',  initial: 'M', color: '#4285F4', ago: '3 weeks ago',   text: 'Found a crack in my return line within 45 minutes. Two other companies had no idea. Fixed same day. Absolutely phenomenal.' },
      { name: 'Sarah K.',    initial: 'S', color: '#EA4335', ago: '1 month ago',   text: 'Called Tuesday, got an appointment Thursday. Found a skimmer gasket leak that was costing me hundreds in water bills. Worth every penny!' },
      { name: 'David R.',    initial: 'D', color: '#34A853', ago: '6 weeks ago',   text: 'Two other companies couldn\'t find it. Pool Leak Inspections found it in the main drain in under an hour. My water bill is back to normal.' },
      { name: 'Jennifer L.', initial: 'J', color: '#FBBC04', ago: '2 months ago',  text: 'Tested everything — pressure lines, fittings, light housing, skimmer — pinpointed a micro-crack near the light niche. Five stars, no question.' },
      { name: 'Carlos V.',   initial: 'C', color: '#FF5722', ago: '3 months ago',  text: 'My water bill jumped $300 one month. These guys found a crack in my underground return line using pressure testing. Absolute pros.' },
      { name: 'Olivia B.',   initial: 'O', color: '#673AB7', ago: '10 months ago', text: 'Had a party planned and the pool was dropping fast. Called Friday evening, fit me in Saturday morning. Fixed in 20 minutes. Party saved!' },
    ];

    const review = reviews[Math.floor(Math.random() * reviews.length)];
    const inBlogDir = window.location.pathname.includes('/blog/');
    const testimonialsPath = inBlogDir ? '../testimonials.html' : 'testimonials.html';

    const popup = document.createElement('a');
    popup.href = testimonialsPath;
    popup.className = 'review-popup';
    popup.setAttribute('aria-label', 'Read customer reviews');
    popup.innerHTML = `
      <div class="review-popup-top">
        <div class="review-popup-source">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Verified Google Review</span>
        </div>
        <button class="review-popup-close" aria-label="Close">×</button>
      </div>
      <div class="review-popup-body">
        <div class="review-popup-avatar" style="background:${review.color}">${review.initial}</div>
        <div class="review-popup-info">
          <div class="review-popup-name">${review.name}</div>
          <div class="review-popup-stars">★★★★★</div>
          <p class="review-popup-text">${review.text}</p>
          <div class="review-popup-meta">${review.ago} · Pool Leak Inspections</div>
        </div>
      </div>
      <div class="review-popup-progress">
        <div class="review-popup-progress-bar"></div>
      </div>`;

    document.body.appendChild(popup);

    const DISPLAY_MS = 8000;
    const DELAY_MS   = 4000;
    let dismissTimer;

    function dismiss() {
      clearTimeout(dismissTimer);
      popup.classList.add('hide');
      popup.classList.remove('show');
      setTimeout(() => { if (popup.parentNode) popup.parentNode.removeChild(popup); }, 400);
    }

    popup.querySelector('.review-popup-close').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dismiss();
    });

    setTimeout(function() {
      popup.classList.add('show');

      // Kick off progress bar animation
      const bar = popup.querySelector('.review-popup-progress-bar');
      if (bar) {
        // Use double rAF to ensure transition picks up from scaleX(1)
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            bar.style.transition = 'transform ' + DISPLAY_MS + 'ms linear';
            bar.style.transform = 'scaleX(0)';
          });
        });
      }

      dismissTimer = setTimeout(dismiss, DISPLAY_MS);
    }, DELAY_MS);

  })();

});
