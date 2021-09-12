let product1=1480000;
let product2=2910000;
function takeProduct1Value(){
    let value1=document.getElementById("1").value;
    return value1;
}
function takeProduct2Value(){
    let value2=document.getElementById("2").value;
    return value2;
}
function check1(){
    if(takeProduct1Value()==product1){
        alert("Push 1 X")
    }else{
        alert("You miss that");
    }
}
function check2(){
    if(takeProduct2Value()==product2){
        alert("Push 1 X")
    }else{
        alert("You miss that");
    }
}
