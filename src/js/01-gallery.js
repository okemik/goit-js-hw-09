import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

// JSON'dan veri al
fetch('./data/images.json')
  .then((res) => res.json())
  .then((images) => {
    const markup = images
      .map(
        ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
          </a>
        </li>`
      )
      .join('');

    galleryContainer.innerHTML = markup;

    // Lightbox başlat
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  })
  .catch((err) => console.error('Görseller yüklenemedi:', err));
