// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
    var oneNumber = numberArray_1[_i];
    var ordinaryEnding = void 0;
    if (oneNumber === 1) {
        ordinaryEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinaryEnding = "nd";
    }
    else {
        ordinaryEnding = "th";
    }
    console.log(" ".concat(oneNumber, " ").concat(ordinaryEnding));
}
