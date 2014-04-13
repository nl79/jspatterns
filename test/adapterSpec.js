//load the chai library
var expect = require("chai").expect;

var List = require("../lib/adapter.js");


describe("adapter", function(){
    
    var list = new List(); 
    
    describe("List()", function(){
        it("should return an object", function(){
            
            expect(list).to.be.a("object");
        });
        
        //return 0 when none numeric values are passed
        it("should have properties", function () {
            expect(list).to.have.ownProperty('objList');
        });
        
        it("should have methods", function() {
            
            expect(list.add).to.be.a('function');
            expect(list.get).to.be.a('function');
            expect(list.findByVal).to.be.a('function');
            expect(list.count).to.be.a('function');
        })
        
        it("Add and Return values", function() {
          
            var testKey = "keyTest"; 
            var testVal = "testVal"; 
    
            expect(list.add(testKey, testVal)).to.be.true;
            expect(list.count()).to.equal(1);
            expect(list.get(testKey)).to.equal(testVal)     
        })
        
    });
    
});