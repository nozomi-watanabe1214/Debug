//1
function toOneDimension(previousValue,　currentValue){
//4(2回)
    console.log(previousValue);
    return previousValue.concat(currentValue);
}//2


var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];//3
console.log(sampleArrayA);

var sampleArrayB = sampleArrayA.reduce(toOneDimension);
//5
console.log(sampleArrayB);
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
//6(9回)         
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    document.write('<br/>');
}//7
