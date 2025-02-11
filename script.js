const gridSize = 600;
let rows = 16; //16x16
let cols = 16; //16x16
let resizeButton = document.querySelector("#size");
const sketchArea = document.querySelector("#sketch-area");
let fadeButton = document.querySelector("#fade");
let randomButton = document.querySelector("#random");

sketchArea.style.width = `${gridSize}px`; //600px comprimento
sketchArea.style.height = `${gridSize}px`; //600px altura

function createGridCells() {
  //funcao para criar grid
  for (i = 0; i < cols * rows; i++) {
    //cols * rows pq vai ser o nr de quadrados q precisamos para preencher um 16x16 so com quadrados perfeitos
    const gridCell = document.createElement("div"); //cria a div
    gridCell.style.width = `${gridSize / cols - 2}px`; // 600 / 16 = 37.5 q e o comprimento perfeito para o quadrado e aqui estamos a dar set ao width
    gridCell.style.height = `${gridSize / rows - 2}px`; // mesma coisa mas para a altura
    gridCell.classList.add("cell"); //adiciona uma class para alterarmos o css
    sketchArea.appendChild(gridCell); //adiciona o gridcell ao container sketcharea

    gridCell.addEventListener("mouseover", blackColor); //mouse hover
    function blackColor() {
      gridCell.style.backgroundColor = "black"; //muda a cor de cada quadrado p preto
    }

    randomButton.addEventListener("click", random);
    function random() {
      gridCell.style.backgroundColor = "white";
      let gridArray = [];
      gridArray.push(gridCell);
      console.log(gridArray);

      gridArray.forEach((item) => {
        item.addEventListener("mouseover", hover);
        function hover() {
          item.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
        }
      });
    }

    fadeButton.addEventListener("click", fade);
    function fade() {
      let gridArray = [];
      gridArray.push(gridCell);
      console.log(gridArray);
      gridCell.style.backgroundColor = "white";
      gridCell.addEventListener("mouseover", hover2);
      function hover2() {
        gridCell.style.backgroundColor = "black";
        let currentOpacity = gridCell.style.opacity;
        if (currentOpacity) {
          gridCell.style.opacity = Number(currentOpacity) + 0.1;
        } else {
          gridCell.style.opacity = 0.1;
        }
      }
    }
  }
}

createGridCells();

//gridCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; rgb coloring

resizeButton.addEventListener("click", changeSize);
function changeSize() {
  let promptUser = Number(prompt("type a number from 1 to 100"));

  if (promptUser > 100) {
    let prompt2 = prompt("I SAID A NUMBER FROM 1 TO 100");
  } else if (promptUser < 101) {
    sketchArea.innerHTML = ""; //apaga o conteudo do sketcharea. da clear ao html
    createGridCellsTwo(promptUser);
  }

  function createGridCellsTwo() {
    for (i = 0; i < promptUser * promptUser; i++) {
      const gridCell = document.createElement("div"); //cria a div
      gridCell.style.width = `${gridSize / promptUser - 2}px`; // 600 / 16 = 37.5 q e o comprimento perfeito para o quadrado e aqui estamos a dar set ao width
      gridCell.style.height = `${gridSize / promptUser - 2}px`; // mesma coisa mas para a altura
      gridCell.classList.add("cell"); //adiciona uma class para alterarmos o css
      sketchArea.appendChild(gridCell); //adiciona o gridcell ao container sketcharea

      gridCell.addEventListener("mouseover", blackColor); //mouse hover
      function blackColor() {
        gridCell.style.backgroundColor = "black"; //muda a cor de cada quadrado p preto
      }

      randomButton.addEventListener("click", random);
      function random() {
        gridCell.style.backgroundColor = "white";
        let gridArray = [];
        gridArray.push(gridCell);
        console.log(gridArray);

        gridArray.forEach((item) => {
          item.addEventListener("mouseover", hover);
          function hover() {
            item.style.backgroundColor = `rgb(${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )})`;
          }
        });
      }

      fadeButton.addEventListener("click", fade);
      function fade() {
        let gridArray = [];
        gridArray.push(gridCell);
        console.log(gridArray);
        gridCell.style.backgroundColor = "white";
        gridCell.addEventListener("mouseover", hover2);
        function hover2() {
          gridCell.style.backgroundColor = "black";
          let currentOpacity = Number(gridCell.style.opacity);
          gridCell.style.opacity = currentOpacity + 0.1;
        }
      }
    }
  }
}
