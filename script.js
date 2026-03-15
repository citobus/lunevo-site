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

const appStoreBadgeLink = document.getElementById("app-store-badge-link");

if (appStoreBadgeLink) {
  appStoreBadgeLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("This app is still in development, please check back soon.");
  });
}
