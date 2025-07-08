function shellSort(arr) {
  let length = arr.length;
  let gap = Math.floor(length / 2);
  //第一层循环：while循环(使gap不断减小)
  while (gap >= 1) {
    //第二层循环：以gap为增量，进行分组，对分组进行插入排序
    //重点为：将index = gap作为选中的第一个数据
    for (let i = gap; i < length; i++) {
      let temp = arr[i];
      let j = i;
      //第三层循环:寻找正确的插入位置
      while (arr[j - gap] > temp && j >= gap) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      //将j位置的元素设置为temp
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}
/**
 * 根据增量 gap 分组 [8, 9, 1, 7, 2, 3, 5, 4, 6, 0] 根据 5 分组 那就是 83 95 14 76 20
 * 83 95 14 76 20 -》 38 59 14 67 02
 * 根据增量 gap 2 分组 3 5 1 6 0  8 9 4 7 2 -》 01356 24789
 * 插入排序 0124356789
 */
console.log(shellSort([8, 9, 1, 7, 2, 3, 5, 4, 6, 0]));


