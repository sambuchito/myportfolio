const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

function initDarkMode() {
  const toggleDarkMode = document.getElementById("dark-mode-toggle");
  const heroImg = document.querySelector(".hero-img");

  if (!toggleDarkMode) {
    console.error("❌ No se encontró el botón toggle");
    return;
  }

  const newToggle = toggleDarkMode.cloneNode(true);
  toggleDarkMode.parentNode.replaceChild(newToggle, toggleDarkMode);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    heroImg.src = "./ALL/IMG/cara-mia-new-white.webp";
  } else {
    document.body.classList.remove("dark-mode");
    heroImg.src = "./ALL/IMG/cara-mia-new.webp";
  }

  newToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      heroImg.src = "./ALL/IMG/cara-mia-new-white.webp";
      localStorage.setItem("theme", "dark");
    } else {
      heroImg.src = "./ALL/IMG/cara-mia-new.webp";
      localStorage.setItem("theme", "light");
    }
  });
}

