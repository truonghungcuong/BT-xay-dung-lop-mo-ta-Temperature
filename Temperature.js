class Temperature{
    c;

    constructor(c) {
        this.c=c;
    }
    getC(){
        return this.c;
    }
    getFahrenheit(){
        return 9/5*this.c+32;
    }
    getKenvin(){
        return this.c+273.15;
    }
}