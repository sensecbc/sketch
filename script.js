const gridSize = 600;
let rows = 16; //16x16
let cols = 16; //16x16
let resizeButton = document.querySelector("#size");

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`; //600px comprimento
sketchArea.style.height = `${gridSize}px`; //600px altura

function createGridCells(value) {
  //funcao para criar grid
  for (i = 0; i < cols * rows; i++) {
    //cols * rows pq vai ser o nr de quadrados q precisamos para preencher um 16x16 so com quadrados perfeitos
    const gridCell = document.createElement("div"); //cria a div
    gridCell.style.width = `${gridSize / cols - 2}px`; // 600 / 16 = 37.5 q e o comprimento perfeito para o quadrado e aqui estamos a dar set ao width
    gridCell.style.height = `${gridSize / rows - 2}px`; // mesma coisa mas para a altura
    gridCell.classList.add("cell"); //adiciona uma class para alterarmos o cs
    sketchArea.appendChild(gridCell); //adiciona o gridcell ao container sketcharea

    gridCell.addEventListener("mouseover", blackColor); //mouse hover
    function blackColor() {
      gridCell.style.backgroundColor = "black"; //muda a cor de cada quadrado p preto
    }
  }
}

createGridCells();

//gridCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; rgb coloring

resizeButton.addEventListener("click", resize);

function resize() {
  let promptUser = prompt(
    "Resize the paint area by telling us the new x and y"
  );
  createGridCells(promptUser);
}
