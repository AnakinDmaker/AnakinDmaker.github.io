document.querySelectorAll('.nav-item, .logo-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.section;

    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (link.classList.contains('nav-item')) {
      link.classList.add('active');
    }
  });
});