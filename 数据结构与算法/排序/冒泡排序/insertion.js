function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i;
    while (arr[j - 1] > temp && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
/**
 * 就是那后面的元素和前面的元素不断进行比较，如果小于前面的就插入前面，把前面的不断构造成有序的
 * 注意while (arr[j - 1] > temp && j > 0) 边界
 * 注意不是arr[j - 1] >  arr[j]
 */
console.log(insertionSort([6, 4, 1]));
