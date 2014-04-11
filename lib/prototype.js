var Customer = {
    entity_id : 15,
    Fname: "",
    Lname: "",
    tel: "",
    addr: "",
    setId: function(val) {
        this.entity_id = val;  
    },
    getId: function() {
        return this.entity_id; 
    },
    toString: function() {
        return ""; 
    }
}

function NewCustomer (id) {
    var NewCustomer = function () {}; 
    NewCustomer.prototype = Customer;
    
    cust = new NewCustomer();
    
    cust.setId(id);
    return cust; 
}


var newCust = NewCustomer(15);

console.log(newCust.getId()); 