console.log(1);

function toOneDimension(previousValue,　currentValue){
console.log(2);//4(2回（5のあと？）)
    return currentValue.concat(previousValue);
    console.log(3);//単体では実行されず。
}
console.log(4);//2

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];
console.log(5);//3

var sampleArrayB = sampleArrayA.reduce(toOneDimension);
console.log(6);//5

    
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
    console.log(7);//7(0‐8の9回)
            
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    document.write('<br/>');
} 
console.log(8);8