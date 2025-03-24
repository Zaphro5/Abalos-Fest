document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            showFlashMessage("All fields are required!", "error");
            return;
        }

        emailjs.send("service_692m69a", "template_0sqg9lb", {
            name: name,
            email: email,
            message: message
        }, "WoRhNMfcV7pobvGNf")
        .then(function (response) {
            showFlashMessage("Message sent successfully!", "success");
            document.getElementById("contact-form").reset(); // Clear the form
        }, function (error) {
            showFlashMessage("Failed to send message. Please try again.", "error");
        });
    });
});

// Function to show flash messages
function showFlashMessage(message, type) {
    var flashMessage = document.createElement("div");
    flashMessage.className = "flash-message " + type;
    flashMessage.innerText = message;

    document.body.appendChild(flashMessage);

    setTimeout(function () {
        flashMessage.style.opacity = "0";
        setTimeout(() => flashMessage.remove(), 500);
    }, 3000);
}

