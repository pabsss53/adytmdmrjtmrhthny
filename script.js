// Fade-in animation existing code
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 150 * index);
  });

  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });
});

// Lightbox existing code
document.querySelectorAll(".item img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.src}" alt="Preview">
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  });
});

// Bio click alert existing code
document.querySelector(".bio h2").addEventListener("click", () => {
  alert("Hai! Ini adalah portofolio Adyatma. Terima kasih sudah melihat :)");
});
