// création du tableau

// let grille = new Array();
//
// for(let i=0; i<3; i++) {
//    grille[i] = new Array();
// }
//
// // function init tableau
// for(let i=0; i<3; i++) {
//    for(let j=0; j<3; j++) {
//       grille[i][j] = null;
//     }
//   }


// random 0 ou 1 pour faire débuter au hasard un joueur
// stocker joueur courant

// besoin d'un user.request pour demander les prénoms des 2 joueurs
// stocker les prénoms des 2 joueurs

// besoin d'un user.request - saisie des coordonnées séparées par '-'
// exemple : 1-3
// si grille[1,3] vide
// grille[1,3] = 'X' si user X ou 'O' si user O
// sinon redemander d'autres coordonnées pour le même joueur

// ecrire une fonction permettant de voir si on a une ligne (ligne, colonne ou diagonale) de 'X' ou de 'O'
// ligne : pour chaque ligne vérifier qu'on a le même caractère boucle sur les lignes
// colonne : pour chaque colonne vérifier qu'on a le même caractère boucle sur les colonnes
// 1ère diagonale
// boucle de 1 à 3
// grille[i,i] on vérifie même caractère
// 2ème diagonale
// boucle de 3 à 1
// grille[i,i] on vérifie le même caractère

// prévoir une fonction fin de jeu
// plus de places dispos : soit un compteur arrivé à 9 c'est fini, soit on parcours le tableau si plus d'espace c'est fini

// gérer les scores

// afficher le tableau

// start app
// prompt
// randomize starting player
// display a grid (& initialize state)
// handle input from player
// update state
// check if winner or tie or play again (next turn)
// player switch
// end game
// close app

// console.log("   | 1 | 2 | 3 |");
// console.log("---|---|---|---|");
// console.log(" A | X | O | X |");
// console.log("---|---|---|---|");
// console.log(" B | X | O | X |");
// console.log("---|---|---|---|");
// console.log(" C | X | O | X |");
// console.log("---|---|---|---|");

let state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPlayer = '';

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

function start_a_game() {
  console.log(renderBoard());
  currentPlayer = randomize_starting_player();
  console.log(`Player ${currentPlayer} Let's play`);
  playTurn();
}

function getCoordinate(input) {
  const coordinates = input.split("");
  const letter = coordinates[0];
  const digit = coordinates[1]-1;
  if (state[letter] && state[letter][digit] !== undefined) {
    return { letter : letter, digit : digit};
  } else {
    return null;
}

}

function handleInput(handle) {
  const coordinate = getCoordinate(handle);
  if (coordinate) {
    if (state[coordinate.letter][coordinate.digit] === null) {
    state[coordinate.letter][coordinate.digit] = currentPlayer;
    }
  }
  playTurn();
}

function checkRow(row) {
  return (row.join() === 'X,X,X' || row.join() === 'O,O,O');
}

function checkBoard() {
  if (checkRow(state.a)) return true;
  if (checkRow(state.b)) return true;
  if (checkRow(state.c)) return true;
  if (checkRow([state.a[0],state.b[0],state.c[0]])) return true;
  if (checkRow([state.a[1],state.b[1],state.c[1]])) return true;
  if (checkRow([state.a[2],state.b[2],state.c[2]])) return true;
  if (checkRow([state.a[0],state.b[1],state.c[2]])) return true;
  if (checkRow([state.a[3],state.b[2],state.c[1]])) return true;
  return false;
}

function playTurn() {
  reader.question('What is your move ? \n', handle => {
    handleInput(handle)
    console.log(renderBoard())
    if (checkBoard()) {console.log(`${currentPlayer} win !!`); reader.close(); return;}
    console.log(`Player ${swithPlayer()} Let's play`);
    playTurn();
  });
}

function swithPlayer() {
  if (currentPlayer.trim() === "X") {
    currentPlayer = "O" } else currentPlayer = "X";
  return currentPlayer;
}

function randomize_starting_player() {
  if (Math.random() <= 0.5) {
    return 'X'; } else return 'O';
}


const launch = start_a_game();
