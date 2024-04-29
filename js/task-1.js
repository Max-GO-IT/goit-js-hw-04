function isEnoughCapacity(products, containerSize){
let totalProducts = 0;
for (let key in products) {
    totalProducts += products[key];
}
    if (totalProducts <= containerSize){
        return true;
}    
return false;
}
    
