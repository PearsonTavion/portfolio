const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const darkModeOn = document.body.classList.toggle("dark-mode");
    themeToggle.setAttribute("aria-pressed", String(darkModeOn));
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const message = document.getElementById("contact-message");
  const messageError = document.getElementById("message-error");
  const formStatus = document.getElementById("form-status");

  message.addEventListener("input", function () {
    messageError.textContent = "";
    message.removeAttribute("aria-invalid");
    formStatus.textContent = "";
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formStatus.textContent = "";

    if (message.value.trim().length < 20) {
      messageError.textContent = "Enter at least 20 characters.";
      message.setAttribute("aria-invalid", "true");
      message.focus();
      return;
    }

    messageError.textContent = "";
    message.removeAttribute("aria-invalid");
    contactForm.reset();
    formStatus.textContent =
      "Thanks for trying the form. Your message passed validation.";
  });
}
