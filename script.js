console.log(1);//1

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];
console.log(2);

var sampleArrayB = sampleArrayA.reverse();
console.log(3);//

function toOneDimension(previousValue, currentValue){
console.log(4);//
    return previousValue.concat(currentValue)
    console.log(5);
}
    
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
    console.log(6);//
            
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    document.write('<br/>');
} 
console.log(7);