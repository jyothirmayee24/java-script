//even or odd
for(let i=0;i<=20;i++)
{
    if (i % 2 === 0) 
        console.log(i + ' is even');
    else 
        console.log(i + ' is odd');   
}
// multiplication tables
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(i+ ' * ' + multiplier + ' = ' + result);
}
for (var multiplier = 1; multiplier <= 10; multiplier++) {
 for (var i = 1; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}
//grade assigner
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
for(i=60;i<=100;i++)
{
    console.log('For ' + i + ', you got a ' + assignGrade(i));
}