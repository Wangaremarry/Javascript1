class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitPriceList={"orange":30,"mango":15,"avocado":40}
        this.getTotalCost=function(){ 
        return `${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.orange}`
        }
}
}
let kioskCalc = new KioskCalc("orange",9);
console.log(kioskCalc.getTotalCost())