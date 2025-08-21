console.log(1);// 1->1

function toOneDimension( previousValue, currentValue){
    console.log(2);// 2->4, 5
    return previousValue.concat(currentValue);
    console.log(3);// 3->???
}
console.log(4);// 4->2

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];

console.log(5);// 5->3
var sampleArrayB = sampleArrayA.reduce(toOneDimension);
console.log(6);// 6->6

for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
    console.log(7);// 7->8 ... 16(9)

    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    document.write('<br/>');
}
console.log(8);// 8->17



