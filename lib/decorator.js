function Customer () {
    this.entity_id;
    this.Fname;
    this.Lname;
    this.tel; 
    this.addr;
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

cust.setDOB(55);
cust.setStatus(true); 

console.log(cust.toString()); 



