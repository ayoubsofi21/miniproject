const prompt = require("prompt-sync")();

let tab = [];
let num1, num2;

function saisirNombres() {
  num1 = Number(prompt("Donnez-moi un numéro 1 "));
  num2 = Number(prompt("Donnez-moi un numéro 2 "));
}

function Addition() {
  let somme = num1 + num2;
  tab.push(somme);
  console.table(tab);
}

function Soustraction() {
  let resultat = num1 - num2;
  console.log("Résultat de la soustraction =", resultat);
  tab.push(resultat);
}
function Multiplication() {
  let multi = num1 * num2;
  // console.table("la multiblication est ");
  tab.push(multi);
  console.table(tab);
}
function Division() {
  if (num2 === 0) {
    console.log("Erreur : division par zéro !");
  }
  let divs = num1 / num2;
  console.log("la divition est " + divs);
  tab.push(divs);
}
function Puissance() {
  let resul = Math.pow(num1, num2);
  console.log(`${num1}^${num2}= ${resul}`);
  tab.push(resul);
}
function RacineCare() {
  let num = Number(prompt("donner moi un number pour  le Racine"));
  if (num < 0) {
    console.log("Erreur : racine carrée d'un nombre négatif !");
    return;
  }

  let resultat = Math.sqrt(num);
  console.log("√" + num + " = " + resultat);

  tab.push(`le Racine care de ${num} est :  ${resultat}`);
}
function Factorielle() {
  let n = Number(prompt("donner moi un nombre possitive"));
  if (n < 0) {
    console.log("erreur  :  le nombre doit etre possitive");
  }
  if (n === 1 || n === 0) {
    console.log(`${n}!= 1`);
  } else {
    let numberf = 1;
    for (let el = 2; el <= n; el++) {
      numberf = numberf * el;
    }
    console.log(`${n}!= ${numberf}`);
    tab.push(numberf);
  }
}
function AllData() {
  console.table(tab);
}

while (true) {
  const operation = prompt("enter an operation : ");
  if (operation === "by") {
    console.log("good by ");
    break;
  }

  switch (operation) {
    case "a":
      saisirNombres();
      Addition();
      break;
    case "s":
      saisirNombres();
      Soustraction();
      break;
    case "m":
      saisirNombres();
      Multiplication();
      break;
    case "d":
      saisirNombres();
      Division();
      break;
    case "p":
      saisirNombres();
      Puissance();
      break;
    case "r":
      RacineCare(4);
      break;
    case "f":
      Factorielle();
    case "data":
      AllData();
      break;
    default:
      break;
  }
}
