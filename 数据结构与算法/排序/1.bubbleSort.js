function bubbleSort(arr) {
  const len = arr.length;
  // console.log(len);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
/**
 * 不断循环比较 01 12 23 34
 * len - 1：是因为每次比较的是 arr[j] 和 arr[j+1]
 * 所以 j 最大只能到 len - 2，否则 arr[j+1] 会越界。
 * - i：是因为每完成一轮，最后一个元素已经是当前未排序部分的最大值，下次就不用再比较了。
 * 每多一轮，已经排好序的元素就多一个，所以每次都可以少比较一次。
 */
// console.log(bubbleSort([4, 1, 2, 3]));
