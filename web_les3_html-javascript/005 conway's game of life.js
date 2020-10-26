/* 
conway's game of life (optional)
--------------------------------
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
*/

/* CONSOLE */

function initGrid(){

    let output = ""; // reset layout
    let inputGridSize = document.getElementById("inputGridSize").value;
    let grid = document.getElementById("grid");

    const game1 = new ConwaysGameOfLife();
    game1.setGridDimensions(inputGridSize, inputGridSize);
    output = game1.drawGrid();
    grid.innerHTML = output;
}

function toggleBlockState(e)
{
    // 1. identify the id of the clicked element
    e = e || window.event;
    e = e.target || e.srcElement;
    // alert(`CLICKED ON ${e.id}`);

    let targetBlock = document.getElementById(`${e.id}`);
    
    if(targetBlock.classList.contains("blockInactive") == true)
    {
        // switch from inactive to active
        targetBlock.classList.remove("blockInactive");
        targetBlock.classList.add("blockActive");
    }
    else
    {
        // switch from active to inactive
        targetBlock.classList.remove("blockActive");
        targetBlock.classList.add("blockInactive");
    }
}

function initGame()
{
    
}

/* CLASSES */

class ConwaysGameOfLife
{
    constructor()
    {
        this._gridWidth = 0;
        this._gridHeight = 0;
    }

    setGridDimensions(width, height)
    {
        this._gridWidth = width; // SETTER
        this._gridHeight = height; // SETTER
    }

    drawGrid()
    {
        let blockId = 1;
        let output = "";

        // 1. make rows
        for (let r = 1; r <= this._gridHeight; r++)
        {
            // 2. draw a new row
            output += `<span id="block${blockId}" class="blockBase blockClear blockInactive" onclick="toggleBlockState();"></span>`;
            blockId++;
            
            // 3. make columns
            for (let c = 1; c <= this._gridWidth; c++)
            {

                if (c < this._gridWidth)
                {
                    // 4. draw a new column
                    output += `<span id="block${blockId}" class="blockBase blockFloat blockInactive" onclick="toggleBlockState();"></span>`;
                    blockId++;
                }


            }
            
        }
        return output;
    }

    startGame()
    {

    }

    // GETTERS
    get gridWidth() { return this._gridWidth; }
    get gridHeight() { return this._gridHeight; }

    // SETTERS
    set gridWidth(width) { this._gridWidth = width; }
    set gridHeight(height) { this._gridHeight = height; }
}

    class Block
    {
        constructor(width, height, color)
        {
            this._width = width;
            this._height = height;
            this._color = color;
        }

        // GETTERS
        get width() { return this._width; }
        get height() { return this._height; }
        get color() { return this._color; }

        // SETTERS
        set width(width) { this._width = width; }
        set height(height) { this.height = height; }
        set color(color) { this._color = color; }

    }

class StillLife
{
    constructor()
    {
        this.canMove = false;
        this.blockCount = 0;

    }
}
