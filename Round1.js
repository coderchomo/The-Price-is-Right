let productPrice=235000;
let priceOfPlayer1=document.getElementById("price1").value;
let priceOfPlayer2=document.getElementById("price2").value;
let priceOfPlayer3=document.getElementById("price3").value;
let priceOfPlayer4=document.getElementById("price4").value;
function comparePrice(guessPrice,truePrice){
    let differentMoney=0;
        differentMoney=truePrice-guessPrice;
        return differentMoney;
}
let priceOfRound1=[];
priceOfRound1[0]=comparePrice(priceOfPlayer1,productPrice);
priceOfRound1[1]=comparePrice(priceOfPlayer2,productPrice);
priceOfRound1[2]=comparePrice(priceOfPlayer3,productPrice);
priceOfRound1[3]=comparePrice(priceOfPlayer4,productPrice);
function findTheWinnerPrice(price){
    let winnerPrice=price[0];
    let index=0;
    for(let i=0;i<price.length;i++){
        if(winnerPrice>price[i]&&price[i]>0){
            winnerPrice=price[i];
            index=i;
        }
    }return index;
}
let index=findTheWinnerPrice(priceOfRound1);
let player=[];
player[0]=player1;
player[1]=player2;
player[2]=player3;
player[3]=player4;
function whoIsTheWinner(){
    document.getElementById("show").innerText="The winner is "+player[index];
}