//load the chai library
var expect = require("chai").expect;

var DecCustomer = require("../lib/decorator.js");

describe("Decorator", function(){

    describe("Decorator()", function(){
        it("should return an object", function(){
            
            expect(DecCustomer).to.be.a("object"); 
        });
        
        //return 0 when none numeric values are passed
        it("should have properties", function () {
            expect(DecCustomer).to.have.ownProperty('entity_id');
            expect(DecCustomer).to.have.ownProperty('Fname');
            expect(DecCustomer).to.have.ownProperty('Lname');
            expect(DecCustomer).to.have.ownProperty('tel');
            expect(DecCustomer).to.have.ownProperty('addr');
            expect(DecCustomer).to.have.ownProperty('dateOfBirth');
            expect(DecCustomer).to.have.ownProperty('active');
        });
        
        it("should have methods", function() {
            
            expect(DecCustomer.setStatus).to.be.a('function');
            expect(DecCustomer.setDOB).to.be.a('function'); 
        })
    });
});