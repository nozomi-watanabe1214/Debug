console.log(1);//1

var sampleArrayA = [
    [ 'A1', 'A2', 'A3' ],
    [ 'B1', 'B2', 'B3' ],
    [ 'C1', 'C2', 'C3' ]
];
console.log(2);//var変数定義のため実行順に合わせて前へ。

function toOneDimension(previousValue, currentValue){
console.log(4);//2回
    return currentValue.concat(previousValue);
    console.log(5);//実行されず。？？
}
var sampleArrayB = sampleArrayA.reduce(toOneDimension);
console.log(3);//4のあと？？→function関数の後へ



    
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++){
    console.log(6);//
            
    document.write('sampleArrayB['+counterVar+']:');
    document.write(sampleArrayB[counterVar]);
    document.write('<br/>');
} 
console.log(7);