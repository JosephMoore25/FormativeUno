// Light and Dark Settings
function toggleLight(btn) {
  const root = document.documentElement;
  const wrapper = document.getElementById('wrapper');
  btn.addEventListener('click', () => {
    for (let btn of lightBtns) {
      btn.classList.remove('hidden');
    }
    btn.classList.add('hidden');

    if (btn.classList.contains('light')) {
      wrapper.className = 'theme-dark';
      root.style.setProperty('--color-background', 'hsl(210deg, 30%, 8%)');
      root.style.setProperty('--color-text', 'hsl(0deg, 0%, 100%)');
      root.style.setProperty('--color-primary', 'hsl(333deg, 100%, 52%)');
      root.style.setProperty('--color-secondary', 'hsl(245deg, 100%, 60%)');
    } else {
      wrapper.className = 'theme-light';
      root.style.setProperty('--color-background', ' hsl(0deg, 0%, 100%)');
      root.style.setProperty('--color-text', 'hsl(210deg, 30%, 8%)');
      root.style.setProperty('--color-primary', 'hsl(245deg, 100%, 60%)');
      root.style.setProperty('--color-secondary', 'hsl(333deg, 100%, 52%)');
    }
    wrapper.className = btn.classList.contains('dark')
      ? 'theme-dark'
      : 'theme-light';
  });
}

const lightBtns = document.querySelectorAll('.light-settings .icon');
lightBtns.forEach((btn) => toggleLight(btn));

// Top Navigation
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  nav.classList.toggle('open-nav');
});
