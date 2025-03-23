document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        }
    });
    
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
