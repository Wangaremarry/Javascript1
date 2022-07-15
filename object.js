let Fruitkiosk=[
    {
        name:"Apple",
        quantity:2,
        price: 20.00,
    }
]
 function calculateFruitCost(name,quantity){
    let x=Fruitkiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${x.price*quantity}`);
}
calculateFruitCost("Apple",5)