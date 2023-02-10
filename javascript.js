const slider = document.getElementById("myRange");
const slideText = document.querySelector(".slidetext");
const grid = document.querySelector(".grid");

let currentMode;

let mouseDown = false;

document.body.addEventListener('mousedown', () => (mouseDown = true));
document.body.addEventListener('mouseup', () => (mouseDown = false));

const rainbowBtn = document.getElementById("rainbowBtn");
const blackBtn = document.getElementById("blackBtn");
const eraserBtn = document.getElementById("eraserBtn");

blackBtn.addEventListener('click', () => {
    activateButton('black');
});
eraserBtn.addEventListener('click', () => {
    activateButton('eraser');
});
rainbowBtn.addEventListener('click', () => {
    activateButton('rainbow');
});

function activateButton (btn){
    if (currentMode === btn) return;
    switch (currentMode){
        case 'black':
            blackBtn.classList.remove('active');
            break;
        case 'eraser':
            eraserBtn.classList.remove('active');
            break;
        case 'rainbow':
            rainbowBtn.classList.remove('active');
            break;
    }

    switch (btn){
        case 'black':
            blackBtn.classList.add('active');
            currentMode = 'black';
            break;
        case 'eraser':
            eraserBtn.classList.add('active');
            currentMode = 'eraser';
            break;
        case 'rainbow':
            rainbowBtn.classList.add('active');
            currentMode = 'rainbow';
            break;
    }
}

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
          cell.addEventListener('mouseover', changeColor)
          cell.addEventListener('mousedown', changeColor) 
          row.appendChild(cell); 
      } 
      grid.appendChild(row); 
    }
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    switch (currentMode){
        case 'black':
            this.style.backgroundColor = 'black';
            break;
        case 'eraser':
            this.style.backgroundColor = 'white'
            break;
        case 'rainbow':
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
            break;
    }

}

window.onload = () => {
    genDivs(16);
    activateButton('black');
}

  
  