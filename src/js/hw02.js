const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlay = document.querySelector('.lightbox__overlay');


function createGalleryMarkup(items) {
  return items
    .map(
      item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `,
    )
    .join('');
}


galleryList.innerHTML = createGalleryMarkup(galleryItems);


galleryList.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const largeImageURL = event.target.dataset.source;
  const imageAlt = event.target.alt;

  openLightbox(largeImageURL, imageAlt);
}


function openLightbox(src, alt) {
  lightbox.classList.add('is-open');
  lightboxImage.src = src;
  lightboxImage.alt = alt;

  window.addEventListener('keydown', onEscKeyPress);
}


function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';

  window.removeEventListener('keydown', onEscKeyPress);
}

closeButton.addEventListener('click', closeLightbox);
overlay.addEventListener('click', closeLightbox);


function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeLightbox();
  }
}
