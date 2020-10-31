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
      wrapper.className = 'theme-light';
      root.style.setProperty('--color-background', 'hsl(210deg, 30%, 8%)');
      root.style.setProperty('--color-text', 'hsl(0deg, 0%, 100%)');
    } else {
      wrapper.className = 'theme-dark';
      root.style.setProperty('--color-background', ' hsl(0deg, 0%, 100%)');
      root.style.setProperty('--color-text', 'hsl(210deg, 30%, 8%)');
    }
    wrapper.className = btn.classList.contains('dark')
      ? 'theme-light'
      : 'theme-dark';
  });
}

const lightBtns = document.querySelectorAll('.light-settings .icon');
lightBtns.forEach((btn) => toggleLight(btn));
