function loadComponent(id, htmlUrl, jsUrl) {
  fetch(htmlUrl)
    .then((res) => res.text())
    .then((html) => {
      const container = document.getElementById(id);
      container.innerHTML = html;

      if (jsUrl) {
        const script = document.createElement("script");
        script.src = jsUrl;
        script.defer = true;
        document.body.appendChild(script);
        console.log(`✅ Cargado JS: ${jsUrl}`);
      }

      console.log(`✅ Componente cargado: ${htmlUrl}`);
    })
    .catch((err) =>
      console.error(`❌ Error cargando ${htmlUrl}:`, err)
    );
}


loadComponent("navigation-component", "./ALL/COMPONENTS/navigation.html");
loadComponent("hero-component", "./ALL/COMPONENTS/hero.html");
loadComponent("more-about-component", "./ALL/COMPONENTS/more-about.html");
loadComponent("projects-component", "./ALL/COMPONENTS/projects.html", "./ALL/JS/modal.js");
loadComponent("skills-component", "./ALL/COMPONENTS/skills.html", "./ALL/JS/modal-skills.js");

loadComponent("contact-component", "./ALL/COMPONENTS/contact.html");
loadComponent("footer-component", "./ALL/COMPONENTS/footer.html");
loadComponent(
  "social-icons-component",
  "./ALL/COMPONENTS/social-icons.html",
  () => {
    console.log("🔄 Social Icons cargado, inicializando Dark Mode...");
    initDarkMode();
  }
);
loadComponent("modal-component", "./ALL/COMPONENTS/modal.html", "./ALL/JS/modal.js");
loadComponent(
  "modal-skills-component",
  "./ALL/COMPONENTS/modal-skills.html",
  "./ALL/JS/modal-skills.js",
  initModalSkills
);

loadComponent(
  "modal-projects-component",
  "./ALL/COMPONENTS/modal.html",
  initModalProjects
);

