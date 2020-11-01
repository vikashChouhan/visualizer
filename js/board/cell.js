export function Cell(size) {
    this.isWall = false;
    this.size = size;
}
Cell.mouseDownOnCell = false;

Cell.prototype.Initilize = function () {
    this.element = document.createElement("td");
    this.element.style = `width: ${this.size}px; height: ${this.size}px`;
    
    // Add Listeners
    this.addEventListner("mousedown", () => {
        Cell.mouseDownOnCell = true;
        this.makeWall();
    });
    this.addEventListner("mouseup", () => {
        Cell.mouseDownOnCell = false;
    });
    this.addEventListner("mousemove", ()=>{this.makeWall();});
}

Cell.prototype.addEventListner = function (event, callback) {
    this.element.addEventListener(event, callback);
}


Cell.prototype.makeWall = function() {
    if (Cell.mouseDownOnCell && !this.isWall) {
        this.element.classList.toggle("make-wall");
        this.isWall = true;
    }
}
