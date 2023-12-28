/* We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to 
loop through the allUsers object and return the number of users whose online property is set to true. An example of an object 
which could be passed to countOnline is shown below. Each user will have an online property set to either true or false. */
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    let count = 0

    for (let on in allUsers) {
        if (allUsers[on].online) {
            count++
        }
    }
    return count
}

console.log(countOnline(users))