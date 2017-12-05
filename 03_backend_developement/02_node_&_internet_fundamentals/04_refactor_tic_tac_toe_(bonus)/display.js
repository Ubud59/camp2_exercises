

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(mystate, letter) {
  // console.log("mystate2:");
  const cells = mystate[letter];
  // console.log("cells:", cells);
  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard(mystate) {
  const letters = Object.keys(mystate);
  // console.log("letters:",letters);
  const rows = letters.map((letters) => renderRow(mystate, letters)).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

module.exports = {
  renderRow : renderRow,
  renderCell : renderCell,
  renderBoard : renderBoard
};
