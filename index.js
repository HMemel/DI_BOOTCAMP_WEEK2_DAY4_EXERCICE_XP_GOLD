// Exercise 1 : Is_Blank

function is_Blank(str) {
    if (str.length == 0) {
        return true;
    }
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));


// Exercise 2 : Abbrev_name

function abbrev_name(str) {
    let array = str.split(" ");
    return `${array[0]} ${array[1][0]}.`
}

console.log(abbrev_name("Robin Singh"));


// Exercise 3 : SwapCase

function swapCase(str) {
    str = str.split("");
    for (let i in str) {
        if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join("");
}

console.log(swapCase("The Quick Brown Fox"));



// Exercise 4 : Omnipresent Value


function isOmnipresent(array, num) {
    for (let i of array) {
        if (i.indexOf(num) == -1) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

