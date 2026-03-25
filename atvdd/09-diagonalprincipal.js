/*
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
0 e 0
1 e 1
2 e 2

*


var miti = [
 [3, 5, 8],
 [1, 9, 2],
 [7, 1, 4]

]

console.table(miti);
for (let i = 0; i < miti.length; i++) {
     
}


for (let i = 0; i < 3; i++) {
    console.table(miti[i][i]);
}
*/
console.log("-----------------------------------------------------")

 let matriz1 = [
    [8, 1, 3],
    [2, 9, 1],
    [4, 6, 2], 
 ];
 console.table(matriz1);

 let x = 5

 for (let lin = 0; lin < lin.length; i++) {
    for (let col = 0; col < col.length; i++) {
       matriz1[lin][col] = matriz1 = [lin][col] * x
        console.log("matriz1:[ ", matriz1, ",", col, "] =", matriz1[lin][col])
        
    }
    
 }

 console.table(matriz1);
 console.table([0][0]) * x
 console.table([0][1]) * x
 console.table([0][2]) * x
 console.log("----------------------------------")