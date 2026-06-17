// 在解析阶段（<head> 中）就决定本次显示哪张壁纸，并尽早 preload，
// 保持原生般的快速淡入。MV3 的 CSP 不允许内联脚本，因此独立成文件。
(function () {
  const wallpapers = ['wallpaper.jpg', 'wallpaper2.jpg'];
  let idx = parseInt(localStorage.getItem('wpIndex'), 10);
  if (isNaN(idx) || idx < 0) idx = 0;
  idx = idx % wallpapers.length;
  // 记录下一次应显示的索引，从而每次打开新标签页轮流切换
  localStorage.setItem('wpIndex', (idx + 1) % wallpapers.length);

  const src = wallpapers[idx];
  window.__wallpaperSrc = src;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
})();
