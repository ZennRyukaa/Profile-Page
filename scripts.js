document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");

            // Animasi keluar
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 300); // Durasi animasi (300ms)
        });
    });

    // Animasi masuk
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 300);
});