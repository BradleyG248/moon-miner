let recruits = 200000;
let clickModifier = 1;
let autoModifier = 0;
let turn = true;
let clickUpgrades = [
  {
    name: "spy",
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  {
    name: "advisor",
    price: 1000,
    quantity: 0,
    multiplier: 5
  },
  {
    name: "general",
    price: 5000,
    quantity: 0,
    multiplier: 10
  }
]
let automaticUpgrades = [
  {
    name: "village",
    price: 500,
    quantity: 0,
    multiplier: 2
  },
  {
    name: "booth",
    price: 200,
    quantity: 0,
    multiplier: 1
  },
  {
    name: "city",
    price: 2000,
    quantity: 0,
    multiplier: 4
  },
  {
    name: "district",
    price: 5000,
    quantity: 0,
    multiplier: 10
  }
]
function update() {
  document.getElementById("recruit-stat").textContent = ": " + recruits;
}
function clickUpdate(type) {
  document.getElementById(clickUpgrades[type].name).textContent = "" + clickUpgrades[type].price;
  document.getElementById("click-multipliers").textContent = "Recruits per speech: " + clickModifier;
}
function autoUpdate(type) {
  document.getElementById(automaticUpgrades[type].name + "-cost").textContent = "" + automaticUpgrades[type].price;
  document.getElementById("auto-multipliers").textContent = "" + autoModifier;
}
function turnChange() {
  turn = true;
}
function recruit() {
  if (turn) {
    recruits += clickModifier;
    update();
    turn = false;
    setTimeout(turnChange, 100)
  }
}
function setAutoImages(type) {
  document.getElementById(automaticUpgrades[type].name + "-" + automaticUpgrades[type].quantity).src = automaticUpgrades[type].name + ".png";
}
function buyClickUpgrade(type) {
  if (recruits >= clickUpgrades[type].price) {
    clickUpgrades[type].quantity++;
    recruits -= clickUpgrades[type].price;
    clickUpgrades[type].price = Math.floor(clickUpgrades[type].price *= 2.5);
    setClickUpgrades();
    clickUpdate(type);
    update();
  }
  else {
    alert("Not Enough!!!");
  }
}
function buyAutoUpgrade(type) {
  if (recruits >= automaticUpgrades[type].price) {
    automaticUpgrades[type].quantity++;
    recruits -= automaticUpgrades[type].price;
    automaticUpgrades[type].price = Math.floor(automaticUpgrades[type].price *= 1.1);
    setAutoUpgrades();
    autoUpdate(type);
    setAutoImages(type);
  }
  else {
    alert("Not Enough!!!");
  }
  update();
}
function setAutoUpgrades() {
  let mod = 0;
  for (let i = 0; i < automaticUpgrades.length; i++) {
    mod += (automaticUpgrades[i].quantity * automaticUpgrades[i].multiplier);
  }
  autoModifier = mod;
}
function setClickUpgrades() {
  let mod = 1;
  for (let i = 0; i < clickUpgrades.length; i++) {
    mod += (clickUpgrades[i].quantity * clickUpgrades[i].multiplier);
  }
  clickModifier = mod;
}
function collectAutoUpgrades() {
  recruits += autoModifier;
  update();
}
function startAuto() {
  setInterval(collectAutoUpgrades, 1000);
}