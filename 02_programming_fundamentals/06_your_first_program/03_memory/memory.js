// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let myCards = [];
let chaine = ["*","*","*","*","*","*"];
let index = [];

function askCards() {
  reader.question("What's your cards (separated by -)? ", myCards => {displayCards(myCards);});
}

function shuffle(a)
{
  let j = 0;
  let valI = "";
  let valJ = "";
  let l = a.length - 1;
  while(l > -1)
  {
    j = Math.floor(Math.random() * l);
    valI = a[l];
    valJ = a[j];
    a[l] = valJ;
    a[j] = valI;
    l = l - 1;
  }
  return a;
}


function displayCards(tabCards) {
  let tabCards2 = tabCards.split("-",2);
  console.log(tabCards2);
  if (cards[parseInt(tabCards2[0]-1,10)] !== cards[parseInt(tabCards2[1]-1,10)]) {
    for (let i = 0; i < cards.length; i++) {
      if (index.indexOf(i) === -1 ) {
        console.log("i:" + i);
        console.log("index[i]:" + index[i]);
        chaine[i] = "*";
      }

    }
  } else  {
    for (let i = 0; i <= cards.length; i++) {
      if (parseInt(tabCards2[0],10)-1 === i || parseInt(tabCards2[1],10)-1 === i) {
        chaine[i] = cards[i];
        index.push(i);
      }
    }
  }

  //if (parseInt(tabCards2[0],10) === i || parseInt(tabCards2[1],10) === i) {
  //  chaine.push(cards[i-1]);
  //}   else {
  //  chaine.push("*");
  //}
  console.log(chaine);
  askCards();
}

shuffle(cards);
console.log(cards);
askCards();
