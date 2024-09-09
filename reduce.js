
const grades = [34,25,56,34,67,90]


let sum = grades.reduce((sum,currVal)=> sum+currVal,50)
console.log(sum)



const votes = ["y","n","y","n","y","n","y","n","n","n"]

let count = votes.reduce((vote,currVal)=>{
    if (vote[currVal]){
        vote[currVal]++
    }
    else{
        vote[currVal] = 1
    }
    return vote
    }
,{})

console.log(count)