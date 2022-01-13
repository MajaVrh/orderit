let cart = [{}]


cart.push( { amount: 1, productID: 2 } )
cart.push( { amount: 2, productID: 1 } )
cart.push( { amount: 3, productID: 5 } )
cart.push( { amount: 4, productID: 6 } )

if(newAmount == 0){
    cart.filter(product => product.id == _id) > 0
}

cart.forEach(cartProudct => {
    if(cartProudct.id == _id) {
        cartProudct.amount = newAmount;
    }
})