function indexOf(arr, target) {
	const size = arr.length;

	for (let i = 0; i < size; ++i) {
		if (arr[i] === target) {
			return i;
		}
	}

	return -1;
}

const arr = [1, 2, 3, 4, 5];

console.log(indexOf(arr, 8));
