//tạo chuỗi c1
var fullName1 = new String('chuỗi');
console.log(fullName1);
//tạo chuỗi c2
var fullName2 = 'nguyễn \r anh';
console.log(fullName2);
console.log(fullName2.length);
console.log(typeof fullName2);
//template string ES6
firstName = 'Nguyễn';
lastName = 'Quyền Anh'
console.log(` tôi là ${firstName} ${lastName} `);

//length

var myString = 'học javascript tại ja ja ja';
console.log(myString.length);

//find index

console.log(myString.indexOf('ja'));
console.log(myString.indexOf('ja', 6 ));
console.log(myString.lastIndexOf('ja'));
console.log(myString.search('ja'));

//cut string

console.log(myString.slice(8, 14));

//replace

console.log(myString.replace(/ja/g, 'la'));

//upper case
console.log(myString.toUpperCase());
//lower case
console.log(myString.toLowerCase());

//trim
var inputName = '  nguyễn quyền anh    '
console.log(myString.trim());

//split
var subject = 'văn, anh, địa';
console.log(subject.split(', '));

//get a character by index
const myString2 ='Nguyễn Quyền Anh';
console.log(myString2.charAt(7));
console.log(myString2[1]);
//độ dài chuỗi
function getContentLength(content) {
    return content.length;
  }
  console.log(getContentLength('JavaScript'));
  console.log(getContentLength('Hello World'));

//chuyển chữ hoa
function getUpperCaseName (name) {
    var getUpperCaseName = name;
    return name.toUpperCase();
}

console.log(getUpperCaseName("Nguyen van a"));
console.log(getUpperCaseName("nGuyen vAn C"));