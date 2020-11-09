import { Cell } from "./cell.js";

const gridArea = document.querySelector(".grid-area");
const grid = document.getElementById("grid");


// define Board
export function Board() {
    this.startPosR = 0;
    this.startPosC = 0;
    this.endPosR = 0;
    this.endPosC = 0;
    this.board = {};
    this.mouseDownOnCell = false;
    this.mouseDownOnSourcePoint = false;
    this.mouseDownOnEndPoint = false;
    this.algoToRun = "";
    this.speed = "medium";
    this.mazeType = "";
}

Board.prototype.initilize = function (cellSize, height) {
    this.GenerateBoard(cellSize, height);
    this.addEventListeners();
}

// define properties
Board.prototype.GenerateBoard = function (cellSize, height) {
    let width = gridArea.clientWidth;
    let cols = parseInt(width / cellSize);
    let rows = parseInt(height / cellSize);

    let source_r = parseInt(Math.random() * 100) % rows;
    let end_r = parseInt(Math.random() * 100) % rows;
    let source_c = parseInt(Math.random() * 100) % parseInt(cols / 2);
    let end_c = cols - parseInt(Math.random() * 100) % parseInt(cols / 2);

    this.board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        this.board[i] = new Array(cols);
        let grid_row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            this.board[i][j] = new Cell(cellSize);
            this.board[i][j].Initilize();
            this.board[i][j].id = `${i},${j}`;
            grid_row.appendChild(this.board[i][j].element);
            grid.appendChild(grid_row);
        }
    }

    this.startPosR = source_r;
    this.startPosC = source_c;
    this.endPosR = end_r;
    this.endPosC = end_c;
    this.board[source_r][source_c].isSource = true;
    this.board[end_r][end_c].isEnd = true;
    this.board[source_r][source_c].element.classList.toggle("make-source");
    this.board[end_r][end_c].element.classList.toggle("make-end");
}


// add event listeners
Board.prototype.addEventListeners = function () {
    let board = this.board;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let cell = board[i][j];

            // Add Listeners
            cell.addEventListner("mousedown", (e) => {
                e.preventDefault();
                if (cell.isSource)
                    Board.mouseDownOnSourcePoint = true;
                else if (cell.isEnd)
                    Board.mouseDownOnEndPoint = true;
                else
                    Board.mouseDownOnCell = true;

                drag(cell);
            });

            cell.addEventListner("mouseup", (e) => {
                e.preventDefault();

                if (Board.mouseDownOnSourcePoint)
                    [this.startPosR, this.startPosC] = cell.id.split(",");
                else if (Board.mouseDownOnEndPoint)
                    [this.endPosR, this.endPosC] = cell.id.split(",")

                Board.mouseDownOnCell = false;
                Board.mouseDownOnEndPoint = false;
                Board.mouseDownOnSourcePoint = false;
            });

            cell.addEventListner("mousemove", (e) => {
                e.preventDefault();
                drag(cell)
            });
            cell.addEventListner("mouseleave", () => { dragLeave(cell); });


            function drag(ele) {
                if (Board.mouseDownOnCell) {
                    if (!ele.isWall && !ele.isSource && !ele.isEnd) {
                        ele.element.classList.toggle("make-wall");
                        ele.isWall = !ele.isWall;
                    }
                } else if (Board.mouseDownOnSourcePoint) {
                    if (!ele.isSource) {
                        ele.element.classList.toggle("make-source");
                        ele.isSource = !ele.isSource;
                    }
                } else if (Board.mouseDownOnEndPoint) {
                    if (!ele.isEnd) {
                        ele.element.classList.toggle("make-end");
                        ele.isEnd = !ele.isEnd;
                    }
                }
            }

            function dragLeave(ele) {
                if (Board.mouseDownOnSourcePoint) {
                    if (ele.isSource) {
                        ele.element.classList.toggle("make-source");
                        ele.isSource = !ele.isSource;
                    }
                } else if (Board.mouseDownOnEndPoint) {
                    if (ele.isEnd) {
                        ele.element.classList.toggle("make-end");
                        ele.isEnd = !ele.isEnd;
                    }
                }
            }
        }
    }
}

Board.prototype.clearAll = function() {
    this.startPosR = 0;
    this.startPosC = 0;
    this.endPosR = 0;
    this.endPosC = 0;
    this.algoToRun = "";
    this.speed = "medium";
    this.mazeType = "";

    this.removeWalls();
}


Board.prototype.removeWalls = function() {
    for (let i=0 ;i<this.board.length; i++) {
        for(let j=0; j<this.board[i].length; j++) {
            let cell = this.board[i][j];
            if(cell.isWall) {
                cell.element.classList.remove("make-wall");
            }
        }
    }
}