const container = document.querySelector('.container')


// Adding event listner to the button
document.querySelector(".button").addEventListener('click', buttonClick);
function buttonClick(){
      gridHeight =prompt("Enter the height: ");
      gridWidth = prompt("Enter the width")
      addGrid(gridHeight, gridWidth)
}

addGrid(10, 16)

function addGrid(height, width){
    container.innerHTML = ''
    for(var i =0; i<height; i++){  
        const grid_row = document.createElement('div')
        grid_row.classList.add('grid_Row')
        container.appendChild(grid_row)
        for (var j = 0;j<width;j++){
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