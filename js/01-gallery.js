import { galleryItems } from "./gallery-items.js";
// Change code below this line
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
          data-source="${img.original}"
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

  event.preventDefault();
  imageInLightbox = basicLightbox.create(
    `<img width="1400" height="900" src="${clickedOn.dataset.source}" />`,
    {
      onClose: () => {
        imageInLightbox = null;
      },
    }
  );

  imageInLightbox.show();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && imageInLightbox) {
    imageInLightbox.close();
  }
});
