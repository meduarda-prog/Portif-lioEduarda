const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    toggle.textContent = "☀";
  } else {
    toggle.textContent = "🌙";
  }
});
