/*
Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice 
and endSlice indices. The function should return an array. 
*/
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let newArr = []

    // for (let i = 0; i < anim.length; i++) {
    //   if (anim.indexOf(anim[i]) >= beginSlice && anim.indexOf(anim[i]) <= endSlice) {
    //     newArr.push(anim[i]);
    //   }
    // }
    newArr = anim.slice(beginSlice, endSlice);
    return newArr
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);