//tạo hàm sum cơ bản
function sum () {
    alert(1 + 2);
}
//tạo hàm triple
function triple (num) {
    var tong = num * 3
    console.log(tong);
}
function say (message) { //tham số message
    console.log(message);
}
say('hello Javascript');// đối số
//truyền nhiều tham số
function myFunction (test1, test2) {
    console.log(test1);
    console.log(test2);
}
myFunction('tham số thứ nhất', 'tham số thứ hai');
//argument
function ex1 () {
    console.log(arguments);
}
ex1(1, 'dvd', 'vcd');
//for of
function listName() {
    var myString = ''
    for (var name of arguments) {//argument trả về array
        console.log(name);
        myString += `${name} - `;
    }
    console.log(myString);
}
listName('nam', 'huy', 'long');
//return
function cong (a, b) {
    return a + b; 
}
var tong = cong(12, 32);
console.log(tong);
//ham sum 
function sum(a, b) {
    return a + b;
}
var result = sum(20, 10);
console.log(result);
//ham triple
function triple (num) {
    return num*3;
}
var tich = triple(3,3);
console.log(tich);
//declaration function
nameFunction();
function nameFunction () {
    console.log('funDecla');
}
// expression function
expFunction();//false
var expFunction = function() {
    console.log('ExpressFun');
}