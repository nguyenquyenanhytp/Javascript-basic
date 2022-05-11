//object trong js
var weight = 'cân nặng' //tạo key bằng cách đặt biến

var customerData = {
    name : 'Nguyễn Văn A',// key name -- thuộc tính 'Nguyen Văn A'
    age : 22,
    address : 'Hà Nội',
    height : '1m70',
    [weight]: '75kg',// truyền key cân nặng vào object bằng biến weight
    myFunction: function(){ //key function -- phương thức
        return this.age;
    }
}

console.log(customerData);
console.log(typeof customerData);
customerData.email = 'nguyenquyenanh@gmail.com';// thêm phần tử cho object
console.log(customerData);
var myAddress = 'address'
//gọi phần từ trong object
console.log(customerData.age);//c1
console.log(customerData['address']);//c2
console.log(customerData[myAddress]);//tìm bằng biến myAddress
delete customerData.name;//xóa key 'name' trong object
console.log(customerData);

console.log(customerData.myFunction());

//object constructor
var myUser = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

myUser.prototype.className = 'Javascript basic';//Object prototype -->thêm đối tượng ngoài Obj
myUser.prototype.getClassName = function() {
    return this.className;
}//Function

var admin = new myUser('Nguyễn', 'Quyền Anh', 'img');
var user1 = new myUser('nguyễn', 'văn a', 'avatar');

admin.contact = '0974312321123';
user1.mail = 'acvaa@gmail.dkd'

console.log(admin);
console.log(user1);

console.log(admin.fullName());
console.log(user1.fullName());
console.log(admin.className);
console.log(user1.getClassName());


//bt
var Animal = function(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}
var parrot = new Animal('vẹt', 2, '3km');
console.log(parrot);
//bt 
function Student (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
      Student.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
}

var student = new Student('Quyền Anh', 'Nguyễn');

console.log(student.firstName);  
console.log(student.lastName); 
console.log(student.getFullName());

//đối tượng Date
var date1 = Date();
console.log(date1);
console.log(typeof date1);//c1 trả về string

var date2 = new Date()
console.log(date2);
console.log(typeof date2);//c2 trả về Object
console.log(date2.getMonth());//--> truy vấn được phương thức  của object
console.log(date2.getDate());

//bt
var date = new Date;
function getNextYear () {
   return date.getFullYear() + 1;
}
console.log(getNextYear());
//example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(utcDate1.toUTCString());
//Math Object
console.log(Math.PI);//trả về số pi
console.log(Math.round(5.6));//làm tròn số
console.log(Math.abs(-4));//giá trị tuyệt đối
console.log(Math.ceil(1.000000001));//làm tròn lên trên
console.log(Math.floor(1.99999));//làm tròn dưới
console.log(Math.floor(Math.random() * 100));//số random
console.log(Math.min(-13, 0 -50 ,39, 5));//số nhỏ nhất
console.log(Math.max(-13, 0 -50 ,39, 5));//số lớn nhất

//bt
function getRandomItem(myArray) {
    var num = Math.floor(Math.random() * myArray.length);
    return myArray[num]
}
console.log(getRandomItem([1,4,5,6,-6]));
