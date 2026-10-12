const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.right = '20px';
    nav.style.background = '#f4f6f9';
    nav.style.padding = '18px';
    nav.style.border = '1px solid #dde2e8';
    nav.style.borderRadius = '14px';
    nav.style.boxShadow = '0 15px 40px rgba(0,0,0,.1)';
  });
}

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 850) nav.style.display = '';
  });
});

document.querySelectorAll('.year').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.year').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});
