function Customer () {
    this.entity_id = null;
    this.Fname = null;
    this.Lname = null;
    this.tel = null; 
    this.addr = null;
}

Customer.prototype.toString = function() {
    return this.dateOfBirth + " " + this.active; 
}


var cust = new Customer(); 

cust.dateOfBirth = "";
cust.setDOB = function(value) {
    this.dateOfBirth = value; 
}

cust.active = false;
cust.setStatus = function(val) {
    this.active = val; 
}

module.exports = cust; 

/*
cust.setDOB(55);
cust.setStatus(true); 

console.log(cust.toString());
*/



