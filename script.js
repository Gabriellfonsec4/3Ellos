const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const aberto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!aberto));
  toggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
  menu.classList.toggle("open", !aberto);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    menu.classList.remove("open");
  });
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menu.classList.contains("open")) {
    toggle.click();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
