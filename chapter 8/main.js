//rẽ nhánh trong js

var date = 5;

if (date === 2) {
    console.log('hôm nay là thứ 2');
} else if (date === 3) {
    console.log('hôm nay là thứ 3');
} else if (date === 4) {
    console.log('hôm nay là thứ 4');
} else {
    console.log('hôm nay là thứ 5 || 6 || 7 || 8');
}

//bt
function run(a) {
    if (a%15 == 0) {
        return 3;
    }else  if (a%5 == 0) {
        return 2;
    }else  if (a%3 == 0) {
        return 1;
    }
};

console.log(run(3));
console.log(run(5));
console.log(run(15));

//câu lệnh rẽ nhánh switch

var date = 10;

switch(date) {
    case 2:
        console.log('hôm nay là thứ 2');
        break;
    case 3:
        console.log('hôm nay là thứ 3');
        break;
    case 4:
        console.log('hôm nay là thứ 4');
        break; 
    case 5:
        console.log('hôm nay là thứ 5');
        break;

    default: 
        console.log('không biết');     
}
//toán tử 3 ngôi

var priceBook = {
    name: 'sách',
    coin: 30
 }
var result = priceBook.coin > 0 ? `${priceBook.coin} USD` : 'Tặng';//ví dụ
console.log(result);

//bt
function getCanVoteMessage(age) {
    return age >= 18 ? 'Bạn có thể bỏ phíu' : 'Bạn chưa được bỏ phíu';
 }
 console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
 console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'