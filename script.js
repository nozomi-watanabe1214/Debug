function toOneDimension(previousValue,　currentValue){
//4(2回)
    console.log(previousValue);
    //予想：[ 'A1', 'A2', 'A3' ]、[ 'B1', 'B2', 'B3' ]
    //実際：[ 'A1', 'A2', 'A3' ]、[ 'A1', 'A2', 'A3', 'B1', 'B2', 'B3' ]??
    console.log(currentValue);
    //予想：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    //実際：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    
    return previousValue.concat(currentValue);
}//2

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];//3

console.log(sampleArrayA);
//予想：[ 'A1', 'A2', 'A3' ]…[ 'C1', 'C2', 'C3' ]の3つの要素
//実際：同上

var sampleArrayB = sampleArrayA.reduce(toOneDimension);
//5
console.log(sampleArrayB);
//予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
//実際：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
//6(9回)
    console.log(counterVar);
    //予想：0~9
    //実際：
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    console.log(sampleArrayB);
    //予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
    //実際：同上
    document.write('<br/>');
}//7
