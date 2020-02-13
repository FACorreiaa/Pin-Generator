"use strict";
exports.__esModule = true;
//Save the numbers to an array
exports.saveToArray = function () {
    var arr = [];
    for (var index = 0; index < 4; index++) {
        var result = getRandomNumber(0, 9);
        arr.push(result);
    }
    if (isValid(arr)) {
        return arr;
    }
    else {
        exports.saveToArray();
    }
    return arr;
};
//Generate random numbers between 0 and
var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//check if the array has 3 consecutive equal values
var isValid = function (array) {
    for (var i = 0; i + 2 < array.length; i++) {
        var n1 = array[i], n2 = array[i + 1], n3 = array[i + 2];
        if (isConsecutive(n1, n2) && isConsecutive(n2, n3))
            return false;
    }
    return true;
};
//check for consecutive numbers
var isConsecutive = function (n1, n2) {
    return Math.abs(n1 - n2) === 1;
};
exports["default"] = exports.saveToArray;
