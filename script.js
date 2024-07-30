document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`Has hecho clic en la imagen: ${this.alt}`);
        });
    });
});
