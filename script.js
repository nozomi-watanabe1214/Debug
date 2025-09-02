//1
function toOneDimension(previousValue,　currentValue){
//4(2回)
    console.log(previousValue);
    //予想：[ 'A1', 'A2', 'A3' ]、[ 'B1', 'B2', 'B3' ]
    //実際：
    console.log(currentValue);
    //予想：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    //実際：
    
    return previousValue.concat(currentValue);
}//2


var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];//3

console.log(sampleArrayA);
//予想：[ 'A1', 'A2', 'A3' ]…[ 'C1', 'C2', 'C3' ]の3つの要素
//実際：

var sampleArrayB = sampleArrayA.reduce(toOneDimension);
//5
console.log(sampleArrayB);
//予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
//実際：
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
//6(9回)
    console.log(sampleArrayB);
    //予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    console.log(sampleArrayB);
    //予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
    document.write('<br/>');
}//7
