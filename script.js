const gridSize = 600;
let rows = 16; //16x16
let cols = 16; //16x16

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`; //600px comprimento
sketchArea.style.height = `${gridSize}px`; //600px altura

function createGridCells() {
  //funcao para criar grid
  for (i = 0; i < cols * rows; i++) {
    //cols * rows pq vai ser o nr de quadrados q precisamos para preencher um 16x16 so com quadrados perfeitos
    const gridCell = document.createElement("div"); //cria a div
    gridCell.style.width = `${gridSize / cols - 2}px`; // 600 / 16 = 37.5 q e o comprimento perfeito para o quadrado e aqui estamos a dar set ao width
    gridCell.style.height = `${gridSize / rows - 2}px`; // mesma coisa mas para a altura
    gridCell.classList.add("cell"); //adiciona uma class para alterarmos o cs
    sketchArea.appendChild(gridCell); //adiciona o gridcell ao container sketcharea
  }
}

createGridCells();
