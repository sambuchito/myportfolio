function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

  function clic(){
    alert("Hola!, como carancho estas?");
}


// Obtener referencias
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// Abrir modal con datos dinámicos
function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.innerHTML = content; // soporta HTML
  modal.style.display = "block";
  document.body.classList.add("modal-open"); // bloquea scroll
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // habilita scroll
}

closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
