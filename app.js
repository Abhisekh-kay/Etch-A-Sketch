const container = document.querySelector('.container')
const grid = document.createElement('div')
grid.classList.add('grid')
container.appendChild(grid)

let gridSize = '16';

// Adding event listner to the button
document.querySelector(".button").addEventListener('click', buttonClick);
function buttonClick(){
      gridSize =prompt("Enter the square per side: ");
    //  for(var i =0; i<gridSize*gridSize; i++){  
    //     const grid_Item = document.createElement('div')
    //     grid_Item.classList.add('grid_Item')
    //     grid.appendChild(grid_Item)
    // }
}

for(var i =0; i<gridSize*gridSize; i++){  
    const grid_Item = document.createElement('div')
    grid_Item.classList.add('grid_Item')
    grid_Item.remo
    grid.appendChild(grid_Item)
}


//Using event delegation to target children of the grid
grid.addEventListener("mouseover", function (e){
    // Adding the "active" class to only divs which  mouse hovers
    if (e.target.matches(".grid_Item")){
        e.target.classList.add("active");
    }
})
console.log(gridSize)