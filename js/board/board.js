import { Cell } from "./cell.js";

const gridArea = document.querySelector(".grid-area");
const grid = document.getElementById("grid");

function Board() {
    this.startPos = {};
    this.endPos = {};
    this.board = {};
}

Board.prototype.GenerateBoard = function (cellSize, height) {
    let width = gridArea.clientWidth;
    let cols = parseInt(width / cellSize);
    let rows = parseInt(height / cellSize);

    this.board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        this.board[i] = new Array(cols);
        let grid_row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            this.board[i][j] = new Cell(cellSize);
            this.board[i][j].Initilize();
            grid_row.appendChild(this.board[i][j].element);
            grid.appendChild(grid_row);
        }
    }
}

export { Board };