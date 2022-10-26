let c1 = {
    x : 5,
    y : 23,
}
printCoordinates = function printCoordinate(hometown, state) {
    console.log(this.x + ' ,' + this.y + " are coordinates of " + hometown + " , " + state);
}
printCoordinates.call(c1, "Mumbai", "Maharashtra");

let c2 = {
    x : 56,
    y : 45
}
// function borrowing
printCoordinates.call(c2, "Pune", "Maharashtra");

//using apply function for array
printCoordinates.apply(c2, ["Pune", "Maharashtra"]);