import {Board} from "./board/board.js";

let board = new Board();
let cellSize = 25;
let height = 450;
board.GenerateBoard(cellSize, height);
