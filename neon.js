function info() {
    console.log('hello');
    console.log('!');
}
info();

function summ(arr) {
    sum = 0;
    for(var i=0; i<arr.length; i++)
    sum += arr[i];    
    return sum;
}

var array = [2,3,4,6, 54];
var res = summ(array);
res *=2;
console.log (res);
