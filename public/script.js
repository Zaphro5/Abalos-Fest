document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
    const musicToggle = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");

    // Scroll-to-top button behavior
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Background Music Toggle
    let isPlaying = false;

    musicToggle.addEventListener("click", function () {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = "🎵 Play Music";
        } else {
            bgMusic.play();
            musicToggle.textContent = "⏸️ Pause Music";
        }
        isPlaying = !isPlaying;
    });
});
