document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.photo-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const description = this.getAttribute('alt');
            alert("Bạn đang xem: " + description);
            this.style.filter = "brightness(1.2)";
            setTimeout(() => {
                this.style.filter = "brightness(1)";
            }, 300);
        });

        img.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const description = this.getAttribute('alt');
                alert("Bạn đã chọn ảnh: " + description);
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert("Cảm ơn " + name + "! Tin nhắn đã được gửi.");
            this.reset();
        });
    }
});