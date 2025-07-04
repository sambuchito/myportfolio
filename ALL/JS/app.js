function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

  function clic(){
    alert("Hola!, como carancho estas?");
}

//saludar();

// Obtener el modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Datos para cada ícono
const skillData = {
  tester: {
    title: "Investors Trust",
    text: "Manual QA Tester (2024 - Present). Working on a fintech app for brokers: functional testing, reporting bugs and collaborating with the dev team. "
  },
  movie: {
    title: "Movie Cinemas",
    text: "Customer Service Representative (2021 - 2022). Ticket sales, concessions and operational support in a high-traffic environment."
  }
};

// Función para abrir modal con contenido dinámico
function openModal(skill) {
  modalTitle.textContent = skillData[skill].title;
  modalText.textContent = skillData[skill].text;
  modal.style.display = "block";
}

// Cerrar modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Cerrar al hacer clic fuera del contenido
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
