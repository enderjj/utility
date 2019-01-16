Function.prototype.apply2 = function (obj) {
  var object = obj || window;
  var result;

  object.func = this; // 设置对象属性函数

  if (arguments.length <= 1) {
    result = object.func();
  } else {
    var arr = arguments[1]; // 用于保存参数
    var args = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }

    result = eval('object.func(' + args + ')'); // 执行函数

    delete object.func; // 删除新增属性
  }

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

var resultOutput = test.apply2(globalObj, ['Jiao', 27]);
var anotherOutput = test.apply2(null, ['ender', 18]);

console.log(resultOutput);
console.log(anotherOutput);
console.log(test.apply2(null));
// alert(resultOutput.value + ',' + resultOutput.name + ',' + resultOutput.age);
// alert(anotherOutput.value + ',' + anotherOutput.name + ',' + anotherOutput.age);
