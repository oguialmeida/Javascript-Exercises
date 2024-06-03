/*
You will be provided with an initial array as the first argument to the destroyer function, followed by one 
or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can 
access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/
function destroyer(arr) {
    let myArg = []
    let argArr = arguments['0']
    let result = []

    for (let i = 1;i < arguments.length;i++) {
        myArg.push(arguments[i])
    }

    for (let j = 0;j < argArr.length;j++) {
        if (!myArg.includes(argArr[j])) {
            result.push(argArr[j])
        }
    }

    return result
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5)