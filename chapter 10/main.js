 var courses = [
     {
         id: 1,
         name: 'Javascript',
         coin: 250
     },
     {
         id: 2,
         name: 'HTML, CSS',
         coin: 0
     },
     {
         id: 3,
         name: 'Ruby',
         coin: 0
     },
     {
         id: 4,
         name: 'PHP',
         coin: 400
     },
     {
         id: 5,
         name: 'ReactJS',
         coin: 500
     },
     {
        id: 6,
        name: 'ReactJS',
        coin: 50
    }
 ];
//forEach--duyệt qua các phần tử trong mảng
 courses.forEach(function(course, index) {
    console.log(index, course);
 });

//every()-- kiểm tra các phần tử thỏa mãn 1 đk chung
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//some()=== every() -- 1 phần tử thỏa mãn điều kiện sẽ trả về true
var isFree = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(isFree);

//find()--tìm kiếm *chỉ trả về 1 phần tử
var course = courses.find(function(course, index){
    return course.name === 'Ruby';
});

console.log(course);

//filter === find *trả về nhiều phần tử

var course = courses.filter(function(course, index){
    return course.name === 'ReactJS';
});

console.log(course);

console.log('phương thức map ------------')
//map 
function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    };
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//reduce

var totalCoin = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
}, 0);

console.log(totalCoin);

//example
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, []);

console.log(flatArray);

//example 2

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title:"NodeJS"
            }
        ]
    },
];

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
}, []);


console.log(newCourses);
 //includes method -->tìm kiếm chuỗi trong 1 chuối ,trả về boolean

 var title = 'responsive web design responsive';

 console.log(title.includes('responsive', 2));

 //array

 var myArr = ['lớp 10A', 'lớp 10B', 'lớp 10C'];

 console.log(myArr.includes('lớp 10D', 0));