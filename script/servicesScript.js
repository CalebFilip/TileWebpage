'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    const closeModal = document.getElementById("closeModal");

    const images = document.querySelectorAll(".clickable-image");
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = img.src;
            caption.textContent = img.alt;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});