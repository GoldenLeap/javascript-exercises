const repeatString = function(str, num) {
    let text = ''; // Initialize an empty string
    if(num < 0){ // Return 'ERROR' if num is negative
        return 'ERROR';
    }
    for(i = 0; i < num; i++){ // Repeat the string 'num' times
        text += str;
    }
    return text; // Return repeated string
};

// Do not edit below this line
module.exports = repeatString;
