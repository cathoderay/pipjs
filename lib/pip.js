euclideanDistance = function([x0, y0], [x1, y1]) {
  return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
}


pip = function(input, n) {
  if ( input.constructor != Array ) throw new Error("Argument is not an Array");
  if ( input.length <= 2 || (n != null && n >= input.length) ) return input;

  var pips = [0, (input.length - 1)];

  for(var i = 0; i < (n - 2); i++) {
    var best_value = best_index = -1;
    for(var j = 0; j < pips.length - 1; j++) {
      var start = pips[j];
      var end = pips[j+1];
      for (var k = start + 1; k + 1 < end; k++) {
        distance = euclideanDistance(input[start], input[k + 1]) + 
                   euclideanDistance(input[k + 1], input[end]);
        if ( distance > best_value ) {
          best_value = distance;
          best_index = k + 1;
        }
      }
    }
    pips.push(best_index);
  }

  pips.sort(); //TODO: this is costly

  for(var i = 0; i < n; i++){
    pips[i] = input[pips[i]];
  }

  return pips;
}
