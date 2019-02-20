/**
 * 浅拷贝 
 * 基本类型 拷贝具体值
 * 引用类型 拷贝引用
 * 实现类似 concat() slice() 函数的功能
 * @param {object} obj 
 */
function copy(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  let result = obj instanceof Array ? [] : {}; // 判断要拷贝的是对象还是数组

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // 如果是对象自己的属性才拷贝，不拷贝原型上的属性
      result[key] = obj[key];
    }
  }

  return result;
}

/**
 * 深拷贝
 * 基本类型 拷贝具体值
 * 引用类型 递归调用深拷贝函数进行拷贝
 * @param {object} obj 
 */
function deepCopy(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  let result = obj instanceof Array ? [] : {}; // 判断要拷贝的是对象还是数组

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = typeof key === 'object' ? deepCopy(obj[key]) : obj[key]; // 如果属性仍然是对象, 则递归调用深拷贝函数
    }
  }

  return result;
}
