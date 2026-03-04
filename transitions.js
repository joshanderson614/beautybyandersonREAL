document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in');

  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add('nav-hidden');
    } else {
      header.classList.remove('nav-hidden');
    }
    lastScrollTop = scrollTop;
  });

  const allLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="tel:"]):not([href^="mailto:"]):not([href^="sms:"])');
  allLinks.forEach(link => {
    if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) return;
    link.addEventListener('click', function(e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const targetPage = this.getAttribute('href');
      if (targetPage === currentPage || !targetPage || targetPage.startsWith('#')) return;
      e.preventDefault();
      window.scrollTo(0, 0);
      document.body.classList.add('fade-out');
      setTimeout(function() { window.location.href = targetPage; }, 300);
    });
  });

  if (window.innerWidth < 768) {
    const mobileCta = document.createElement('div');
    mobileCta.className = 'mobile-cta';
    mobileCta.innerHTML = `
      <a href="book.html" class="mobile-cta-primary" aria-label="Book appointment">
        <svg class="mobile-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Book
      </a>
      <a href="tel:+13109859826" aria-label="Call Beauty by Anderson">
        <svg class="mobile-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call
      </a>
      <a href="https://www.google.com/maps/dir//700+Levering+Ave,+Los+Angeles,+CA+90024" target="_blank" rel="noopener" aria-label="Get directions">
        <svg class="mobile-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        Directions
      </a>
      <a href="sms:+13109859826" aria-label="Text us">
        <svg class="mobile-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Text
      </a>
    `;
    document.body.appendChild(mobileCta);
    const footer = document.querySelector('.footer');
    if (footer) footer.style.paddingBottom = '70px';
  }
});
