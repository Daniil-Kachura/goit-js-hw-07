import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

const selectorGallery = (images) => {
    return images
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src="${preview}" data-source =${original} alt="${description}"></div>`;
        })
        .join("");
};

const cardImagesMarkup = selectorGallery(galleryItems);

galleryItemsEl.insertAdjacentHTML("afterbegin", cardImagesMarkup);

galleryItemsEl.addEventListener("click", selectGalleryEl);

function selectGalleryEl(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });
        
        function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }
