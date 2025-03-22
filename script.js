function showAlert() {
    alert("Welcome to my AWS-hosted website!");
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").innerText = "Thank you for your message!";
});
