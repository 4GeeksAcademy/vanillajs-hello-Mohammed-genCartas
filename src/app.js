const palos = ["heart", "diamond", "spade", "club"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function generarCarta() {
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  const cardContainer = document.querySelector("#card-container .card");

  cardContainer.classList.remove(...palos);
  cardContainer.classList.add(paloAleatorio);

  cardContainer.innerHTML = `${valorAleatorio} ${obtenerSimbolo(
    paloAleatorio
  )}`;
}

function obtenerSimbolo(palo) {
  switch (palo) {
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    case "spade":
      return "♠";
    case "club":
      return "♣";
  }
}

document
  .getElementById("new-card-button")
  .addEventListener("click", generarCarta);

window.onload = generarCarta;

setInterval(generarCarta, 10000);
