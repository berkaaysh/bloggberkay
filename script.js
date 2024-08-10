document.addEventListener("DOMContentLoaded", function() {
    // Menü öğelerine tıklayınca yumuşak geçiş yapın
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Galerideki görseller için tıklayınca büyütme efekti
    const galleryImages = document.querySelectorAll(".gallery-images img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            if (this.classList.contains("zoomed")) {
                this.classList.remove("zoomed");
            } else {
                galleryImages.forEach(i => i.classList.remove("zoomed"));
                this.classList.add("zoomed");
            }
        });
    });
});
