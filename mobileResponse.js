 const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');

    function openMenu() {
      btn.classList.add('open');
      menu.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-label', 'Close menu');
      // optional: move focus to first menu item
      const first = menu.querySelector('a');
      if (first) first.focus();
    }

    function closeMenu() {
      btn.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-label', 'Open menu');
      btn.focus();
    }

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      if (isOpen) closeMenu(); else openMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close when clicking outside the menu on mobile
    document.addEventListener('click', (e) => {
      const withinHeader = e.target.closest('header');
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (!withinHeader && isMobile && btn.classList.contains('open')) {
        closeMenu();
      }
    });

   