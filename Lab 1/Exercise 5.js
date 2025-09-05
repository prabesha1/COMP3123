function array_max_sum(arr, k) {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));