Function.prototype.call2 = function (obj) {
  var object = obj || window;

  object.func = this; // 将当前执行的函数赋值给 obj.func 属性

  var args = []; // 用来保存传入的参数

  // 将第二个至最后一个参数保存在 args 数组中
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  var result = eval('object.func(' + args + ')'); // 执行函数

  delete object.func; // 删除新增的 obj.func 属性

  return result;
}

var value = 1;

var globalObj = {
  value: 2
};

function test(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

var resultOutput = test.call2(globalObj, 'Jiao', 27);
var anotherOutput = test.call2(null, 'ender', 18);

console.log(resultOutput);
console.log(anotherOutput);
// alert(resultOutput.value + ',' + resultOutput.name + ',' + resultOutput.age);
// alert(anotherOutput.value + ',' + anotherOutput.name + ',' + anotherOutput.age);
