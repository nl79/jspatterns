//load the chai library
var expect = require("chai").expect;

//load the calc file
var Customer = require("../lib/constructor.js");

describe("constructor", function(){
    var customer = new Customer();
    describe("Customer()", function(){
        it("should return an object", function(){
            
            expect(customer).to.be.a("object");
        });
        
        //return 0 when none numeric values are passed
        it("should have properties", function () {
            expect(customer).to.have.ownProperty('entity_id');
            expect(customer).to.have.ownProperty('Fname');
            expect(customer).to.have.ownProperty('Lname');
            expect(customer).to.have.ownProperty('tel');
            expect(customer).to.have.ownProperty('addr');
        });
        
        it("should have methods", function() {
            
            expect(customer.firstName).to.be.a('function');
            expect(customer.toString).to.be.a('function');
            expect(customer.lastName).to.be.a('function');
            expect(customer.phoneNum).to.be.a('function');
            expect(customer.address).to.be.a('function');  
        }) 
    });
});