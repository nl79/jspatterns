//load the chai library
var expect = require("chai").expect;

var observer = require("../lib/observer.js");

var subscribers = new observer.subscribers();
var feed = new observer.feed();

//customer objects. 
var cus1 = new observer.customer();
var cus2 = new observer.customer();
var cus3 = new observer.customer(); 

describe("Subscribers()", function(){
     
    describe("Subscribers", function(){
        
        //should be objects
        it("should return an object", function(){
            
            expect(observer).to.be.a("object");
            expect(subscribers).to.be.a("object");
            expect(feed).to.be.a("object");
            expect(cus1).to.be.a("object");
            expect(cus2).to.be.a("object");
            expect(cus3).to.be.a("object");
        });
        
        //return 0 when none numeric values are passed
        it("should update the messages", function () {
            
            //add the customer to the feed.
            feed.addSubscriber(cus1);
            feed.addSubscriber(cus2);
            feed.addSubscriber(cus3);
            
            //update the feed.
            var message = "Update Message";
            feed.update(message); 
            
            expect(cus1.toString()).to.equal(message);
            expect(cus2.toString()).to.equal(message);
            expect(cus3.toString()).to.equal(message);
            
        });
    });
});