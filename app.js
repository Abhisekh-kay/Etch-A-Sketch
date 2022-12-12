const container = document.querySelector('.container')
const grid = document.createElement('div')
grid.classList.add('grid')
container.appendChild(grid)

for(var i =0; i<256; i++){  
    const grid_Item = document.createElement('div')
    grid_Item.classList.add('grid_Item')
    grid.appendChild(grid_Item)
}

//Using event delegation to target children of the grid
grid.addEventListener("mouseover", function (e){
    // Adding the "active" class to only divs with a "grid_Item" class
    if (e.target.matches(".grid_Item")){
        e.target.classList.add("active");
    }
})