// Data portofolio dengan URL tujuan
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

// Fungsi generate grid portfolio otomatis
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

    // Buka halaman HTML saat item diklik
    itemDiv.addEventListener("click", () => {
      window.location.href = item.url;
    });

    gridContainer.appendChild(itemDiv);
  });
}

// Jalankan saat halaman sudah dimuat
document.addEventListener("DOMContentLoaded", () => {
  generatePortfolio();
});
