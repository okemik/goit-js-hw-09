import "./init.js";
import { images } from "../data/images";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Galeri öğelerini oluşturma
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img 
          class="gallery-image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>
    </li>
  `
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

// SimpleLightbox'u başlatma
new SimpleLightbox(".gallery a", {
  captionsData: "alt", // Açıklamalar için alt özniteliği
  captionDelay: 250, // Açıklama 250ms gecikmeli gösterilir
});
