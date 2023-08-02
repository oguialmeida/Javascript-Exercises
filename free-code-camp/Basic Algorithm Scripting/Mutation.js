/* Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.*/
function mutation(arr) {
  const value1 = arr[0].toLowerCase()
  const value2 = arr[1].toLowerCase().split("")
  let count = 0
  
  value2.map(e => {
    if (value1.includes(e)) {
        count++
    }
  })
  return count === value2.length
}
  
mutation(["hello", "hey"]);