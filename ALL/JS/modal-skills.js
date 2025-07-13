function initModalSkills() {
  const modal = document.getElementById("modal-skills");
  if (!modal) {
    console.warn("Modal Skills no encontrado todavía, reintentando...");
    setTimeout(initModalSkills, 100);
    return;
  }

  const modalContent = modal.querySelector(".modal-skills__content");
  const closeBtn = modal.querySelector(".modal-skills__close-btn");

  window.openModalSkills = function (data) {
    document.getElementById("skills-company").textContent = data.company;
    document.getElementById("skills-position").textContent = data.position;
    document.getElementById("skills-dates").textContent = data.dates;
    document.getElementById("skills-description").innerHTML = data.description;

    if (data.tools && data.tools.length > 0) {
      document.getElementById("skills-tools").innerHTML = `<strong>Skills:</strong> ${data.tools.join(", ")}`;
    } else {
      document.getElementById("skills-tools").innerHTML = "";
    }

    modalContent.style.transition = "none";
    modalContent.style.transform = "translateX(-100vw) scale(0.95)";
    modalContent.style.opacity = "0";

    void modalContent.offsetWidth;

    modal.classList.remove("modal-skills--hide");
    modal.classList.add("modal-skills--show");

    modalContent.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease";
    modalContent.style.transform = "translateX(0) scale(1)";
    modalContent.style.opacity = "1";

    document.body.classList.add("modal-open");
  };

  function closeModalSkills() {
    modalContent.style.transform = "translateX(100vw) scale(1.01)";
    modalContent.style.opacity = "0";

    setTimeout(() => {
      modal.classList.remove("modal-skills--show");
      modal.classList.add("modal-skills--hide");
      document.body.classList.remove("modal-open");
    }, 200);
  }

  // Listeners solo para este modal
  closeBtn.onclick = closeModalSkills;
  modal.onclick = (e) => {
    if (e.target === modal) closeModalSkills();
  };
}

initModalSkills();