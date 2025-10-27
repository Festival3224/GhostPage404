window.addEventListener('DOMContentLoaded', () => {
  const eyes = document.querySelector('.ghost__eyes');
  const head = document.querySelector('.ghost__head');
  if (!eyes || !head) return;

  // Максимальные смещения в пикселях
  const MAX_X = 16; // влево/вправо
  const MAX_Y = 8;  // вверх/вниз

  eyes.style.setProperty('--tx', '0px');
  eyes.style.setProperty('--ty', '0px');

  function onMove(e) {
    const r = head.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top  + r.height * 0.45;

    let tx = e.clientX - cx;
    let ty = e.clientY - cy;

    const scaleX = MAX_X / (r.width  / 2);
    const scaleY = MAX_Y / (r.height / 2);
    tx = Math.max(-MAX_X, Math.min(MAX_X, tx * scaleX));
    ty = Math.max(-MAX_Y, Math.min(MAX_Y, ty * scaleY));

    eyes.style.setProperty('--tx', `${tx}px`);
    eyes.style.setProperty('--ty', `${ty}px`);

  }

  window.addEventListener('mousemove', onMove, { passive: true });
});
