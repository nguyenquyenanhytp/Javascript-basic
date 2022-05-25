//callback

Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;

    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }

    return output;
}

var courses = [
    'javascript',
    'php',
    'python',
    'ruby'
];

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));

//example

var courses2 = [
    'ABC',
    'PHP'
];

console.log(courses2);

//forEach2

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var listMovies = [
    'Maverick',
    'Maika',
    'HARRY POTTER'
];

listMovies.forEach2(function(listMovie, index, array) {
    console.log(listMovie, index, array);
});

//filter

Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
           var result = callback(this[index], index, this);
           if (result) {
                output.push(this[index]);
           } 
        }
    }
    return output;
}

var nameCars = [
    {
        name: 'Ferrari 488 GTB',
        cost: 262000
    },
    {
        name: 'Ferrari 488 Pista',
        cost:  330000
    },
    {
        name: 'Ferrari 488 Pista Spider',
        cost: 350000
    }
];

var filterCars = nameCars.filter2(function(car, index, array) {
    console.log(car, index, array)
    return car.cost > 3e5;
});
    console.log(filterCars);
    
//some

var nameCourses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)){
                return true;
            };
        }
    }
    return false;
}

var result = nameCourses.some2(function(course, index, array) {
    return course.isFinish;
})

console.log(result);

//every

Array.prototype.every2 = function(callback) {
    var output = true;

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }

    return output;
}

var tours = [
    {
        name: 'London',
        price: 500,
        finish: true,
    },
    {
        name: 'China',
        price: 200,
        finish: true,
    },
    {
        name: 'Norway',
        price: 500,
        finish: false,
    },
];

var result = tours.every2(function(tour, index, array){
    return tour.finish;
});

console.log(result);