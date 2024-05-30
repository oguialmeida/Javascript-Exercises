/*
Use the some method inside the checkPositive function to check if any element in arr 
is positive. The function should return a Boolean value.
*/
function checkPositive(arr) {
    // Only change code below this line
    let lRet = false

    lRet = arr.some((e) => {
        return (e * -1) < 0
    })

    return lRet
    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5])