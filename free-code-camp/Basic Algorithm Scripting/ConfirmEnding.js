// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  let size = target.length;

  if (str.substr(-size) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
