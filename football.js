// The first solution

function footballPoints(wins, draws, losses){
    return wins*3 + draws 
}
console.log("the first solution ", footballPoints(3,3,90))


// The second one 
footballPoints2 = (w,d,l) =>(3*w)+d
console.log("the second solution ", footballPoints2(2,3,3))


// The third  solution
 var x = function footballPoinst3(w,d,l){
     return w*3 + d 
 }
 var points = x(3,3,3)
console.log("the third solution ", points)

