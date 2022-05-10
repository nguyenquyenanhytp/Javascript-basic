//1.toán tử số học
var a = 5;
var b = 3;
var num = 2;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(++num);
console.log(--num);
//2.toán tử gán
var name = 'nguyen quyen anh';
//3. toán tử so sánh
var c = 100;
var d = 102;
if(c < d ) {
    console.log('a nhỏ hơn b');
}
//4.toán tử logic
if( c > 0 && d > 0 ) {
    console.log(' hai số lớn hơn 0')
}
var age = 24;
var nextAge = age + 1;
console.log(nextAge);

// tiền tố - hậu tố ++ --
console.log('--- Hậu tố ---');

var num1 = 1;

console.log(num1++); // 1
console.log(num1); // 2

console.log(num1++); // 2
console.log(num1); // 3

console.log('--- Tiền tố ---');

var num2 = 1;

console.log(++num2); // 2
console.log(num2); // 2

console.log(++num2); // 3
console.log(num2); // 3
//toán tử nối chuỗi
var str = 'big';
str +='bang';
console.log(str);
//toán tử nối chuỗi
var firstName = 'Nguyễn';
var lastName = 'Quyền Anh';
var fullName = `${firstName} ${lastName}`;
console.log(fullName);

var a = 2;
var b = '2';
if (a === b) {
    console.log('đúng');
} else {
    console.log('sai');
} 
//kiểu dữ liệu boolean
var age = 19;
var canBuyAlcohol = age > 18;
console.log('có thế');
console.log(typeof canBuyAlcohol);
//ví dụ toán tử logic
var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b < 0) {
    console.log('đúng');
} else {
    console.log('sai');
}
//kiểu dữ liệu
var myObject = {
    name : 'nguyễn quyền anh',
    age : 24,
    add : 'HN'
}
console.log(myObject);

//array

var myArray = [
    'toán', 'văn', 'anh'
]
console.log(myArray);