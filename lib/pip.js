euclideanDistance = function([x0, y0], [x1, y1]) {
    return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
}


pip = function(input) {
  if ( input.constructor != Array ) throw new Error("Argument is not an Array");
  if ( input.length <= 2 ) return input;
}

