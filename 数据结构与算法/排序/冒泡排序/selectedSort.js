function selectedSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
/**
 * 选一个元素 跟厚度后面比较 交换 Index 每一轮找出最大的排到后面
 * 最后一个元素不需要再比较了，因为前面的都已经排好序，最后一个自然是最大的
 * 注意一下let j = i + 1 每次从后一个开始比较
 */
console.log(selectedSort([4, 3, 1, 2]));
