const btns = document.querySelectorAll('.btn');
btns.forEach(b => b.addEventListener('click', () => {
  document.documentElement.style.setProperty('--hue', b.dataset.color);
}))