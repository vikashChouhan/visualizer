export function Cell(size) {
    this.isSource = false;
    this.id = "";
    this.isEnd = false;
    this.isWall = false;
    this.size = size;
}

Cell.mouseDownOnCell = false;
Cell.mouseDownOnSourcePoint = false;
Cell.mouseDownOnEndPoint = false;

Cell.prototype.Initilize = function () {
    this.element = document.createElement("td");
    this.element.style = `width: ${this.size}px; height: ${this.size}px`;
}

Cell.prototype.addEventListner = function (event, callback) {
    this.element.addEventListener(event, callback);
}