//khai báo dạng number
var million = 1000000;
var million2 = 1e6;
console.log(million);
console.log(million2);

//isFinite
var num = Number.isFinite('1/6/2017');
console.log(num);

//isInteger
var num = Number.isInteger(Math.PI);
console.log(num);

//number parseFloat
var num = Number.parseFloat('12231.123123');
console.log(num);

//number parseInt
var num = Number.parseInt('123.213');
console.log(num);

//toFixed
var num = 23.1243;
console.log(num.toFixed());
console.log(num.toFixed(2));

//toString
var num = 10;
var text = num.toString();//convert sang string
console.log(text);
console.log(typeof text);
console.log(num.toString(2));//nhị phân
console.log(num.toString(8));//bát phân(octal)
console.log(num.toString(16));//thập lục
//kiểm tra NaN
var num = 'ee';
console.log(isNaN(num));

//bt
function isNumber (value) {
    if(typeof value == 'number' && !isNaN(value)) {
        return true;
    }else {
        return false;
    }
}
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false