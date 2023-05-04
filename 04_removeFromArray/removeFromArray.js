const removeFromArray = function (array, ...elems) {
	for (const arg of elems) {
		array.splice(array.indexOf(arg), 1)
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
