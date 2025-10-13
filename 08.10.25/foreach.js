function forEach(arr, fn) {
	const size = arr.length;

	for (let i = 0; i < size; ++i) {
		fn(arr[i]);
	}	

	return;
}


const arr = [1, 2, 3, 4, 5]

forEach(arr, console.log);
