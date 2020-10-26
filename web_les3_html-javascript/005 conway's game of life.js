/* 
conway's game of life (optional)
--------------------------------
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
*/

/* CONSOLE */

function runGame(){

    let output = ""; // reset layout

    let inputGridSize = document.getElementById("inputGridSize").value;

    const game1 = new ConwaysGameOfLife();
    game1.setGridDimensions(inputGridSize, inputGridSize);
    
    output = game1.drawGrid();

    document.getElementById("grid").innerHTML = output;
}

/* CLASSES */

class ConwaysGameOfLife
{
    constructor()
    {
        this._gridWidth = 0;
        this._gridHeight = 0;
    }

    drawGrid()
    {
        let output = "";
        for (let i = 0; i < this._gridWidth; i++)
        {
            for (let j = 0; j < this.gridHeight; j++)
            {
                if (j === this.gridHeight-1)
                {
                    output += `<span style="display: block; margin-right: -1px; margin-bottom: -1px; border: 1px solid #929292; color: white; width: 5px; height: 5px"></span>`;
                }
                else
                {
                    output += `<span style="display: block; float:left; margin-right: -1px; margin-bottom: -1px; border: 1px solid #929292; color: white; width: 5px; height: 5px"></span>`;
                }
            }
            
        }
        return output;
    }

    startGame()
    {

    }

    setGridDimensions(width, height)
    {
        this._gridWidth = width; // SETTER
        this._gridHeight = height; // SETTER
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

    class Grid
    {

    }



class StillLife
{
    constructor()
    {
        this.canMove = false;
        this.blockCount = 0;

    }
}
