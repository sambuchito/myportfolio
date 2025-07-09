function initModalProjects() {
  const modal = document.getElementById("modal-projects");
  if (!modal) {
    console.warn("Modal Projects no encontrado todavía, reintentando...");
    setTimeout(initModalProjects, 100);
    return;
  }

  const modalContent = modal.querySelector(".modal-projects__content");
  const closeBtn = modal.querySelector(".modal-projects__close-btn");

  window.openModalProjects = function (data) {
    document.getElementById("projects-company").textContent = data.company;
    document.getElementById("projects-position").textContent = data.position;
    document.getElementById("projects-dates").textContent = data.dates;
    document.getElementById("projects-description").innerHTML = data.description;

    if (data.tools && data.tools.length > 0) {
      document.getElementById("projects-tools").innerHTML = `<strong>Tools:</strong> ${data.tools.join(", ")}`;
    } else {
      document.getElementById("projects-tools").innerHTML = "";
    }

    modalContent.style.transition = "none";
    modalContent.style.transform = "translateY(-100vh) scale(0.95)";
    modalContent.style.opacity = "0";

    void modalContent.offsetWidth;

    modal.classList.remove("modal-projects--hide");
    modal.classList.add("modal-projects--show");

    modalContent.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease";
    modalContent.style.transform = "translateY(0) scale(1)";
    modalContent.style.opacity = "1";

    document.body.classList.add("modal-open");
  };

  function closeModalProjects() {
    modalContent.style.transform = "translateY(100vh) scale(1.01)";
    modalContent.style.opacity = "0";

    setTimeout(() => {
      modal.classList.remove("modal-projects--show");
      modal.classList.add("modal-projects--hide");
      document.body.classList.remove("modal-open");
    }, 200);
  }


  closeBtn.onclick = closeModalProjects;
  modal.onclick = (e) => {
    if (e.target === modal) closeModalProjects();
  };
}

initModalProjects();
