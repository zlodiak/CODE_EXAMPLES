var isEven = function(num) {
	var result;

	if(num == 0) {
		result = 'ноль'
	} else if(num % 2 == 0) { 
		result = 'чётное' 
	} else {
		result = 'нечётное' 
	};

	return result;
};

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));