const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    toggle.textContent = "☀";
  } else {
    toggle.textContent = "🌙";
  }
});
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
