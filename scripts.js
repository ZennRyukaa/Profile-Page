document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".tab-indicator");
    const sections = document.querySelectorAll(".content-section");

    // Animasi Transisi Halaman
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            if (!link.classList.contains("tab")) { // Hindari tab switcher
                e.preventDefault();
                const href = link.getAttribute("href");

                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 300);

    // Tab Switcher untuk Links & Shop
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Hilangkan class 'active' dari semua tab
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            // Pindahkan indikator tab
            indicator.style.transform = `translateX(${index * 100}%)`;

            // Sembunyikan semua konten & tampilkan yang sesuai
            sections.forEach((section) => (section.style.display = "none"));
            sections[index].style.display = "block";
        });
    });
});
