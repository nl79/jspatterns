//observer pattern.
function Subscribers() {
    //new oberver array. 
    this.subscribers = new Array(); 
}

Subscribers.prototype.add = function (sub) {
    //add a new subscriber. 
    this.subscribers.push(sub); 
}

Subscribers.prototype.get = function(index) {
    //if index is out of bounds return undefine.d 
    if (index >= this.subscribers.length) {
        return undefined; 
    }
    //return the subsriber at the specified index. 
    return this.subscribers[index]; 
}
Subscribers.prototype.remove = function (index) {
    //remove the subsriber. 
    this.subscribers.splice(index,1); 
}

Subscribers.prototype.count = function() {
    //get the length of the subscriber array. 
    return this.subscribers.length; 
}


//build the feed. 
function Feed() {
    //create a subscriber list
    this.subsribers = new Subscribers();
}
Feed.prototype.addSubscriber = function (sub) {
    //add a subscriber to the list
    this.subsribers.add(sub); 
}
Feed.prototype.removeSubscriber = function(index) {
    //remove a subscriber from the list
    this.subsribers.remove(index); 
}
Feed.prototype.update = function(data) {
    var count = this.subsribers.count();
    for(var i = 0; i < count; i++) {
        this.subsribers.get(i).update(data); 
    }
}


//the customer object that will be the subscriber. 
function Customer() {
    var data = null; 
}
Customer.prototype.update = function(data) {
    this.data = data;
}
Customer.prototype.toString = function() {
    return this.data; 
}






//tesst block
var cust1 = new Customer();
var cust2 = new Customer();
var cust3 = new Customer();

//sub list
var feed = new Feed();
feed.addSubscriber(cust1);
feed.addSubscriber(cust2);
feed.addSubscriber(cust3);

//send an update
feed.update("update 1 test");

console.log(cust1.toString());
console.log(cust2.toString());
console.log(cust3.toString());

//update 2
feed.update("Second Update");

console.log(cust1.toString());
console.log(cust2.toString());
console.log(cust3.toString());


