function swap(left, right) {
  let temp = right;
  right = left;
  left = temp;
}
function findCenter(arr) {
  if (!arr.length) return;
  const mid = Math.floor(arr.length / 2);
  const left = 0;
  const right = arr.length - 1;

  if (arr[left] < arr[mid]) {
    swap(arr[left], arr[mid]);
  }
  if (arr[left] < arr[right]) {
    swap(arr[left], arr[right]);
  }
  if (arr[mid] < arr[right]) {
    swap(arr[mid], arr[right]);
  }
  return mid;
}

function quickSort(arr) {
  if (!arr.length) return [];
  const center = findCenter(arr);
  const c = arr.splice(center, 1);
  const l = [];
  const r = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i]);
    } else if (arr[i] > c) {
      r.push(arr[i]);
    }
  }
  return quickSort(l).concat(c, quickSort(r));
}

// console.log(quickSort([10, 1, 3, 4, 7, 2, 6]));

/**
 * 就是分治思想
 * 注意要判断递归终止条件
 */

function quickSort1(arr) {
  if (!arr.length) return [];
  let mid = Math.floor(arr.length / 2);
  const l = arr.filter((item) => item < arr[mid]);
  const r = arr.filter((item) => item > arr[mid]);
  return quickSort(l).concat(arr[mid], quickSort(r));
}
console.log(quickSort1([10, 1, 3, 4, 7, 2, 6]));