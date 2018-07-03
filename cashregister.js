var cart={
    item1:40,
    item2:30,
    item3:15,
    item4:50,
};
function cashRegister(items){
    var items = Object.keys(cart); // array of items by key   
    var sum = 0; 
    
    for (var i = 0; i < items.length; i++) {
      var itemName = items[i]; // get the name of the key for the item
      var itemPrice = cart[itemName]; // get the price for the item
      sum += Number.parseInt(itemPrice); // convert the price to a float and add it to the sum
    }
  return sum;
}
console.log(cashRegister(cart));