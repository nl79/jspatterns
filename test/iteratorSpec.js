//load the chai library
var expect = require("chai").expect;

var Iterator = require("../lib/iterator.js");

describe("Iterator", function(){
    
    describe("Iterator()", function(){
        it("should return an valid response", function(){
            //test obj
            var testArr = [];
            testArr['one'] = 4;
            testArr['two'] = 28;                
            
            var iterator = new Iterator(testArr);
        
            expect(iterator).to.be.a("object");
            expect(iterator.count()).to.equal(2);
            expect(iterator.hasNext()).to.be.true;
            expect(iterator.getNext()).to.be.a("object"); 
        });
    });
});