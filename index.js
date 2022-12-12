const prevNav = document.querySelector(".nav.left");
const nextNav = document.querySelector(".nav.right");
const sliders = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");

console.log(cards);
nextNav.addEventListener("click", () => {
  // const fCard = cards[0];
  // fCard.style.left = "-20px";
  // console.log(fCard.style.left);
  cards.forEach(function (card) {
    if (card.style.left) {
      const factor = Number(card.style.left.replace("px", ""));
      card.style.left = `${factor - 120}px`;
    } else {
      card.style.left = "-120px";
    }
  });
});
prevNav.addEventListener("click", () => {
  // const fCard = cards[0];
  // fCard.style.left = "-20px";
  // console.log(fCard.style.left);
  clearInterval(id);
  cards.forEach(function (card) {
    if (card.style.left) {
      const factor = Number(card.style.left.replace("px", ""));
      card.style.left = `${factor + 120}px`;
    } else {
      card.style.left = "120px";
    }
  });
});

setTimeout(() => {
  console.log("printing");
}, 5000);

const id = setInterval(() => {
  cards.forEach(function (card) {
    if (card.style.left) {
      const factor = Number(card.style.left.replace("px", ""));
      card.style.left = `${factor - 120}px`;
    } else {
      card.style.left = "-120px";
    }
  });
  console.log(new Date().toISOString());
}, 5000);
