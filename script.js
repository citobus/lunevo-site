const revealElements = document.querySelectorAll(".section, .flow-card, .future-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
