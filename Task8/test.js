class className{
    
    constructor(var1, var2){
        this.a = var1;
        this.b = var2;
    }
    print(){
        console.log(this.a, this.b);
    }
}
var p = new className(10, 5);
p.print();