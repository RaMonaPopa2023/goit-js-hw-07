import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");
let imageInLightbox = null;

console.log(galleryItems);

galleryItems.forEach((img) => {
  const listImgEl = document.createElement("li");
  listImgEl.classList.add("gallery__item");
  listImgEl.innerHTML = `<a class="gallery__link" href="${img.original}">
      <img
          class="gallery__image"
          src="${img.preview}"
          alt="${img.description}"
      />
      </a>`;

  listEl.append(listImgEl);
});
listEl.addEventListener("click", openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  imageInLightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
  });

  imageInLightbox.open();
}
