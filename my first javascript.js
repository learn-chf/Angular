//方式一new
var colors = new Array('red', 'blue', 'green');
//方式二字面量
var colors = ['red', 'blue', 'green']; // 创建一个包含 3 个字符串的数组
console.log(colors[1]);
colors[3] = 'brown';
console.log(colors.length);
var names = []; // 创建一个空数组
var hyBird = [1, 2, 'haha', {firstName: 'Yong', lastName: 'Wang'}];
console.log(hyBird[3].firstName);