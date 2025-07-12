// Obtener referencias
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// Abrir modal con datos dinámicos
function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

// Cerrar modal
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
  console.log("🌙 Toggle encontrado:", toggleDarkMode);

  if (!toggleDarkMode) {
    console.error("❌ No se encontró el botón toggle");
    return;
  }
  
  toggleDarkMode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Cargar preferencia
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  console.log("✅ Toggle Dark Mode inicializado");
}

initDarkMode();


