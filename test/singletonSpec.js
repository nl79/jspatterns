//load the chai library
var expect = require("chai").expect;

var SingletonTest = require("../lib/singleton.js");

describe("SingletonTest", function(){
    
    describe("SingletonTest()", function(){
        it("should return the same value", function(){
            //obj1
            var obj1 = SingletonTest.getInstance();
            //obj2
            var obj2 = SingletonTest.getInstance(); 
            
            expect(obj1).to.equal(obj2)
        });
    });
});
