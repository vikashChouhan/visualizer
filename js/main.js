import {Board} from "./board/board.js";
import {startVisualize} from "./handlers.js";

const visualizeBtn = document.getElementById("visualize-btn");
const clearBtn = document.getElementById("clear-btn");

const selectBFS = document.getElementById("select-BFS");
const selectDFS = document.getElementById("select-DFS");
const selectDijkstra = document.getElementById("select-dijkstra");
const selectPriem = document.getElementById("select-priem");

const selectMazeTypeRandom = document.getElementById("select-mazetype-random");

const selectSpeedSlow  = document.getElementById("select-speed-slow");
const selectSpeedMedium  = document.getElementById("select-speed-medium");
const selectSpeedFast = document.getElementById("select-speed-fast");
const selectSpeedVeryFast  = document.getElementById("select-speed-veryfast");

let board = new Board();
let cellSize = 30;
let height = 450;
board.initilize(cellSize, height);





// event listeners

// listerner for clearall-btn
clearBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    board.clearAll();
    visualizeBtn.innerText = "Start";
});

// listerner for algo selected
visualizeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    startVisualize(board);
});

selectBFS.addEventListener("click", (e)=>{
    e.preventDefault();
    board.algoToRun = "BFS";
    visualizeBtn.innerText = "Start "+"BFS";
});

selectDFS.addEventListener("click", (e)=>{
    e.preventDefault();
    board.algoToRun = "DFS";
    visualizeBtn.innerText = "Start "+"DFS";
});

selectDijkstra.addEventListener("click", (e)=>{
    e.preventDefault();
    board.algoToRun = "dijkstra";
    visualizeBtn.innerHTML = "Start "+"Dijkstra";
});

selectPriem.addEventListener("click", (e)=>{
    e.preventDefault();
    board.algoToRun = "priem";
    visualizeBtn.innerHTML = "Start "+"Priems";
});


// listerners for speed selected
selectSpeedSlow.addEventListener("click", (e)=>{
    e.preventDefault();
    board.speed = "slow";
});

selectSpeedMedium.addEventListener("click", (e)=>{
    e.preventDefault();
    board.speed = "medium";
});

selectSpeedFast.addEventListener("click", (e)=>{
    e.preventDefault();
    board.speed = "fast";
});

selectSpeedVeryFast.addEventListener("click", (e)=>{
    e.preventDefault();
    board.speed = "veryfast";
});


// listerners for maze generation 
selectMazeTypeRandom.addEventListener("click", (e)=>{
    e.preventDefault();
    board.mazeType = "random";
});