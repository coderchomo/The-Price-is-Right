class Player{
    constructor(name,age,status) {
        this.name=name;
        this.age=age;
        this.status=status;
    }
    setStatus(status){
        this.status=status;
    }
    setName(name){
        this.name=name;
    }
    setAge(age){
        this.age=age;
    }
}
let player1=new Player("a","1","true");
let player2=new Player("b","2","true");
let player3=new Player("c","3","true");
let player4=new Player("d","4","true");