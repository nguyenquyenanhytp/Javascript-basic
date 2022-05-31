//JSON
var a = '1';
//parse
console.log(JSON.parse(a));
console.log(typeof a);

//Stringify
console.log(JSON.stringify({
    name: 'Nguyễn Quyền Anh',
    age: 16,
}));

//Promise (sync, async)--> đồng bộ và bất đồng bộ trong JS

setTimeout(function() {
    console.log(100);
}, 1000);

console.log(2);

//Promise (pain)

setTimeout(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
        setTimeout(function() {
            console.log(3);
        }, 100);
    }, 100);
}, 100);

//promise(concept)

var promise = new Promise(
    //Executor
    function(resolve, reject) {
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);
    }
);

promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function() {
        console.log('thất bại');
    })
    .finally(function() {
        console.log('Done!');
    });

//exam

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log('a');
        return sleep(1000);
    })
    .then(function() {
        console.log('b');
        return sleep(1000);
    })
    .then(function() {
        console.log('c');
        return new Promise(function(resolve, reject) {
            reject('fail stop!');
    })
    .then(function() {
        console.log('d');
         return sleep(1000);
        });
    })
    .catch(function(err) {
        console.log(err);
    })

    // promise.resolve

    var promise = Promise.resolve('thành công');

    promise
    .then(function (result) {
        console.log('result: ', result);
    });

    //promise.all

    var pro1 = new Promise(
        function(resolve) {
            setTimeout(function() {
                resolve(['A']);
            }, 3000);
        }
    );

    var pro2 = new Promise(
        function(resolve) {
            setTimeout(function() {
                resolve(['N', 'H']);
            }, 6000);
        }
    );

    Promise.all([pro1, pro2])
        .then(function(result) {
            var result1 = result[0];
            var result2 = result[1];

            console.log(result1.concat(result2));
        });
    
