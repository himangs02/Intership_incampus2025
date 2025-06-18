document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const originalCard = document.querySelector(".product-card");

  for (let i = 1; i <=60; i++) {
    const clonedCard = originalCard.cloneNode(true);
    clonedCard.id = `product-card-${i}`;
    container.appendChild(clonedCard);
  }

  document.querySelectorAll(".product-card").forEach((card, index) => {
    card.style.gridColumn = (index % 4) + 1;
    card.style.gridRow = Math.floor(index / 4) + 1;
  });
});