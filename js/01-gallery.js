import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		galleryItem =>
			`<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
          />
        </a>
      </div>`,
	)
	.join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
	event.preventDefault();
	const instance = basicLightbox.create(
		`
		<img src="${event.target.dataset.source}">
	`,
	);
	instance.show();

	document.body.addEventListener("keydown", event => {
		if (event.key === "Escape") instance.close();
	});
}
