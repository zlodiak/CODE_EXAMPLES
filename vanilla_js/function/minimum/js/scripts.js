var min = function(num1, num2) {
	var result;

	if(num1 < num2) { result = num1 };
	if(num2 < num1) { result = num2 };
	if(num2 == num1) { result = num1 + ' = ' + num2 };

	return result;
};

console.log('1, 3', min(1, 3));
console.log('11, 5', min(11, 5));
console.log('3, 3', min(3, 3));