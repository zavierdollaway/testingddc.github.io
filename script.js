// Mobile menu + tap-to-open dropdowns.
// On desktop (mouse), dropdowns still open on hover via CSS.
// On phones/tablets (narrow screen or no hover), they open on tap.

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const touchMode = window.matchMedia('(max-width: 1000px), (hover: none)');

function closeMenu() {
  if (!nav) return;
  nav.classList.remove('open');
  nav.querySelectorAll('.open').forEach(el => el.classList.remove('open'));
  if (menu) menu.setAttribute('aria-expanded', 'false');
}

// ☰ button opens/closes the whole menu
if (menu && nav) {
  menu.setAttribute('aria-expanded', 'false');
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}

// "About ▾", "Resources ▾", "Modules ▸" buttons toggle their dropdown on tap
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (!touchMode.matches) return; // desktop: hover handles it
    e.stopPropagation();

    const parent = btn.parentElement; // the .dropdown or .sub-dropdown wrapper

    // Close any other dropdown at the same level so only one is open
    parent.parentElement
      .querySelectorAll(':scope > .dropdown.open, :scope > .sub-dropdown.open')
      .forEach(el => { if (el !== parent) el.classList.remove('open'); });

    parent.classList.toggle('open');
  });
});

// Tapping an actual link closes the menu
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (touchMode.matches) closeMenu();
  });
});

// Tapping anywhere outside the menu closes it
document.addEventListener('click', (e) => {
  if (!nav || !nav.classList.contains('open')) return;
  if (nav.contains(e.target) || (menu && menu.contains(e.target))) return;
  closeMenu();
});

// Rotating the phone / resizing to desktop resets any open state
touchMode.addEventListener('change', closeMenu);

// (Existing) year buttons on the past-results page
document.querySelectorAll('.year').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.year').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});