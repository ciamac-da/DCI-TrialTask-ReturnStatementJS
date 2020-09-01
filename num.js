// The first solution 
function minMax(){
    let foo = [0,1,12,33,20,-7]
    return [Math.min(...foo), Math.max(...foo)]
}
console.log("The first Solution -The lowest and the highest numbers are:",minMax())


// The second solution 
function minMax2(){
    let minMax =[]
    let num = [0,1,12,33,20,-7]
    let min = Math.min(...num)
    let max = Math.max(...num)
    minMax.push(min, max)
 
    return minMax
}
console.log("The second Solution -The lowest and the highest numbers are:",minMax2())



// The third solution 

function minMax3(){
    let nums = [0,1,12,33,20,-7]
    let sorted = nums.sort((a,b) => a-b);
    console.log(sorted)
    return [nums[0],nums[nums.length-1]];
    
}
console.log("The third Solution -The lowest and the highest numbers are:",minMax3())
