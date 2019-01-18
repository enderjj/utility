/**
 * 
 * @param {function} Constructor 
 */
// function objectCreate(Constructor) {
//   if (!Constructor || (typeof Constructor !== 'function')) {
//     throw new Error('Constructor must be a function!');
//   }

//   var obj = new Object(); // 创建新对象

//   obj.__proto__ = Constructor.prototype; // 新对象的原型等于构造函数原型

//   var len = arguments.length;

//   if (len === 1) {
//     Constructor.apply(obj);
//   } else {
//     var args = [];

//     for (var i = 1; i < len; i++) {
//       args.push('arguments[' + i + ']');
//     }

//     var result = Constructor.apply(obj, args); // 在新对象上执行构造函数

//     if (typeof result === 'object') {
//       obj = result;
//     }
//   }

//   return obj;
// }

function objectCreate() {
  var obj = new Object(); // 创建新对象

  if (!arguments.length) { // 如果未传入任何参数，直接返回 Object 实例
    return obj;
  }

  var Constructor = Array.shift.apply(arguments); // 取出传入的构造函数

  if (!Constructor || (typeof Constructor !== 'function')) {
    throw new Error('Constructor must be a function!');
  }

  obj.__proto__ = Constructor.prototype; // 新对象的原型等于构造函数原型

  var result = Constructor.apply(obj, arguments); // 在 obj 对象上执行构造函数

  return typeof result === 'object' ? result : obj;

}

function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

var person = objectCreate(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin

function Test (name, age) {
  this.strength = 60;
  this.age = age;

  return {
      name: name,
      habit: 'Games'
  }
}

var person1 = new Test('Kevin', '18');

console.log(person1.name) // Kevin
console.log(person1.habit) // Games
console.log(person1.strength) // undefined
console.log(person1.age) // undefined

function Test1 (name, age) {
  this.strength = 60;
  this.age = age;

  return 'handsome boy';
}

var person = new Test1('Kevin', '18');

console.log(person.name) // undefined
console.log(person.habit) // undefined
console.log(person.strength) // 60
console.log(person.age) // 18
