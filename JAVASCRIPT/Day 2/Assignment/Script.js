let price = prompt("Enter the bill");
let discount;
function shopping(price, discount) {
    if(price > 2000) {
        discount = (price * 0.15);
    } else if(price > 6000) {
        discount = (price * 0.25);
        
    } else {
        discount = 0;
    }

    price = price - discount;
    return price;
}

console.log(shopping(price,discount));