/**
 * 数组元素去重
 * @param {array} array 要去重的数组
 * @param {boolean} isSorted 表示数组是否已经排序
 * @param {function} iteratee 数组元素的转换函数（用于根据特定的规则去重）
 */
function unique(array, isSorted, iteratee) {
  let result = []; // 保存结果数组
  let seen = []; // 保存应用 iteratee 函数的中间结果

  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i];
    let computed = iteratee ? iteratee(value, i, array) : value; // 如果传入了 iteratee, 则对数组元素进行转换

    if (isSorted) { // 如果数组已经排序
      if (!i || seen !== computed) { // 如果是第一个元素, 或者当前元素不等于前一个元素, 就将当前元素放入结果数组中
        result.push(value);
      }

      seen = value; // 更新 seen 为当前值, 以便下次比较
    } else if (iteratee) { // 如果未排序, 但是需要应用某种规则排序
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        result.push(value);
      }
    } else {
      if (result.indexOf(value) === -1) { // 如果只是简单去重
        result.push(value);
      }
    }
  }

  return result;
}
