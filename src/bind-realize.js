Function.prototype.bind2 = function (obj) {
  // 如果调用 bind2 的不是函数，就抛出错误
  if (typeof this !== 'function') {
    throw new Error('Must be called by a function!');
  }

  var funcObj = this; // 获取调用 bind2 的函数对象

  var args = Array.prototype.slice.call(arguments, 1); // 如果有参数，就获取参数
  function transferFunc() { }; //中转函数

  var returnFunc = function () {
    var funcArgs = Array.prototype.slice.call(arguments); // 获取传入 returnFunc 的参数
    return funcObj.apply(this instanceof transferFunc ? this : obj, args.concat(funcArgs)); // 执行函数
  }

  transferFunc.prototype = funcObj.prototype;
  returnFunc.prototype = new transferFunc();

  return returnFunc;
}

var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

bindFoo('18');

var test = new bindFoo('20');

console.log(test.habit);
console.log(test.friend);
