/* Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */
function bouncer(arr) {
  arr = arr.filter((e) => Boolean(e) === true);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
