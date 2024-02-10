const sections = document.querySelectorAll("section, header, footer");

const options = {
  threshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList.toggle("show", entry.isIntersecting);
  }
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
