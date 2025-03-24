const container = document.getElementById("grid-container");

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("column");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${560 / size}px`;
      square.style.height = `${560 / size}px`;

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
      });

      gridColumn.appendChild(square);
    }

    container.appendChild(gridColumn);
  }
}

document.getElementById("resize-button").addEventListener("click", resize);
// Resize button
function resize() {
  resizeValue = prompt("Type in new size value: ");

  if (resizeValue <= 0 || resizeValue > 100) {
    alert("Size should be more than 0 and less than 100");
  } else {
    createGrid(resizeValue);
  }
}

// Reset button
document.getElementById("reset-button").addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "";
  });
});

createGrid(16);
