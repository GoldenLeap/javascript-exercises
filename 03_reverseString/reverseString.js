const reverseString = function(str) {
    let reverseStr = ''; // Initialize an empty string
    for(let i = str.length -1; i >= 0; i--){ // Loop through characters from end to start
        reverseStr+=str[i];
    }
    return reverseStr; // Return the reversed string
};

// Do not edit below this line
module.exports = reverseString;
