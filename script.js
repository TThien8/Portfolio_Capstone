const galleryImages = document.querySelectorAll('.photo-item img');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        console.log("Đang xem ảnh: " + this.alt);
        this.style.opacity = "0.7";
        setTimeout(() => {
            this.style.opacity = "1";
        }, 500);
    });
});