const pi=3.414;
function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
   }
function halfOf(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
    }
function areaOfCircle(radius) {
    var area = pi * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
   }
function operations(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}
squareNumber(3);
halfOf(5);
percentOf(5, 10);
areaOfCircle(2);
operations(5);