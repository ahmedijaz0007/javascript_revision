function rollDice(){
    let roll = Math.floor(Math.random()*6 +1);
    console.log(roll);
}


function throwDice(num){
    for (let i=0;i< num;i++){
        rollDice();
    }
}

throwDice(2);