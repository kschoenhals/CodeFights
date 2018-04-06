// Given an array of strings, return another array containing all of its longest strings

function allLongestStrings(inputArray) {
    
    var longest = inputArray[0].length;
    
    for(var i = 0; i < inputArray.length; i++) {
        
        if(longest < inputArray[i].length) {
            longest = inputArray[i].length;
        }
    }
    
    inputArray = inputArray.filter((element)=> {
        return element.length === longest;
    });
    return inputArray;
}
