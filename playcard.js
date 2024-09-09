function playcard(){
 family = ["club","spades","diamond","heart"]
 number = ["2","3","4","5","6","7","8","9","10","A","J","Q","K"]
 num = Math.floor(Math.random()*13)+1
 fam = Math.floor(Math.random()*4)+1

 return {value:number[num],suit:family[fam]}

}


console.log(playcard())
console.log(playcard())
console.log(playcard())
console.log(playcard())
console.log(playcard())
console.log(playcard())