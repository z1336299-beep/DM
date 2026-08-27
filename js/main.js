// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Contact form: static hosting has no backend, so this is a front-end demo only.
  // Before launch, connect the <form id="contact-form"> to a form service
  // (e.g. Formspree / Getform) or a simple backend endpoint, and remove the
  // preventDefault() logic below.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent = "Submitted (demo only). Connect a form service or backend before launch to actually receive messages.";
        status.classList.add("show", "ok");
      }
      form.reset();
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
