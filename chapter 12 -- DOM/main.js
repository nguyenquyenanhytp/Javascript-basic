
//get element methods byId
var headingNode = document.getElementById('heading');

console.log({
    element: headingNode
});
//byClass--> html collection
var teams = document.getElementsByClassName('team');

console.log({
    element: teams
})
//byTagname-->
var call = document.getElementsByTagName('p');
console.log(call);

//query

var test = document.querySelector('.query');

console.log(test);

//querySelectorAll

listItem = document.querySelector('.box-1');

console.log(listItem.querySelectorAll('li'));

//setAtt

var setAttri = document.querySelector('h3');

setAttri.setAttribute('class', 'set');
console.log(setAttri);

//getAtt
console.log(setAttri.getAttribute('class'));


//classList
//add
var boxElement =
    document.querySelector('.box');

  boxElement.classList.add('red');

//contains

console.log(boxElement.classList.contains('red'));//kiểm tra class

//remove

boxElement.classList.remove('red');

//dom event example

var inputElement =
    document.querySelector('input[type="text"]');

inputElement.onchange = function(e) {
    console.log(e.target.value);
}  

//checkbox

var inputElement =
    document.querySelector('input[type="checkbox"]');

inputElement.onchange = function(e) {
    console.log(e.target.checked);
}   

//selectOption

var inputElement =
    document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value);
}

//preventDefault-->chặn hành vi mặc định
var aElements = document.links;

for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        
        if(!e.target.href.startsWith('https://www.google.com/')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.getElementById('abc');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick =
    function(e) {
        console.log(e.target);
    }

//StopPropagation--> chặn hành vi nổi bọt

document.getElementById('btt').onclick =
    function() {
        console.log('DIV');
    }

document.querySelector('button').onclick =
function(e) {
    e.stopPropagation();
    console.log('click me');
}

/*Event listener*/

var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    console.log(Math.random());
})
btn.addEventListener('click', function(e) {
    console.log('số ngẫu nhiên');
})