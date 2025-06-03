// Fade-in animation
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

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  }
});

// Bio click alert
document.addEventListener("DOMContentLoaded", () => {
  const bioTitle = document.querySelector(".bio h2");
  if (bioTitle) {
    bioTitle.addEventListener("click", () => {
      alert("Hai! Ini adalah portofolio Adyatma. Terima kasih sudah melihat :)");
    });
  }
});

// Data portofolio (gambar + judul + URL)
const portfolioData = [
  {
    src: "IMG/Frame 1.png",
    alt: "Design 1",
    title: "SIGHTMENTED.ID",
    url: "sightmented.html"
  },
  {
    src: "IMG/Frame 2.png",
    alt: "Design 2",
    title: "KOPILOAK",
    url: "kopiloak.html"
  },
  {
    src: "IMG/Frame 3.png",
    alt: "Design 3",
    title: "PORTEIGHT",
    url: "porteight.html"
  }
];

// Fungsi generate portfolio grid otomatis
function generatePortfolio() {
  const gridContainer = document.querySelector(".grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  portfolioData.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    const h2 = document.createElement("h2");
    h2.textContent = item.title;

    overlayDiv.appendChild(h2);
    itemDiv.appendChild(img);
    itemDiv.appendChild(overlayDiv);

    // ➕ Tambahkan link ke file HTML saat diklik
    itemDiv.addEventListener("click", () => {
      window.location.href = item.url;
    });

    gridContainer.appendChild(itemDiv);
  });
}

// Inisialisasi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  generatePortfolio();
});
