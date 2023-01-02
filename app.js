const container = document.querySelector('.container')




let gridSize = 16;

// Adding event listner to the button
document.querySelector(".button").addEventListener('click', buttonClick);
function buttonClick(){
      gridSize =prompt("Enter the square per side: ");
      addGrid(gridSize)
}

addGrid(gridSize)

function addGrid(gridSize){
    container.innerHTML = ''
    for(var i =0; i<gridSize; i++){  
        const grid_row = document.createElement('div')
        grid_row.classList.add('grid_Row')
        container.appendChild(grid_row)
        for (var j = 0;j<gridSize;j++){
            const grid_Item = document.createElement('div')
            grid_Item.classList.add('grid_Item')
            grid_row.appendChild(grid_Item)
        }
    }
}




//Using event delegation to target children of the grid
container.addEventListener("mouseover", function (e){
    // Adding the "active" class to only divs which  mouse hovers
    if (e.target.matches(".grid_Item")){
        e.target.classList.add("active");
    }
})