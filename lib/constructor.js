function Customer () {
    this.entity_id = null;
    this.Fname = null;
    this.Lname = null;
    this.tel = null; 
    this.addr = null;
}

//toString method. 
Customer.prototype.toString = function() {
   
    return this.Fname + " " + this.Lname + " " + this.tel + " " + this.addr; 
}

//setting/getting the first name. 
Customer.prototype.firstName = function() {
    
    if (arguments.length >= 1) {
        this.Fname = arguments[0];
        return arguments[0]; 
    } else {
        return this.Fname; 
    }
}

//last name
Customer.prototype.lastName = function() {
    
    if (arguments.length >= 1) {
        this.Lname = arguments[0];
        return arguments[0]; 
    } else {
        return this.Lname; 
    }
}

Customer.prototype.phoneNum = function() {
    
    if (arguments.length >= 1) {
        this.tel = arguments[0];
        return arguments[0]; 
    } else {
        return this.tel; 
    }
}

Customer.prototype.address = function() {
    
    if (arguments.length >= 1) {
        this.addr = arguments[0];
        return arguments[0]; 
    } else {
        return this.addr; 
    }
}

module.exports = Customer; 
/*
cust = new Customer(); 
cust.firstName("first");
cust.lastName("last");
cust.phoneNum("555-555-5555");
cust.address("2234 Fun Drive, Neward NJ, 12345"); 

//console.log(result); 
console.log(cust.toString());
*/