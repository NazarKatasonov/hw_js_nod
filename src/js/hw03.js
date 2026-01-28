
const lazyImages = document.querySelectorAll('img[data-src]');
const loadButton = document.getElementById('loadBtn');


function loadImage(img) {
  const src = img.dataset.src;
  if (!src) return;

  img.src = src;

  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });

  img.removeAttribute('data-src');
}


if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        loadImage(entry.target);
        observerInstance.unobserve(entry.target);
      });
    },
    {
      rootMargin: '100px',
      threshold: 0.1,
    },
  );

  loadButton.addEventListener('click', () => {
    lazyImages.forEach(img => observer.observe(img));
  });
} else {
  
  loadButton.addEventListener('click', () => {
    lazyImages.forEach(img => loadImage(img));
  });
}
