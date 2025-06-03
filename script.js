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

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  }

  document.querySelector(".bio h2").addEventListener("click", () => {
    alert("Hai! Ini adalah portofolio Adyatma. Terima kasih sudah melihat :)");
  });

  generatePortfolio();
});

// === TAMBAH URL KE SETIAP PROJEK ===
const portfolioData = [
  {
    src: "Frame%201.png",
    alt: "Design 1",
    title: "SIGHTMENTED.ID",
    url: "sightmented.html"
  },
  {
    src: "Frame%202.png",
    alt: "Design 2",
    title: "KOPILOAK",
    url: "kopiloak.html"
  },
  {
    src: "Frame%203.png",
    alt: "Design 3",
    title: "PORTEIGHT",
    url: "porteight.html"
  }
];

// === FUNGSI UNTUK BUAT GRID OTOMATIS DAN BISA DIKLIK ===
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

    // === BUKA HALAMAN BARU SAAT ITEM DIKLIK ===
    itemDiv.addEventListener("click", () => {
      window.open(item.url, "_blank"); // buka di tab baru
    });

    gridContainer.appendChild(itemDiv);
  });
}
