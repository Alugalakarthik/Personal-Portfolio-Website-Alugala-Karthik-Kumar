document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
  const navLinksContainer = document.getElementById('nav-links');

  // Smooth scroll & active link switch
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY || window.pageYOffset;
    sections.forEach((section, index) => {
      const offsetTop = section.offsetTop - 60;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });
});
