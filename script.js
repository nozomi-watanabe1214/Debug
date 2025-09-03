function toOneDimension(previousValue, currentValue){
//4(2回)
    console.log(previousValue);
    //予想：[ 'A1', 'A2', 'A3' ]、[ 'B1', 'B2', 'B3' ]
    //結果：[ 'A1', 'A2', 'A3' ]、[ 'A1', 'A2', 'A3', 'B1', 'B2', 'B3' ]
    
    //returnでの戻り値（変数）入れ替え後
    //予想：[ 'A1', 'A2', 'A3' ]、[ 'B1', 'B2', 'B3', 'A1', 'A2', 'A3']
    //結果：同上
    console.log(currentValue);
    //予想：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    //結果：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    
    //returnでの戻り値（変数）入れ替え後
    //予想：[ 'B1', 'B2', 'B3' ]、[ 'C1', 'C2', 'C3' ]
    //結果：同上

    return currentValue.concat(previousValue);
}//2

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];//3

console.log(sampleArrayA);
//予想：[ 'A1', 'A2', 'A3' ]…[ 'C1', 'C2', 'C3' ]の3つの要素
//結果：同上

var sampleArrayB = sampleArrayA.reduce(toOneDimension);
//5
console.log(sampleArrayB);
//予想：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]
//結果：[ 'A1', 'A2', 'A3' …　'C1', 'C2', 'C3' ]

//returnでの戻り値（変数）入れ替え後
//予想：[ 'C1', 'C2', 'C3' …　'A1', 'A2', 'A3']
//結果：同上
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
//6(9回)
    console.log(counterVar);
    //予想：0~9
    //結果：0~9
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    console.log(sampleArrayB);
    document.write('<br/>');
}//7
