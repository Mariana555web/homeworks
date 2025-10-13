function map(arr, fn) {
	const size = arr.length;
	const res = [];

	for (let i = 0; i < size; ++i) {
		res.push(fn(arr[i]));
	}

	return res;
}

const arr = [1, 2, 3, 4, 5];

console.log(map(arr, function(value) {
	return value * value;
}))
