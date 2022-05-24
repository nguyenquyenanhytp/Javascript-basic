//vòng lặp -- for

//example 
for (var i = 1; i <= 5; i++ ) {
    console.log(i);
}
//bt
function getRandNumbers(min, max, length) {
    var arrNum = [];
    for (var i = 0; i < length; i++) {
      arrNum.push(Math.random() * (max - min) + min);
    }
    return arrNum;
  }
  console.log(getRandNumbers(1, 4, 4));
//for--lấy ra phần tử
var myCar = [
    'Rolls Royce Sweptail',
    'Bugatti La Voiture Noire',
    'Maybach Exelero',
    'Lamborghini Veneno',
    'McLaren P1 LM'
];
var arrayLength = myCar.length;

for (var i = 0; i < arrayLength; i++ ) {
    console.log(myCar[i]);
}

//for--in --lặp qua key của object

var carObject =  {
  name :  'Pagani Zonda Barchetta',
  price : '17,5 triệu USD',
  color : 'black',
  speed : '355 km/h'
}
for (var key in carObject) {
    console.log(carObject[key]);
}

//for--in -- array
var animal = [
    'dog',
    'cat',
    'bee',
    'deer'
];
for (var key in animal) {
    console.log(animal[key]);
}
//bt
function run(object) {
    var myArray = [];
    for (var key in object ) {
        myArray.push(` Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return myArray;
}
console.log(run({name : 'Nguyễn quyền anh', age : 24}));
//for/of --> mảng

var languages = [
    'tiếng Việt',
    'tiếng Anh',
    'tiếng Pháp',
    'tiếng Nga'
];

for (var value of languages) {
    console.log(value);
}
//chuỗi

var myString = 'Qanh';
for (var value of myString) {
    console.log(value);
}
//obj
//c1 --> lấy key trong obj
var myObj = {
    name : 'Robin',
    age : 25 
};

for (var value of Object.keys(myObj)) {
    console.log(myObj[value]);
}

//while

var listName = [
    'Nam',
    'Linh',
    'Anh'
];

var i = 0;

while (i < listName.length) {
    console.log(listName[i]);
    i++;

}
//do/while

var i = 0;

do {
    i++;

    console.log(i);
} while (i < 5); //kiểm tra điều kiện từ lần chạy thứ 2

//example
var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('Nạp thẻ lần ' + i);

    //thành công
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3);

//break -- continue
//example break

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i >= 5) {
        break;// break dùng để thoát vòng lặp
    }
}
console.log('-------------------')

//example continue
for (var i = 0; i < 10; i++) {
    if (i%2 !== 0) {
        continue;//bỏ qua số lẻ
    }
    console.log(i);
}
console.log('-------------------')


//vòng lặp lồng nhau
 
var doubleArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < doubleArray.length; i++) {
    for (var j = 0; j < doubleArray[i].length; j++) {
        console.log(doubleArray[i][j]);
    }
}


   