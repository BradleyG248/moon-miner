let recruits = 0;
let clickModifier = 1;
let autoModifier = 0;
let clickUpgrades = [
  {
    name: 'spy',
    price: 100,
    quantity: 0,
    multiplier: 1
  }
]
let automaticUpgrades = [
  {
    name: "village",
    price: 20,
    quantity: 0,
    multiplier: 4
  },
  {
    name: "hut",
    price: 50,
    quantity: 0,
    multiplier: 5
  }
]
function update() {
  document.getElementById("recruit-stat").textContent = ": " + recruits;
}
function recruit() {
  recruits += clickModifier;
  update();
}
function buyClickUpgrade(type) {
  if (recruits >= clickUpgrades[type].price) {
    clickUpgrades[type].quantity++;
    recruits -= clickUpgrades[type].price;
    setClickUpgrades();
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
    console.log(automaticUpgrades[type].quantity);
    setAutoUpgrades();
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