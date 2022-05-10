//array trong Js
var dataTypes = [
    'số',
    'chuỗi',
    'mảng',
    'object'
]
console.log(dataTypes);
console.log(Array.isArray(dataTypes));//kiểm tra kiểu dữ liệu
console.log(dataTypes.length);
console.log(dataTypes[1]);

//làm việc với array
//toString
console.log(dataTypes.toString());
console.log(typeof dataTypes.toString());

//join- giống toStrong
console.log(dataTypes.join(' & '));

//pop- xóa phần tử cuối mảng và trả về phần tử xóa
console.log(dataTypes.pop());
console.log(dataTypes);

//push- thêm phần tử cuối mảng
console.log(dataTypes.push('symbol', 'null'));
console.log(dataTypes);

//shift- xóa phần tử đầu mảng
console.log(dataTypes.shift());
console.log(dataTypes);

//unShift - thêm phần tử đầu mảng
console.log(dataTypes.unshift('false'));
console.log(dataTypes);

//Splicing--xóa chèn phần tử vào mảng
var nameHouse = [
    'D1',
    'D2',
    'D3'
];
nameHouse.splice(1, 1);//xóa phần tử trong mảng 
console.log(nameHouse);

nameHouse.splice(1, 0 , 'D4', 'D5');//chèn phần tử vào mâng
console.log(nameHouse);

//concat--gộp array
var friend = [
    'Nam',
    'Long',
    'Tuấn',
]
console.log (nameHouse.concat(friend));

//slicing - cắt phần tử trong array
var grade = [
    'lớp1',
    'lớp2',
    'lớp3'
]
console.log(grade);
console.log(grade.slice(0, -2))
//bt
function joinWithCharacter (array, charactor) {
    return array.join(charactor);
}
console.log(result);
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result);
//bt 2
function getLastElement (animals) {
    return animals.slice(-1);
}
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); 
console.log(animals); 
//bt 3
function getFirstElement (animals) {
    return animals.slice(0, 1);
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); 
console.log(animals); 



