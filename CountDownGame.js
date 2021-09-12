let productRound2Price=2499000;
function takeTheValue1(){
    let value1=document.getElementById("1").value;
    return value1;
}
function takeTheValue2(){
    let value2=document.getElementById("2").value;
    return value2;
}
function takeTheValue3(){
    let value3=document.getElementById("3").value;
    return value3;
}
function takeTheValue4(){
    let value4=document.getElementById("4").value;
    return value4;
}
function rightOrWrong(){
    if(takeTheValue1()==5&&takeTheValue2()==7&&takeTheValue3()==10&&takeTheValue4()==12){
        alert("You Won");
    }else{
        alert("Not Correct. Try again");
    }
}
