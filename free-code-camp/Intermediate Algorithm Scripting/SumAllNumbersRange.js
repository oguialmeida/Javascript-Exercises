/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
    let numSum = 0//arr.reduce((acc, e) => acc + e, 0);
    let bgNum, smNum = 0

    arr[0] > arr[1] ? bgNum = arr[0] : bgNum = arr[1]
    arr[0] < arr[1] ? smNum = arr[0] : smNum = arr[1]

    for (smNum;smNum <= bgNum;smNum++) {
        numSum += smNum
    }

    return numSum
}

sumAll([1, 4])
