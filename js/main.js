// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Contact form: submits to Formspree (https://formspree.io/f/xoeqaljl) via AJAX
  // so the visitor stays on the page and sees an inline success/error message.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.textContent = "Sending...";
        status.classList.remove("ok", "error");
        status.classList.add("show");
      }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            if (status) {
              status.textContent = "Thank you — your message has been sent. We will get back to you within 1 business day.";
              status.classList.add("ok");
              status.classList.remove("error");
            }
            form.reset();
          } else {
            return response.json().then(function (data) {
              throw new Error((data && data.errors) ? data.errors.map(function (er) { return er.message; }).join(", ") : "Submission failed.");
            });
          }
        })
        .catch(function () {
          if (status) {
            status.textContent = "Sorry, something went wrong sending your message. Please try again, or contact us directly by phone.";
            status.classList.add("show", "error");
            status.classList.remove("ok");
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
