const tail = function(array) {
  if (array.length <= 1) { // if its less than or equal to 1 empty the array
    return [];
  } else if (array.length === 2) { // if its exactly 2 return the array as is
    return array;
  } else { // anything more than 2 slice the head and return the new array
    array = array.slice(1); 
    return array;
  }
}

module.exports = tail;