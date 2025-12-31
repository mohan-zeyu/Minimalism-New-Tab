// 极简 JS：等图片加载完成后再淡入
const wp = document.getElementById('wallpaper');
const img = new Image();

img.onload = () => {
  wp.style.backgroundImage = `url('${img.src}')`;
  // 强制重排后添加 class 触发动画
  wp.offsetHeight;
  wp.classList.add('loaded');
};

// 优先 WebP，不支持则回退 JPG
const webp = new Image();
webp.onload = () => { img.src = 'wallpaper.webp'; };
webp.onerror = () => { img.src = 'wallpaper.jpg'; };
webp.src = 'wallpaper.webp';
