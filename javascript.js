const slider = document.getElementById("myRange");
const slideText = document.querySelector(".slidetext");
const grid = document.querySelector(".grid");

slider.oninput = function() {
    slideText.innerText = `Grid size: ${this.value}x${this.value}`;
    removeDivs(grid);
    genDivs(this.value);
}

function removeDivs (divContainer){
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
}

function genDivs(v){ 
    
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          row.appendChild(cell); 
      } 
      grid.appendChild(row); 
    } 
  }

  genDivs(16);