function Coffee(vars) {
    this.type = vars.type || 'black';
    this.size = vars.size || 'large'; 
    this.sugar = vars.sugar || 2; 
    this.cream = vars.cream || 2;
    this.milk = vars.milk || 2;
    this.price = vars.price || 1234; 
}

function Tea(vars) {
    this.name = vars.name || 'Indian Deligh'; 
    this.type = vars.type || 'green'; 
    this.sugar = vars.sugar || 2; 
    this.lemon = vars.lemon || 1; 
    this.price = vars.price || 234;
}

function Soda(vars) {
    this.name = vars.name || "coke";
    this.type = vars.type || "diet";
    this.ice = vars.ice || "full";
    this.size = vars.size || "large"; 
}

function BeverageShop() {};
BeverageShop.prototype.getBeverage = function(type, args) {
    var item = type || 'coffee';
    var settings =  args || {}; 

    switch(item){
        case "coffee":
            item = new Coffee(settings);
            break;
        case "tea":
            item = new Tea(settings);
            break;
        case "soda":
            item = new Soda(settings);
            break; 
    }
    
    return item; 
}
var shop = new BeverageShop(); 
console.log(shop.getBeverage()); 
