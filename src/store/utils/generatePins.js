"use strict";
exports.__esModule = true;
var saveToArray_1 = require("./saveToArray");
//generate 5 unique pins
exports.generateAllPins = function () {
    var arr = [];
    for (var index = 0; index <= 4; index++) {
        var result = saveToArray_1.saveToArray();
        if (!arr.includes(result))
            arr.push(result);
    }
    return arr;
};
console.log(this.generateAllPins());
