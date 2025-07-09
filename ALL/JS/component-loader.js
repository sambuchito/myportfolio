function loadComponent(id, htmlUrl, scriptUrl = null) {
  fetch(htmlUrl)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (scriptUrl) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch((err) =>
      console.error(`❌ Error loading ${htmlUrl}:`, err)
    );
}

loadComponent("navigation-component", "./ALL/COMPONENTS/navigation.html");
loadComponent("hero-component", "./ALL/COMPONENTS/hero.html");
loadComponent("more-about-component", "./ALL/COMPONENTS/more-about.html");
loadComponent("projects-component", "./ALL/COMPONENTS/projects.html");
loadComponent("skills-component", "./ALL/COMPONENTS/skills.html");
loadComponent("contact-component", "./ALL/COMPONENTS/contact.html");
loadComponent("footer-component", "./ALL/COMPONENTS/footer.html");
loadComponent("social-icons-component", "./ALL/COMPONENTS/social-icons.html");
loadComponent(
  "modal-skills-component",
  "./ALL/COMPONENTS/modal-skills.html",
  "./ALL/JS/modal-skills.js"
);
loadComponent(
  "modal-component",
  "./ALL/COMPONENTS/modal.html",
  "./ALL/JS/modal.js"
);
