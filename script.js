// THOA landing page interactions + lightweight analytics hooks.
// When you connect Google Analytics 4, the helper below will automatically
// send events for buttons carrying data-track="...".

document.addEventListener("DOMContentLoaded", () => {
  // Smooth active navigation state
  const sections = document.querySelectorAll("main section[id], footer[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    });
  }, { threshold: 0.45 });

  sections.forEach(section => observer.observe(section));

  // CTA event tracking.
  document.querySelectorAll("[data-track]").forEach(element => {
    element.addEventListener("click", () => {
      const eventName = element.dataset.track;

      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          page_location: window.location.href
        });
      }

      console.log(`[THOA analytics] ${eventName}`);
    });
  });
});
