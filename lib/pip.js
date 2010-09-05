euclideanDistance = function([x0, y0], [x1, y1]) {
  return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
}


pip = function(input, n) {
  if ( input.constructor != Array ) throw new Error("Argument is not an Array");
  if ( input.length <= 2 || (n != null && n > input.length) ) return input;

  pips = [0, (input.length - 1)];
  
  for(var i = 0; i < n; i++) {
  }

  for(var i = 0; i < n; i++){
    pips[i] = input[pips[i]];
  }

  return pips;
}
