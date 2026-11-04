const previews = {
  desktop: {
    src: "images/desktop_projects.png",
    alt: "Desktop view of the portfolio’s Projects grid",
    caption: "The desktop grid groups my technical coursework and experience by topic."
  },
  mobile: {
    src: "images/phone_width_projects.png",
    alt: "Phone-width view of the portfolio’s Projects page",
    caption: "At phone width, the project cards stack so visitors can read them as they scroll."
  },
  javascript: {
    src: "images/home_page.png",
    alt: "Home page showing the six hobbies and their count",
    caption: "JavaScript builds the hobby list from an array and displays the total."
  }
};

const buttons = document.querySelectorAll(".showcase-controls button");
const image = document.querySelector("#showcase-image");
const caption = document.querySelector("#showcase-caption");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const preview = previews[button.dataset.preview];

    image.src = preview.src;
    image.alt = preview.alt;
    caption.textContent = preview.caption;

    buttons.forEach(function (control) {
      control.setAttribute("aria-pressed", control === button);
    });
  });
});