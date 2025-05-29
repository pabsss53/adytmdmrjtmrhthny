document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollButton");

  scrollBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});
