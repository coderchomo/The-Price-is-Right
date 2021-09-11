let productRound2Price=2499000;
let trueReturn="aabb";
let playerChoose=document.getElementById("1").value+document.getElementById("2").value+document.getElementById("3").value+document.getElementById("4");
function rightOrWrong(){
    if(playerChoose==trueReturn){
        document.getElementById("a").innerText="Congratulation you won";
    }else{
     alert("Choose again");
    }
}